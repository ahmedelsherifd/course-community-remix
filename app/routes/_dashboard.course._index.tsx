import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CreateQuestionModal } from "~/components/Course/CreateQuestionModal";

import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

// import styles from "~/components/Editor/styles.css";

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
import { QuestionsService } from "client";
export const loader = async () => {
  const data = await QuestionsService.getQuestions();
  return json({
    questions: [
      ...data.map((q) => ({ id: q.id, text: q.name })),
      {
        id: "1",
        text: `Prove by induction that every connected graph 
                        G=(V, E) for which |E| = |V| -1 is acyclic`,
      },
    ],
  });
};

export default function Questions() {
  const { questions } = useLoaderData<typeof loader>();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="px-6 max-w-lg">
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
              <div className="px-6 py-4">{question.text}</div>
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
            </div>
          ))}
        </div>
      </div>
      <CreateQuestionModal open={open} setOpen={setOpen} />
    </>
  );
}
