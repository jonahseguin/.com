import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <object
        data="https://jonahseguin.github.io/resume/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        className="w-full h-full"
      >
        <p className="text-muted-foreground text-xs font-mono">
          If my resume is not displaying here,{" "}
          <Link
            href="https://jonahseguin.github.io/resume/resume.pdf"
            target="_blank"
          >
            click here
          </Link>{" "}
          to view it externally.
        </p>
      </object>
    </div>
  );
}
2;
