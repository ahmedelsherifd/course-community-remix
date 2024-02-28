import { Link } from "@remix-run/react";

export function Topics({ topics }: { topics: { name: string; to: string }[] }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center h-screen  bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex pt-4 pb-6 pl-6 items-center bg-purple-500 ">
            <h1 className="text-xl text-white font-bold ">Algorithms-6006MI</h1>
          </div>
          <div className="flex-1  ">
            <ul className="pt-0  pb-4 pl-8 space-y-1 text-base">
              <div>
                {topics.map((topic) => (
                  <Link key={topic.to} to={topic.to}>
                    <li className="list-item ">
                      <a href="#" className="list-item  p-5 rounded-md "></a>
                    </li>
                    {topic.name}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Topics2({
  topics,
}: {
  topics: { name: string; to: string }[];
}) {
  return (
    <div>
      {topics.map((topic) => (
        <Link key={topic.to} to={topic.to}>
          {topic.name}
        </Link>
      ))}
    </div>
  );
}
