import { json } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CreateQuestionModal } from "~/components/Course/CreateQuestionModal";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno

// import styles from "~/components/Editor/styles.css";

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
import { Answer, Question, QuestionsService } from "client";
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
            <div key={question.id} className="bg-white mt-4 ">
              <Question question={question} />
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
                      <input
                        readOnly
                        hidden
                        name="question_id"
                        value={question.id}
                      />
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
                  <Answer answer={answer} />
                ))}
              </div>
            </div>
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

function Question({ question }: { question: Question }) {
  return (
    <div className="flex px-6 py-4">
      <div className="mr-4 flex-shrink-0 ">
        <input readOnly hidden name="question_id" value={question.id} />
        <button type="submit" className="p-4">
          <svg
            fill="red"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.947 511.947"
          >
            <g>
              <g>
                <path
                  d="M476.847,216.373L263.513,3.04c-4.267-4.053-10.88-4.053-15.04,0L35.14,216.373c-4.16,4.16-4.16,10.88-0.107,15.04
            c2.027,2.027,4.8,3.2,7.573,3.2h128V501.28c0,5.867,4.8,10.667,10.667,10.667h149.333c5.867,0,10.667-4.8,10.667-10.667V234.613
            h128c5.867,0,10.667-4.8,10.667-10.667C479.94,221.067,478.873,218.4,476.847,216.373z M330.607,213.28
            c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128V223.947c0-5.867-4.8-10.667-10.667-10.667H68.42L255.94,25.547L443.567,213.28
            H330.607z"
                />
              </g>
            </g>
          </svg>
        </button>

        <div className="text-zinc-800 text-xs font-normal  py-2">
          {question.vote}
        </div>

        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.027 512.027"
        >
          <g>
            <g>
              <path
                d="M479.114,283.84c-1.707-3.947-5.547-6.507-9.813-6.507h-128V10.667C341.3,4.8,336.5,0,330.633,0H181.3
            c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128c-5.867,0-10.667,4.8-10.56,10.773c0,2.773,1.067,5.44,3.093,7.36L248.5,508.907
            c4.16,4.16,10.88,4.16,15.04,0l213.333-213.44C479.86,292.373,480.82,287.893,479.114,283.84z M255.967,486.293L68.34,298.667
            H181.3c5.867,0,10.667-4.8,10.667-10.667V21.333h128V288c0,5.867,4.8,10.667,10.667,10.667h112.96L255.967,486.293z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
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

function Answer({ answer }: { answer: Answer }) {
  return (
    <div className="flex px-6 py-4 border-b">
      <div className="mr-4 flex-shrink-0 ">
        <svg
          fill="red"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.947 511.947"
        >
          <g>
            <g>
              <path
                d="M476.847,216.373L263.513,3.04c-4.267-4.053-10.88-4.053-15.04,0L35.14,216.373c-4.16,4.16-4.16,10.88-0.107,15.04
        c2.027,2.027,4.8,3.2,7.573,3.2h128V501.28c0,5.867,4.8,10.667,10.667,10.667h149.333c5.867,0,10.667-4.8,10.667-10.667V234.613
        h128c5.867,0,10.667-4.8,10.667-10.667C479.94,221.067,478.873,218.4,476.847,216.373z M330.607,213.28
        c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128V223.947c0-5.867-4.8-10.667-10.667-10.667H68.42L255.94,25.547L443.567,213.28
        H330.607z"
              />
            </g>
          </g>
        </svg>

        <div className="text-zinc-800 text-xs font-normal  py-2">
          {answer.vote}
        </div>

        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.027 512.027"
        >
          <g>
            <g>
              <path
                d="M479.114,283.84c-1.707-3.947-5.547-6.507-9.813-6.507h-128V10.667C341.3,4.8,336.5,0,330.633,0H181.3
        c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128c-5.867,0-10.667,4.8-10.56,10.773c0,2.773,1.067,5.44,3.093,7.36L248.5,508.907
        c4.16,4.16,10.88,4.16,15.04,0l213.333-213.44C479.86,292.373,480.82,287.893,479.114,283.84z M255.967,486.293L68.34,298.667
        H181.3c5.867,0,10.667-4.8,10.667-10.667V21.333h128V288c0,5.867,4.8,10.667,10.667,10.667h112.96L255.967,486.293z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div>
        {answer.choices?.length > 0 && (
          <div>
            <div>Answer</div>
            {answer.choices?.map((choice) => (
              <div key={choice.id}>{choice.text}</div>
            ))}
          </div>
        )}
        <div>
          {answer.choices?.length > 0 && <div>Explantion</div>}
          <div>{answer.text}</div>
        </div>
      </div>
    </div>
  );
}
