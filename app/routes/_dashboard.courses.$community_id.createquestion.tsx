import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { QuestionsService } from "client";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const text = String(formData.get("text"));
  const ans1 = String(formData.get("ans1"));
  const ans2 = String(formData.get("ans2"));
  const ans3 = String(formData.get("ans3"));
  const ans4 = String(formData.get("ans4"));

  const community_id = parseInt(String(params.community_id));
  let choices = [];
  if (ans1 !== "null") {
    choices.push({ text: ans1 });
  }
  if (ans2 !== "null") {
    choices.push({ text: ans2 });
  }
  if (ans3 !== "null") {
    choices.push({ text: ans3 });
  }
  if (ans4 !== "null") {
    choices.push({ text: ans4 });
  }

  if (text) {
    await QuestionsService.createQuestion({
      text: text,
      community_id: community_id,
      choices: choices,
    });
  }

  return redirect(`/courses/${community_id}`);
}

export default function CreateQuestion() {
  return <div></div>;
}
