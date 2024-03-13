import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { QuestionsService } from "client";

export const loader = async () => {
  return json({
    question: {
      text: `Prove by induction that every connected graph 
        G=(V, E) for which |E| = |V| -1 is acyclic`,
    },
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const community_id = parseInt(String(url.searchParams.get("community_id")));

  const formData = await request.formData();
  const text = String(formData.get("text"));
  const question_id = parseInt(String(formData.get("question_id")));
  await QuestionsService.createAnswer({
    question_id: question_id,
    text: text,
  });
  return redirect(`/courses/${community_id}`);
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
