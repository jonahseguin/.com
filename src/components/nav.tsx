import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex flex-row w-full items-center justify-between gap-6">
      <ul className="flex flex-row gap-3 items-center">
        <li>
          <Link
            href="/"
            className="font-serif text-sm font-extrabold tracking-wide text-primary lowercase"
          >
            jonah seguin
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-6 items-center justify-end">
        <li>
          <Link
            href="/about"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            résumé
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-mono text-xs font-normal tracking-tight text-primary lowercase"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
