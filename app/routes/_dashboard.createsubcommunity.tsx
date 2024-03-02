import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    course: {
      id: "1",
      name: "Algorithms-6.006 MIT",
    },
  });
};

export default function () {
  /*
    form page
    title: Create subcommunity
    render: [course.name]
    input fields: [name ,submit]
    */

  const { course } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      Create subcommunity page
    </div>
  );
}
