import { ActionFunctionArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { CoursesService } from "client";

import { Header } from "~/components/Course/Header";
import { Navigation } from "~/components/Course/Navigation";
import { SubCommunites } from "~/components/Course/SubCommunites";
import { Topics } from "~/components/Course/Topics";

export const loader = async ({ request, params }: ActionFunctionArgs) => {
  const course = await CoursesService.getCourseByCommunityId(
    parseInt(String(params.community_id))
  );
  return json({
    imgSrc: "",
    course: course,
    navigation: [
      {
        name: "Questions",
        to: `/courses/${course.community.id}`,
      },
      {
        name: "Videos",
        to: `/courses/${course.community.id}/videos`,
      },
      {
        name: "Notes",
        to: `/courses/${course.community.id}/notes`,
      },
      {
        name: "Resources",
        to: `/courses/${course.community.id}/resources`,
      },
    ],
    subcommunites: [
      { name: "2024", to: "#" },
      { name: "All", to: "#" },
      { name: "2023", to: "#" },
      { name: "2022", to: "#" },
    ],
  });
};

export default function Course() {
  const { navigation, imgSrc, subcommunites, course } =
    useLoaderData<typeof loader>();

  const {
    community: { units },
    id,
    name,
  } = course;
  return (
    <>
      <Navigation navigation={navigation} name={course.name} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between">
          <Topics
            topics={units}
            createUnitLink={`/createunit?community_id=${course.community.id}`}
          />

          <Outlet />

          <SubCommunites subs={subcommunites} />
        </div>

        {/* <Header name={name} imgSrc={imgSrc} /> */}
      </div>
    </>
  );
}
