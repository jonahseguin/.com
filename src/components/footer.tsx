import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-row w-full items-center justify-between gap-6 pb-3">
      <ul className="flex flex-row gap-3 items-center">
        <li>
          <Link
            href="https://github.com/jonahseguin/.com"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase"
          >
            [source]
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-6 items-center justify-end">
        <li>
          <Link
            href="https://www.linkedin.com/in/jonah-seguin-b53374177/"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase"
          >
            [linkedin]
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase"
          >
            [github]
          </Link>
        </li>
        <li>
          <Link
            href="https://instagram.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase"
          >
            [instagram]
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/jonahseguin"
            target="_blank"
            className="font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase"
          >
            [x]
          </Link>
        </li>
      </ul>
    </footer>
  );
};
