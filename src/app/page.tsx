import { Courier_Prime } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const BesleyFont = Courier_Prime({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col gap-3 w-full h-full">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none w-full place-items-center flex-row items-center gap-3">
        <div className="relative flex text-xs items-center w-full h-full bg-primary text-primary-foreground p-3 text-pretty duration-700 fade-in animate-in transform slide-in-from-left-full">
          <p className="absolute left-0 -rotate-90 font-black font-mono text-xl lowercase text-center text-secondary tracking-tight -ml-3">
            what
          </p>
          <Link
            className="font-normal font-sans text-xl lg:text-3xl uppercase text-center w-full"
            href="/resume"
          >
            Software Engineer
          </Link>
          <p className="absolute right-0 rotate-90 font-black font-mono text-xl lowercase text-center text-secondary tracking-tight -mr-3">
            what
          </p>
        </div>
        <div className="relative flex text-xs w-full place-items-center h-full bg-secondary text-secondary-foreground p-3 text-pretty fade-in duration-700 animate-in transform slide-in-from-top-full">
          <p className="absolute left-0 -rotate-90 font-black font-mono text-xl lowercase text-center tracking-tight -ml-3">
            work
          </p>
          <Link
            className="font-extralight font-mono text-xl lg:text-3xl w-full whitespace-break-spaces uppercase text-center"
            href="https://tsanga.net"
            target="_blank"
          >
            Tsanga
          </Link>
          <p className="absolute right-0 rotate-90 font-black font-mono text-xl lowercase text-center tracking-tight -mr-3">
            work
          </p>
        </div>
        <div className="relative flex w-full h-full place-items-center bg-muted-foreground text-primary-foreground p-3 text-pretty duration-700 fade-in animate-in transform slide-in-from-right-full">
          <p className="absolute left-0 -rotate-90 font-black font-mono text-xl lowercase text-center text-secondary tracking-tight -ml-3">
            live
          </p>
          <Link
            className="font-extralight font-serif text-xl lg:text-3xl w-full whitespace-break-spaces uppercase text-center"
            href="/about"
          >
            Montrèal
          </Link>
          <p className="absolute right-0 rotate-90 font-black font-mono text-xl lowercase text-center text-secondary tracking-tight -mr-3">
            live
          </p>
        </div>
      </div>
      <div className="grid h-full w-full grid-rows-5 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:grid-rows-none items-center gap-3">
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/profile.jpg"
            alt="Jonah's Avatar"
            height="1283"
            width="1436"
            className="h-full w-full object-cover animate-in transform duration-1000 fade-in-0"
          />
        </div>
        <div className="flex flex-col gap-6 items-start justify-between w-full h-full p-3 bg-primary text-primary-foreground duration-700 fade-in animate-in transform slide-in-from-bottom-full">
          <p
            className={`text-pretty font-medium font-mono text-3xl text-left lowercase ${BesleyFont.className}`}
          >
            hi. <br /> i&apos;m jonah, a full-stack software engineer from
            canada.
          </p>
          <p
            className={`text-pretty font-medium font-mono text-3xl text-left lowercase ${BesleyFont.className}`}
          >
            learn more <br />
            <Link
              href="/about"
              className="underline-offset-4 underline decoration-inherit"
            >
              about me.
            </Link>
          </p>
        </div>
        <video
          loop
          muted
          playsInline
          autoPlay
          disablePictureInPicture
          width="1440"
          height="1434"
          className="h-full w-full object-cover animate-in transform duration-1000 fade-in-0"
        >
          <source src="img/walking.mp4" />
        </video>
        <div className="flex flex-col gap-6 items-end justify-between w-full h-full p-3 bg-muted-foreground fade-in text-primary-foreground duration-700 animate-in transform slide-in-from-bottom-full">
          <p
            className={`text-pretty font-medium font-mono text-3xl text-right lowercase ${BesleyFont.className}`}
          >
            i build software for the internet.
          </p>
          <p
            className={`text-pretty font-medium font-mono text-3xl text-right lowercase ${BesleyFont.className}`}
          >
            check out some of the{" "}
            <Link
              href="/projects"
              className="underline-offset-4 underline decoration-inherit"
            >
              stuff i&apos;ve built.
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/glock.jpg"
            alt="Jonah's cat, Glock"
            height="1284"
            width="1645"
            className="h-full w-full object-cover animate-in transform duration-1000 fade-in-0"
          />
        </div>
      </div>
    </main>
  );
}
