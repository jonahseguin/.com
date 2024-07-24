export default function ContactPage() {
  return (
    <main className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 h-full w-full gap-3">
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 row-span-1 col-span-1 bg-background border text-foreground">
        <h1 className="text-4xl uppercase text-right font-mono font-light">
          contact me
        </h1>
        <p className="text-lg font-mono font-medium">
          serious inquiries only please.
        </p>
      </div>
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 row-span-1 col-span-1 bg-secondary border text-secondary-foreground">
        <h1 className="text-4xl uppercase text-right font-mono font-light">
          discord
        </h1>
        <p className="text-lg font-mono font-medium">
          jnah.
        </p>
      </div>
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 row-span-1 col-span-1 bg-primary border text-primary-foreground">
        <h1 className="text-4xl uppercase text-right font-mono font-light">
          email
        </h1>
        <p className="text-lg font-mono font-medium">
          me@jonahseguin.com
        </p>
      </div>
    </main>
  );
}

// discord, email,
