import type { MetaFunction } from "@remix-run/node";
import { Link, json, useLoaderData } from "@remix-run/react";
import { CoursesService } from "client";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const courses = await CoursesService.getCourses();
  const course = courses[0];
  return json({
    categories: [
      {
        name: "Computer Science",
        courses: [
          {
            id: course.community.id,
            name: "CS50's Introduction to Computer Science",
            imgSrc: "https://i.postimg.cc/gLLS7gbW/CS50.webp",
          },
          {
            id: course.community.id,
            name: "Full Stack Application Development",
            imgSrc: "https://i.postimg.cc/0rhHS172/Full-Stack.webp",
          },
          {
            id: course.community.id,
            name: "DevOps and Software Engineering",
            imgSrc: "https://i.postimg.cc/CBQrJWt7/Devops.webp",
          },
          {
            id: course.community.id,
            name: "Algorithms and Data Structures",
            imgSrc: "https://i.postimg.cc/WtdHt1FH/Algorithms.webp",
          },
        ],
      },
      {
        name: "Civil Engineering",
        courses: [
          {
            id: course.community.id,
            name: "PurdueX: Stability and Design of Structural Frames",
            imgSrc: "https://i.postimg.cc/gr6bQDDj/PurdueX.webp",
          },
          {
            id: course.community.id,
            name: "UMD, USMx: The Industry and Profession in Construction Management",
            imgSrc: "https://i.postimg.cc/RN5xBHsR/UMD.webp",
          },
          {
            id: course.community.id,
            name: "PennX: Urban Transit for Livable Cities",
            imgSrc: "https://i.postimg.cc/kR8rSJ4K/PennX.webp",
          },
          {
            id: course.community.id,
            name: "DelftX: Introduction to Water and Climate",
            imgSrc: "https://i.postimg.cc/brwzCkWS/DelftX.webp",
          },
        ],
      },
      {
        name: "Browse Courses by Universities",
        courses: [
          {
            id: course.community.id,
            name: "Tanta University",
            imgSrc: "https://i.postimg.cc/18ny0J1P/tanta.jpg",
          },
          {
            id: course.community.id,
            name: "Cairo University",
            imgSrc: "https://i.postimg.cc/4KpZqy3S/cairow.png",
          },
          {
            id: course.community.id,
            name: "Alexandria University",
            imgSrc: "https://i.postimg.cc/8jCpcTy7/alexandria.png",
          },
          {
            id: course.community.id,
            name: "MSA University",
            imgSrc: "https://i.postimg.cc/bsFz24M3/msa.jpg",
          },
        ],
      },
    ],
  });
};

export default function Index() {
  const { categories } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-9">
      <Hero />
      {categories.map((category, index) => (
        <div key={index} className="">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              {category.name}
            </h2>
            <a
              href="#"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
            >
              See more<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {category.courses.map((product, index) => (
              <div key={index} className="group relative">
                <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.imgSrc}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">
                  <Link to={`/courses/${product.id}`}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              See more<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">The Power of Learning</span>{" "}
          <span className="block text-indigo-600 xl:inline">
            with Community
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          At any given moment, someone struggles with the same problems you
          have. And, chances are, someone else has already solved your problem.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
