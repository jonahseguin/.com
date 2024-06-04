import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 w-full h-full">
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none w-full place-items-center flex-row items-center gap-3">
        <div className="flex text-xs items-center w-full h-full bg-primary/90 text-primary-foreground p-3 text-pretty">
          <Link
            className="font-bold font-serif text-xl lg:text-3xl uppercase text-center w-full"
            href="/resume"
          >
            Software Engineer
          </Link>
        </div>
        <div className="flex text-xs w-full place-items-center h-full bg-primary/80 text-primary-foreground p-3 text-pretty">
          <Link
            className="font-bold font-serif text-xl lg:text-3xl w-full whitespace-break-spaces uppercase text-center"
            href="https://tsanga.net"
            target="_blank"
          >
            at tsanga
          </Link>
        </div>
        <div className="flex w-full h-full place-items-center bg-primary/70 border text-primary-foreground p-3 text-pretty">
          <Link
            className="font-bold font-serif text-xl lg:text-3xl w-full whitespace-break-spaces uppercase text-center"
            href="/about"
          >
            in Montrèal
          </Link>
        </div>
      </div>
      <div className="grid h-full w-full grid-rows-5 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:grid-rows-none items-center gap-3">
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/profile.jpg"
            alt="Jonah's Avatar"
            height="1283"
            width="1436"
            className="h-auto aspect-square w-full object-cover md:h-full"
          />
        </div>
        <div className="flex flex-col gap-6 items-start justify-between w-full h-full p-3 bg-primary text-primary-foreground">
          <p className="text-pretty font-medium font-mono text-2xl text-left lowercase">
            hi.
          </p>
          <p className="text-pretty font-medium font-mono text-2xl text-left lowercase">
            i&apos;m jonah, a full-stack software engineer from canada.
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
          className="h-auto aspect-square w-full object-cover md:h-full"
        >
          <source src="img/walking.mp4" />
        </video>
        <div className="flex flex-col gap-6 items-end justify-between w-full h-full p-3 bg-muted-foreground dark:bg-secondary dark:text-secondary-foreground text-primary-foreground">
          <p className="text-pretty font-medium font-mono text-2xl text-right lowercase">
            i build pleasant software for the web.
          </p>
          <p className="text-pretty font-medium font-mono text-2xl text-right lowercase">
            i enjoy coding in rust, kotlin and typescript.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/glock.jpg"
            alt="Jonah's cat, Glock"
            height="1284"
            width="1645"
            className="h-auto aspect-square w-full object-cover md:h-full"
          />
        </div>
      </div>
    </main>
  );
}
