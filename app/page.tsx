import { allBlogs } from ".contentlayer/generated";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import { allProjects } from ".contentlayer/generated";

import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
import ProjectList from "@/app/projects/components/ProjectList";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // 3 most recent
    .filter((_, i) => i < 3);

  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, Matteo here! 👋
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I'm a 24-year-old engineer graduate. Currently, I'm pursuing my
            Master's degree in Computer Engineering @ Politecnico di Torino.
            Passionate about leveraging technology to solve complex problems, I
            am dedicated to exploring the intersection of engineering and
            computer science to drive innovation and make a meaningful impact in
            the tech industry.
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <a
            href="/mvpetrera_resume.pdf"
            download="mvpetrera_resume.pdf"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Resume <ArrowDownRightIcon className="h-4 w-4 text-tertiary" />
          </a>
          <Link
            href="https://www.linkedin.com/in/matteovpetrera/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Linkedin
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://github.com/matteovpetrera"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Github
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="mailto:mvpetrera@gmail.com"
          >
            Contact
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">Pinned</p>
        <ProjectList projects={projects} />
      </div>

      {/* <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight text-secondary"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-pretty text-tertiary">
            I occasionally write about programming, productivity, and more.
            Check me out and subscribe to stay up to date.
          </p>
        </div>
        <PostList posts={blogs} />
      </div> */}
    </div>
  );
}
