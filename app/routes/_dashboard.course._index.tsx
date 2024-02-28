import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    questions: [
      {
        id: "1",
        text: `Prove by induction that every connected graph 
                        G=(V, E) for which |E| = |V| -1 is acyclic`,
      },
    ],
  });
};

export default function Questions() {
  const { questions } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="px-6 max-w-lg">
        <div className="bg-white px-6 py-4 rounded-md">
          <button
            type="button"
            className="w-full text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            Ask question
          </button>
        </div>
        <div>
          {questions.map((question) => (
            <div key={question.id}>{question.text}</div>
          ))}
        </div>
      </div>
    </>
  );
}
