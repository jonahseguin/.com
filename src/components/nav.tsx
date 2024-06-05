import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex flex-row w-full items-center justify-between gap-6 pt-3">
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
      <ul className="hidden sm:flex flex-row gap-6 items-center justify-end">
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
      <MobileDrawer />
    </nav>
  );
};

const MobileDrawer = () => {
  return (
    <Drawer shouldScaleBackground={false} noBodyStyles={true}>
      <DrawerTrigger asChild>
        <Button variant={"ghost"} size="sm" className="sm:hidden px-0">
          menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-mono">jonahseguin.com</DrawerTitle>
          <DrawerDescription>pages available for navigation</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="grid grid-cols-2 grid-rows-2 w-full items-center gap-3">
          <DrawerClose asChild>
            <Button
              asChild
              variant={"outline"}
              className="font-mono col-span-full"
            >
              <Link href="/">home</Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant={"outline"} className="font-mono">
              <Link href="/about">about</Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant={"outline"} className="font-mono">
              <Link href="/projects">projects</Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant={"outline"} className="font-mono">
              <Link href="/resume">résumé</Link>
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button asChild variant={"outline"} className="font-mono">
              <Link href="/contact">contact</Link>
            </Button>
          </DrawerClose>
          <Button asChild variant={"outline"} className="font-mono">
            <Link href="https://github.com/jonahseguin/.com" target="_blank">
              source
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="font-mono">
            <Link href="https://github.com/jonahseguin/" target="_blank">
              github
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="font-mono">
            <Link href="https://instagram.com/jonahseguin" target="_blank">
              instagram
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="font-mono">
            <Link href="https://x.com/jonahseguin" target="_blank">
              x
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
