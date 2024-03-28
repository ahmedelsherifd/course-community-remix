import { json } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";

import { CreatePostModal } from "~/components/Course/CreatePostModal";
import {
  ChevronUpIcon,
  PaperClipIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno

// import styles from "~/components/Editor/styles.css";

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
import { PostsService, Post } from "client";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const community_id = parseInt(String(params.community_id));
  const questions = await PostsService.getPosts(community_id);
  return json({
    questions,
    community_id,
  });
};

export default function Posts() {
  const { questions, community_id } = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="px-6 w-full max-w-lg ">
        <div className="bg-white px-6 py-4 rounded-md">
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="w-full text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            Add post
          </button>
        </div>
        <div>
          {questions.map((question) => (
            <QuestionCombo
              question={question}
              community_id={community_id}
              key={question.id}
            />
          ))}
        </div>
      </div>
      <CreatePostModal
        open={open}
        setOpen={setOpen}
        action={`/courses/${community_id}/createpost`}
      />
    </>
  );
}

export function QuestionListItem({
  question,
  isChecked,
  toggle,
}: {
  question: Post;
  makeSelect: (choiceId: number) => void;
  makeUnSelect: (choiceId: number) => void;
  toggle: (choiceId: number) => void;
  isChecked: (choiceId: number) => boolean;
}) {
  const fetcher = useFetcher();

  return (
    <div className="flex px-6 py-4">
      <div className="mr-4 ">
        <div className="flex flex-col items-center justify-center space-y-2">
          <fetcher.Form method="post" action="/createvoteonquestion">
            <input readOnly hidden name="question_id" value={question.id} />

            <button type="submit" className="">
              <ArrowUpIcon className="h-5 w-5" />
            </button>
          </fetcher.Form>
          <div className="text-zinc-800 text-xs font-normal">{0}</div>
          <ArrowDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="">{question.text}</div>
      </div>
    </div>
  );
}

function QuestionCombo({
  question,
  community_id,
}: {
  question: Post;
  community_id: number;
}) {
  const [choices, setChoices] = useState<number[]>([]);
  const makeSelect = (choiceId: number) => {
    setChoices((choices) => [...choices, choiceId]);
  };
  const makeUnSelect = (choiceId: number) => {
    setChoices((choices) => choices.filter((item) => item != choiceId));
  };
  const toggle = (choiceId: number) => {
    let checked = isChecked(choiceId);
    if (checked) {
      makeUnSelect(choiceId);
    } else {
      makeSelect(choiceId);
    }
  };
  const isChecked = (choiceId: number) => choices.includes(choiceId);
  return (
    <div key={question.id} className="bg-white mt-4 ">
      <QuestionListItem
        question={question}
        makeSelect={makeSelect}
        makeUnSelect={makeUnSelect}
        isChecked={isChecked}
        toggle={toggle}
      />
      <div className="flex justify-stretch border-t">
        {/* <button
          type="button"
          className="text-gray-900 w-full bg-white border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Answers
        </button> */}
      </div>
    </div>
  );
}
