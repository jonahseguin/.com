"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row w-full items-center justify-between gap-6 pt-3">
      <ul className="flex flex-row gap-3 items-center">
        <li>
          <Link
            href="/"
            className={cn(
              "font-serif text-sm font-extrabold text-phthalo-text tracking-widest lowercase leading-none",
              pathname === "/" && "sm:underline sm:underline-offset-4"
            )}
          >
            jonah seguin
          </Link>
        </li>
      </ul>
      <ul className="hidden sm:flex flex-row gap-6 items-center justify-end">
        <NavItem href="/projects" label="/projects" />
        <NavItem href="/contact" label="/contact" />
        <NavItem href="/resume" label="/résumé" />
      </ul>
      <MobileDrawer />
    </nav>
  );
};

const NavItem: FC<{ href: string; label: string; external?: boolean }> = ({
  href,
  label,
  external = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        target={external ? "_blank" : undefined}
        href={href}
        className={cn(
          "font-mono text-xs font-normal tracking-tight text-phthalo-text lowercase transition-all",
          isActive && "font-semibold underline underline-offset-4"
        )}
      >
        {label}
      </Link>
    </li>
  );
};

const MobileDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={"ghostPhthalo"}
          size="ghost"
          className="sm:hidden font-mono text-xs font-semibold tracking-tight"
        >
          [navigation]
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <DrawerFooter className="flex flex-row h-full w-full justify-between items-start gap-6">
          <div className="flex flex-col w-full gap-12 items-start justify-start">
            <DrawerNavItem
              external={true}
              href="https://github.com/jonahseguin/.com"
              label="source"
            />
            <DrawerNavItem
              external={true}
              href="https://github.com/jonahseguin"
              label="github"
            />
            <DrawerNavItem
              external={true}
              href="https://instagram.com/jonahseguin"
              label="instagram"
            />
            <DrawerNavItem
              external={true}
              href="https://x.com/jonahseguin"
              label="x"
            />
          </div>
          <div className="flex flex-col w-full gap-12 items-end justify-end">
            <DrawerNavItem href="/" label="home" />
            <DrawerNavItem href="/projects" label="projects" />
            <DrawerNavItem href="/contact" label="contact" />
            <DrawerNavItem href="/resume" label="résumé" />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const DrawerNavItem: FC<{
  href: string;
  label: string;
  external?: boolean;
}> = ({ href, label, external = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const item = (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={cn(
        "float-right text-right text-xl font-medium font-mono transition-all text-phthalo-foreground",
        isActive && "underline underline-offset-4 font-semibold"
      )}
    >
      {label}
    </Link>
  );

  if (external) {
    return item;
  }

  return <DrawerClose asChild>{item}</DrawerClose>;
};
