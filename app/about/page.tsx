import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import politecnicoLogo from "public/work/politecnico-logo.jpg";
import enerconLogo from "public/work/enercon-logo.jpg";

import hiking from "public/gallery/hiking.jpg";
import turin from "public/gallery/turin-centre.jpg";
import Greeting from "./components/Greeting";

async function getYoutubeStats() {
  try {
    const response = await fetch(
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/youtube`,
      {
        next: { revalidate: 86400 }, // 24 hours
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return parseInt(data.subscribers) || 0;
  } catch (error) {
    console.error("Error fetching YouTube stats:", error);
    return 81600; // Use your current subscriber count as fallback
  }
}

export const metadata: Metadata = {
  title: "About | Matteo Petrera",
  description:
    "New York City based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
};

export default async function About() {
  const subscribers = await getYoutubeStats();

  // Format the number only once
  const formattedSubscribers = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumSignificantDigits: 3,
  }).format(subscribers);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={hiking}
            alt={"hiking in bardonecchia"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={turin}
            alt={"Downtown Turin"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Matteo Petrera! Originally from Italy,
              I&apos;m now based in the beautiful city of Turin.
            </p>
            <p>
              My curiosity for tech & computers began at age 10, which naturally
              led me to pursue a career in this field. I&apos;m passionate about
              not only tech but even the business side of things. I'm a
              management engineer graduate and currently pursuing my Master's
              degree in Computer Engineering at Politecnico di Torino. During my
              bachelor studies, I specialized in programming and coding (L-8
              class) rather then the industial field, this led me to the
              important choice of my master's degree.
            </p>
            {/* <p>
              Alongside my coding journey, I run a{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@brianruizy"
              >
                YouTube
              </Link>{" "}
              channel where I share insights on technology, productive coding
              vlogs, and occasionally practice my filmmaking skills.{" "}
              <span className="text-tertiary">
                ({formattedSubscribers} subscribers strong)
              </span>
            </p> */}
            <p>
              When I&apos;m not studying, you can find me at the gym, running
              around the city, or exploring new places!
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Education" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in web development, data analytics, React, UI/UX, and
              product design. But I am always learning new things. Here are what
              i achieved so far:
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Management Engineering",
    company: "Bachelor - Politecnico di Torino",
    date: "2020 - 2023",
    imageSrc: politecnicoLogo,
    link: "https://www.polito.it/",
  },
  {
    title: "Computer Engineering - Software",
    company: "Master - Politecnico di Torino",
    date: "2023 - 2025",
    imageSrc: politecnicoLogo,
    link: "https://www.polito.it/",
  },
  {
    title: "Summer internship",
    company: "ENERCON Service Italia s.r.l.",
    date: "2019 - 2019",
    imageSrc: enerconLogo,
    link: "https://www.enercon.de/en",
  },
];
