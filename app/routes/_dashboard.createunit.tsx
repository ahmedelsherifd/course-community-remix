import {
  ActionFunctionArgs,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { CoursesService, UnitsService } from "client";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const community_id = parseInt(String(url.searchParams.get("community_id")));

  return json({
    course: await CoursesService.getCourseByCommunityId(community_id),
  });
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const url = new URL(request.url);
  const community_id = parseInt(String(url.searchParams.get("community_id")));

  await UnitsService.createUnit({
    community_id: community_id,
    name: name,
  });
  return redirect(`/courses/${community_id}`);
};

export default function () {
  /*
    form page
    title: Create topic
    render: [course.name]
    input fields: [name ,submit]
    */

  const { course } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create Unit
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form className="space-y-6" method="post">
            <div>
              <h3 className="font-medium text-2xl">{course.name}</h3>
            </div>

            <div>
              {/* <div
                className="block text-sm font-medium text-gray-700"
                title={course.name}
                key={course.id}
              >
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Course
                </label>

                <div className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  {course.name}
                </div>
              </div> */}

              <label className="mt-6 block text-sm font-medium text-gray-700">
                Unit name
              </label>
              <div className="mt-1">
                <input
                  //placeholder="Topic name"
                  id="topicname"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <input
                  id="description"
                  placeholder="Add Description"
                  name="description"
                  type="Text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
