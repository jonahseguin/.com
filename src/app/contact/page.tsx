"use client";

import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-3">
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 bg-phthalo border text-phthalo-foreground">
        <h1 className="text-4xl lowercase text-left font-serif font-light">
          discord
        </h1>
        <div className="flex w-full justify-end">
          <Input
            className="text-lg font-mono font-medium text-foreground bg-phthalo-deep w-min"
            value="jnah."
            onChange={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-full gap-3 p-3 bg-phthalo-deep border text-phthalo-foreground">
        <h1 className="text-4xl lowercase text-left font-serif font-light">
          email
        </h1>
        <div className="flex w-full justify-end">
          <Input
            className="text-lg font-mono font-medium text-foreground bg-phthalo w-min"
            value="me@jonahseguin.com"
            onChange={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}
