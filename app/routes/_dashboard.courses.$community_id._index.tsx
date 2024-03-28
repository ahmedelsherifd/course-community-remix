import { json } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CreateQuestionModal } from "~/components/Course/CreateQuestionModal";
import {
  ChevronUpIcon,
  PaperClipIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno

// import styles from "~/components/Editor/styles.css";

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
import { QuestionsService, Question, Answer } from "client";
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const community_id = parseInt(String(params.community_id));
  const questions = await QuestionsService.getQuestions(community_id);
  return json({
    questions,
    community_id,
  });
};

export default function Questions() {
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
            Ask question
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
      <CreateQuestionModal
        open={open}
        setOpen={setOpen}
        action={`/courses/${community_id}/createquestion`}
      />
    </>
  );
}

export function QuestionListItem({
  question,
  isChecked,
  toggle,
}: {
  question: Question;
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
          <div className="text-zinc-800 text-xs font-normal">
            {question.vote}
          </div>
          <ArrowDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="">{question.text}</div>
        {question.choices.map((choice) => (
          <div key={choice.id} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                checked={isChecked(choice.id)}
                onChange={() => {
                  toggle(choice.id);
                }}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                {choice.text}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnswerListItem({ answer }: { answer: Answer }) {
  const fetcher = useFetcher();

  return (
    <div className="flex px-6 py-4 border-b">
      <div className="mr-4 ">
        <div className="flex flex-col items-center justify-center space-y-2">
          <fetcher.Form method="post" action="/createvoteonanswer">
            <input readOnly hidden name="answer_id" value={answer.id} />

            <button type="submit" className="">
              <ArrowUpIcon className="h-5 w-5" />
            </button>
          </fetcher.Form>
          <div className="text-zinc-800 text-xs font-normal">{answer.vote}</div>
          <ArrowDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div>
        {answer.choices?.length > 0 && (
          <div>
            <div className="underline">Answer</div>
            {answer.choices?.map((choice, index) => (
              <div key={index}>{choice.choice.text}</div>
            ))}
          </div>
        )}
        <div>
          {answer.choices?.length > 0 && (
            <div className="underline">Explantion</div>
          )}
          <div>{answer.text}</div>
        </div>
      </div>
    </div>
  );
}

function QuestionCombo({
  question,
  community_id,
}: {
  question: Question;
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
        <button
          type="button"
          className="text-gray-900 w-full bg-white border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Answers
        </button>
        <button
          type="button"
          className="text-gray-900 w-full bg-white  border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Share
        </button>
      </div>
      <div className="p-3 border-b">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <Form
              action={`/createanswer?community_id=${community_id}`}
              method="post"
            >
              <input readOnly hidden name="question_id" value={question.id} />
              {choices.map((choice) => (
                <input readOnly hidden name="choice" value={choice} />
              ))}
              <div className="border-b border-gray-200 focus-within:border-indigo-600">
                <label htmlFor="answer" className="sr-only">
                  Add your answer
                </label>
                <textarea
                  rows={3}
                  name="text"
                  id="answer"
                  className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
                  placeholder="Add your answer..."
                />
              </div>
              <div className="pt-2 flex justify-end">
                {/* <div className="flex items-center space-x-5">
              <div className="flow-root">
                <button
                  type="button"
                  className="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
            </div> */}
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add answer
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="">
        {question.answers.map((answer) => (
          <AnswerListItem answer={answer} />
        ))}
      </div>
    </div>
  );
}
