import { GithubContributionsGraph } from "@/components/github";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="flex flex-row items-center justify-center w-full font-mono border p-3 bg-primary text-primary-foreground">
        <GithubContributionsGraph />
      </div>
      <ProjectBlock>
        <ProjectMeta>
          <ProjectTitle>orbit</ProjectTitle>
          <Link className="text-xs" href="https://github.com/tsanga/orbit">
            github
          </Link>
        </ProjectMeta>
        <ProjectBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus et porro culpa earum sint, minima id, impedit accusamus
          excepturi placeat optio, alias praesentium illum quod. Pariatur
          temporibus nulla accusamus consequatur.
        </ProjectBody>
      </ProjectBlock>
      <ProjectBlock>
        <ProjectTitle>toad</ProjectTitle>
        <ProjectBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus et porro culpa earum sint, minima id, impedit accusamus
          excepturi placeat optio, alias praesentium illum quod. Pariatur
          temporibus nulla accusamus consequatur.
        </ProjectBody>
      </ProjectBlock>
      <ProjectBlock>
        <ProjectTitle>musty</ProjectTitle>
        <ProjectBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus et porro culpa earum sint, minima id, impedit accusamus
          excepturi placeat optio, alias praesentium illum quod. Pariatur
          temporibus nulla accusamus consequatur.
        </ProjectBody>
      </ProjectBlock>
      <ProjectBlock>
        <ProjectTitle>tsanga</ProjectTitle>
        <ProjectBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus et porro culpa earum sint, minima id, impedit accusamus
          excepturi placeat optio, alias praesentium illum quod. Pariatur
          temporibus nulla accusamus consequatur.
        </ProjectBody>
      </ProjectBlock>
    </div>
  );
}

const ProjectBlock = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section
      className={cn(
        "relative flex flex-row justify-between w-full p-3 gap-3 bg-primary border text-primary-foreground",
        className
      )}
    >
      {children}
    </section>
  );
};

const ProjectMeta = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 items-start font-mono font-medium text-base",
        className
      )}
    >
      {children}
    </div>
  );
};

const ProjectTitle = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h2 className={cn("text-2xl font-bold text-left font-serif", className)}>
      {children}
    </h2>
  );
};

const ProjectBody = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "flex flex-col w-1/2 gap-3 text-right float-right font-mono font-medium text-base",
        className
      )}
    >
      {children}
    </div>
  );
};

// tsanga: orbit, toad, musty, server orchestration,
// jonah: drink, aBsorb, personal website, ninja/reflex
// other: ecodoor, plshurtme, plsremoveme, worlddoors, 3dpanelfx
