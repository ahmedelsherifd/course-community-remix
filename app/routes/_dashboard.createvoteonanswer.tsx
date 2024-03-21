import { ActionFunctionArgs } from "@remix-run/node";
import { AnswersService, QuestionsService } from "client";
import { json } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const answer_id = parseInt(String(formData.get("answer_id")));

  return json({
    vote: await AnswersService.createVoteOnAnswer({
      answer_id: answer_id,
    }),
  });
}
