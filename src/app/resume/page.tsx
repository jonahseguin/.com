import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="flex flex-row gap-3 w-full">
        <div className="flex items-center justify-center w-full p-3 border bg-primary text-primary-foreground">
          <Link
            href="https://jonahseguin.github.io/resume/resume.pdf"
            target="_blank"
            className="font-mono font-bold"
          >
            external link to resume
          </Link>
        </div>
        <div className="flex items-center justify-center w-full p-3 border bg-secondary text-secondary-foreground">
          <Link
            href="https://github.com/jonahseguin/resume"
            target="_blank"
            className="font-mono font-bold"
          >
            resume source
          </Link>
        </div>
      </div>
      <object
        data="https://jonahseguin.github.io/resume/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        className="w-full h-full"
      >
        <div className="flex items-center justify-center w-full h-full border bg-primary p-3 text-primary-foreground">
          <p className="text-xs font-serif font-medium">
            If my resume is not displaying here,{" "}
            <Link
              href="https://jonahseguin.github.io/resume/resume.pdf"
              target="_blank"
              className="font-mono font-bold"
            >
              click here
            </Link>{" "}
            to view it externally.
          </p>
        </div>
      </object>
    </div>
  );
}
2;
