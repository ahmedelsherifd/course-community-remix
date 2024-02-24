import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { Header } from "~/components/Course/Header";
import { Navigation } from "~/components/Course/Navigation";
import { SubCommunites } from "~/components/Course/SubCommunites";
import { Topics } from "~/components/Course/Topics";

export const loader = async () => {
  return json({
    name: "MIT Algorithms-6-006",
    imgSrc: "",
    questions: [
      {
        text: `Prove by induction that every connected graph 
                        G=(V, E) for which |E| = |V| -1 is acyclic`,
      },
    ],
    topics: [
      {
        name: "Week 1: Introduction and Data Structure",
        to: "#",
      },
      {
        name: "Week 2",
        to: "#",
      },
      {
        name: "Week 3",
        to: "#",
      },
    ],
    navigation: [
      {
        name: "Questions",
        to: "/course",
      },
      {
        name: "Videos",
        to: "/course",
      },
      {
        name: "Notes",
        to: "/course",
      },
      {
        name: "Resources",
        to: "/course",
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
  const { name, navigation, topics, imgSrc, subcommunites } =
    useLoaderData<typeof loader>();
  return (
    <>
      <div>Course detail page</div>
      <Header name={name} imgSrc={imgSrc} />
      <Topics topics={topics} />
      <Navigation navigation={navigation} />
      <SubCommunites subs={subcommunites} />
      <Outlet />
    </>
  );
}