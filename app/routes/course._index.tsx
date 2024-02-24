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
      <div>
        {questions.map((question) => (
          <div key={question.id}>{question.text}</div>
        ))}
      </div>
    </>
  );
}
