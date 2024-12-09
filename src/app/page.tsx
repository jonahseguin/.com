import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 w-full h-full">
      <div className="grid h-full w-full grid-rows-2 grid-cols-2 md:grid-rows-none md:grid-cols-4 lg:grid-cols-5 items-center gap-3">
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/img/glock.jpg"
            alt="Jonah's cat, Glock"
            height="1284"
            width="1645"
            priority
            className="h-full w-full object-cover border animate-in transform duration-500 fade-in-0 slide-in-from-left-full"
          />
        </div>
        <div className="flex flex-col gap-6 items-start justify-between w-full h-full p-3 border bg-phthalo dark:bg-phthalo-deep text-phthalo-foreground duration-500 fade-in animate-in transform slide-in-from-bottom-full">
          <p
            className={`text-pretty font-medium font-sans text-3xl sm:text-5xl text-left lowercase`}
          >
            hi. <br /> i&apos;m jonah, a full-stack software engineer from
            canada.
          </p>
        </div>
        <video
          loop
          muted
          playsInline
          autoPlay
          disablePictureInPicture
          unselectable="on"
          width="1440"
          height="1434"
          className="h-full w-full object-cover border animate-in transform duration-500 fade-in select-none"
        >
          <source src="img/walking.webm" />
        </video>

        <div className="border flex flex-col gap-6 items-end justify-end w-full h-full p-3 bg-phthalo-foreground text-phthalo fade-in duration-500 animate-in transform slide-in-from-bottom-full">
          <p
            className={`text-pretty font-medium font-sans text-3xl sm:text-5xl text-right lowercase`}
          >
            i build software for the internet.
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center w-full h-full">
          <Image
            src="/img/profile.jpg"
            alt="Jonah"
            height="623"
            width="1337"
            className="border h-full w-full object-cover animate-in transform duration-500 fade-in-0 slide-in-from-right-full select-none"
            priority
          />
        </div>
      </div>
    </main>
  );
}
