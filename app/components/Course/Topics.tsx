import { Link } from "@remix-run/react";

export function Topics({ topics }: { topics: { name: string; to: string }[] }) {
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
