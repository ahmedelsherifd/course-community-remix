import { Link } from "@remix-run/react";

export function SubCommunites({
  subs,
}: {
  subs: { name: string; to: string }[];
}) {
  return (
    <div className="w-64 bg-white  container px-5 py-3  rounded-lg justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start  gap-3 inline-flex">
        <div className="text-xl font-bold ">POPULAR COMMUNITIES</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {subs.map((sub) => (
            <>
              <div className="px-3.5 py-1.5 bg-white rounded-full flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start  gap-5 inline-flex">
                  <div className="justify-start  gap-1.5 flex text-start">
                    <div className="w-9 h-9 bg-zinc-300 rounded-full" />
                    <div>
                      <span className="text-zinc-800 text-base font-bold ">
                        {sub.name}
                        <br />
                      </span>
                      {/* <span className="text-zinc-800 text-xs font-normal">
                    22,754,355 members
                  </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}

          <div className="px-4 py-1 bg-white rounded-full border border-orange-500 justify-center  gap-2.5 inline-flex">
            <div className="text-orange-500 text-sm font-bold ">See more</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubCommunites2({
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
