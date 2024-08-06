export default function ContactPage() {
  return (
    <div className="flex flex-col h-full w-full gap-3">
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 bg-secondary border text-secondary-foreground">
        <h1 className="text-4xl uppercase text-right font-serif font-light">
          discord
        </h1>
        <p className="text-lg font-mono font-medium">jnah.</p>
      </div>
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 bg-primary border text-primary-foreground">
        <h1 className="text-4xl uppercase text-right font-serif font-light">
          email
        </h1>
        <p className="text-lg font-mono font-medium">me@jonahseguin.com</p>
      </div>
    </div>
  );
}
