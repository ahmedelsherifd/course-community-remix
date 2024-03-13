import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { QuestionsService } from "client";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const text = String(formData.get("text"));
  const community_id = parseInt(String(params.community_id));

  if (text) {
    await QuestionsService.createQuestion({
      text: text,
      community_id: community_id,
    });
  }

  return redirect(`/courses/${community_id}`);
}

export default function CreateQuestion() {
  return <div></div>;
}
