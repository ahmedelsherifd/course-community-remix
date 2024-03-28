import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { PostsService } from "client";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const text = String(formData.get("text"));

  const community_id = parseInt(String(params.community_id));

  if (text) {
    await PostsService.createPost({
      text: text,
      community_id: community_id,
    });
  }

  return redirect(`/courses/${community_id}/posts`);
}

export default function CreateQuestion() {
  return <div></div>;
}
