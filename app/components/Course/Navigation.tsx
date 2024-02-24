import { Link } from "@remix-run/react";

export function Navigation({
  navigation,
}: {
  navigation: { name: string; to: string }[];
}) {
  return (
    <div>
      {navigation.map((nav) => (
        <Link key={nav.to} to={nav.to}>
          {nav.name}
        </Link>
      ))}
    </div>
  );
}
