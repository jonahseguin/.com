import { cn } from "@/lib/utils";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";

const DisplayFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex flex-col gap-3 w-full h-full">
      <div className="grid grid-cols-3 w-full place-items-center flex-row items-center gap-3">
        <div className="flex text-xs items-center w-full h-full bg-primary/90 text-primary-foreground p-3 text-pretty">
          <p
            className={cn(
              "font-extralight font-sans text-3xl uppercase text-center w-full",
              //DisplayFont.className
            )}
          >
            Software Engineer
          </p>
        </div>
        <div className="flex text-xs w-full place-items-center h-full bg-primary/70 text-primary-foreground p-3 text-pretty">
          <p
            className={cn(
              "font-extralight font-sans text-3xl w-full whitespace-break-spaces uppercase text-center",
              //DisplayFont.className
            )}
          >
            tsanga
          </p>
        </div>
        <div className="flex w-full h-full place-items-center bg-primary/50 border text-primary-foreground p-3 text-pretty">
          <p
            className={cn(
              "font-extralight font-sans text-3xl w-full whitespace-break-spaces uppercase text-center",
              //DisplayFont.className
            )}
          >
            Montrèal
          </p>
        </div>
      </div>
      <div className="grid h-full w-full grid-rows-4 lg:grid-cols-4 lg:grid-rows-none items-center gap-3">
        <div className="grid grid-rows-2 h-full w-full gap-3">
          <div className="flex flex-col gap-6 items-start justify-start w-full h-full p-3 bg-primary text-primary-foreground">
            <p className="text-pretty font-medium font-mono text-2xl text-left lowercase">
              hi!
            </p>
            <p className="text-pretty font-medium font-mono text-2xl text-left lowercase">
              i&apos;m jonah, a full-stack software engineer from canada.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-end justify-end w-full h-full p-3 bg-secondary text-secondary-foreground">
            <p className="text-pretty font-medium font-mono text-2xl text-right lowercase">
              i love to build things. mostly in rust, kotlin, and typescript.
            </p>
            <p className="text-pretty font-medium font-mono text-2xl text-right lowercase">
              my cat&apos;s name is glock.
            </p>
          </div>
        </div>
        <video
          loop
          muted
          playsInline
          autoPlay
          disablePictureInPicture
          width="1440"
          height="1434"
          className="h-full w-full object-cover"
        >
          <source src="img/walking.mp4" />
        </video>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/profile.jpg"
            alt="Jonah's Avatar"
            height="1283"
            width="1436"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/glock.jpg"
            alt="Jonah's cat, Glock"
            height="1284"
            width="1645"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
