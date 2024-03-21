import { Answer, Question } from "client";

export function Question({ question }: { question: Question }) {
  return (
    <div className="flex px-6 py-4">
      <div className="mr-4 ">
        <input readOnly hidden name="question_id" value={question.id} />
        {/* <button type="submit" className="p-4">
            <ChevronUpIcon className="h-4 w-4" />
          </button> */}

        <div className="text-zinc-800 text-xs font-normal  py-2">
          {question.vote}
        </div>

        {/* <button type="submit" className="p-4">
            <ChevronDownIcon className="h-4 w-4" />
          </button> */}
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

export function Answer({ answer }: { answer: Answer }) {
  return (
    <div className="flex px-6 py-4 border-b">
      <div className="mr-4 ">
        {/* <button type="submit" className="p-4">
            <ChevronUpIcon className="h-4 w-4" />
          </button> */}
        <div className="text-zinc-800 text-xs font-normal  py-2">
          {answer.vote}
        </div>
        {/* 
          <button type="submit" className="p-4">
            <ChevronDownIcon className="h-4 w-4" />
          </button> */}
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
