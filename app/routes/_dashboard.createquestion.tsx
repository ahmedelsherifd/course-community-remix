import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { QuestionsService } from "client";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("text"));
  if (name) {
    await QuestionsService.createQuestion({ name: name });
  }

  return redirect("/course");
}
export default function CreateQuestion() {
  return <div></div>;
}
