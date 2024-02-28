import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Outlet, redirect, useLoaderData } from "@remix-run/react";
import { OpenAPI, UsersService } from "client";
import { Header } from "~/components/dashboard/Header";
import { destroySession, getSession, onLogout } from "~/sessions";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  const token_type = session.get("token_type");
  const access_token = session.get("access_token");
  OpenAPI.HEADERS = {
    Authorization: token_type + " " + access_token,
  };
  let user;

  if (access_token) {
    try {
      user = await UsersService.readUsersMe();
    } catch (error) {
      return redirect("/", {
        headers: {
          "Set-Cookie": await destroySession(session),
        },
      });
    }
  }

  return json({
    user: user,
  });
};

export default function () {
  const { user } = useLoaderData<typeof loader>();
  let usercontext = user
    ? {
        name: user.name || "",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      }
    : user;
  return (
    <>
      <Header user={usercontext} />
      <Outlet />
    </>
  );
}
