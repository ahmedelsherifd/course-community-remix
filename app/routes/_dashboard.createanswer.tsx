import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    question: {
      text: `Prove by induction that every connected graph 
        G=(V, E) for which |E| = |V| -1 is acyclic`,
    },
  });
};

export default function () {
  /*
    form page
    title: Add  answer
    render: [question.text]
    input fields: [text ,submit]
    */

  const { question } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      Create answer page
    </div>
  );
}
