import { ActionFunctionArgs } from "@remix-run/node";
import { QuestionsService } from "client";
import { json } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const question_id = parseInt(String(formData.get("question_id")));

  return json({
    vote: await QuestionsService.createVoteOnQuestion({
      question_id: question_id,
    }),
  });
}
