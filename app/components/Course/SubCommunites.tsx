import { Link } from "@remix-run/react";

export function SubCommunites({
  subs,
}: {
  subs: { name: string; to: string }[];
}) {
  return (
    <div>
      {subs.map((sub) => (
        <Link key={sub.to} to={sub.to}>
          {sub.name}
        </Link>
      ))}
    </div>
  );
}
