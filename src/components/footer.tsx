import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-row w-full items-center justify-between gap-6">
      <ul className="flex flex-row gap-3 items-center">
        <li>
          <Link
            href="https://github.com/jonahseguin/.com"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            [source code]
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-6 items-center justify-end">
        <li>
          <Link
            href="https://github.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            github
          </Link>
        </li>
        <li>
          <Link
            href="https://instagram.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            instagram
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            x
          </Link>
        </li>
      </ul>
    </footer>
  );
};
