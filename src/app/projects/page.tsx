import { GithubContributionsGraph } from "@/components/github";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full h-full gap-3">
      <div className="flex flex-row items-center justify-center w-full font-mono border p-3 bg-phthalo-deep">
        <GithubContributionsGraph />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 h-full w-full">
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>orbit</ProjectTitle>
            <ProjectLinks>
              <Link href="https://github.com/tsanga/orbit" target="_blank">
                [github]
              </Link>
            </ProjectLinks>
          </ProjectMeta>
          <ProjectBody>
            orbit is a WebSockets-as-a-service API and SDK aiming to provide the
            best possible experience for developers wanting to add real-time
            features to Next.js applications.
          </ProjectBody>
        </ProjectBlock>
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>overlayz</ProjectTitle>
            <ProjectLinks>
              <Link href="https://overlayz.io" target="_blank">
                [website]
              </Link>
            </ProjectLinks>
          </ProjectMeta>
          <ProjectBody>
            overlayz is an overlay editor and real-time service for streamers
            enriched with live data.
          </ProjectBody>
        </ProjectBlock>
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>tattcloud</ProjectTitle>
            <ProjectLinks>
              <Link href="https://tattcloud.com">[website]</Link>
            </ProjectLinks>
          </ProjectMeta>
          <ProjectBody>
            tattcloud is an all-in-one booking and payment platform for tattoo
            artists and clients.
          </ProjectBody>
        </ProjectBlock>
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>toad</ProjectTitle>
            <ProjectDescription>(work in progress)</ProjectDescription>
          </ProjectMeta>
          <ProjectBody>
            toad is a real-time web application with an embedded browser
            allowing users to consume media and browse the internet
            collaboratively.
          </ProjectBody>
        </ProjectBlock>
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>musty</ProjectTitle>
            <ProjectLinks>
              <Link href="https://github.com/tsanga/musty" target="_blank">
                [github]
              </Link>
            </ProjectLinks>
          </ProjectMeta>
          <ProjectBody>
            musty is an asynchronous database-agnostic object-document mapper
            library for Rust applications. it allows developers to turn a struct
            into a queryable database model with one line of code.
          </ProjectBody>
        </ProjectBlock>
        <ProjectBlock>
          <ProjectMeta>
            <ProjectTitle>drink</ProjectTitle>
            <ProjectLinks>
              <Link href="https://github.com/jonahseguin/drink" target="_blank">
                [github]
              </Link>
            </ProjectLinks>
          </ProjectMeta>
          <ProjectBody>
            drink is a command and argument parsing library that utilizes
            Inversion-of-Control and Dependency-Injection design patterns
            inspired by Google&apos;s Guice library and sk89q&apos;s Intake
            command library.
          </ProjectBody>
        </ProjectBlock>
      </div>
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
        "relative flex flex-col justify-between w-full h-full p-3 gap-3 bg-phthalo dark:bg-phthalo-deep border text-phthalo-foreground",
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
        "flex flex-col gap-1.5 items-start font-mono font-medium text-base w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

const ProjectLinks = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1.5 items-center font-mono font-medium text-xs",
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
    <h2
      className={cn(
        "text-2xl font-bold text-left font-sans text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
};

const ProjectDescription = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p className={cn("text-xs font-normal text-left font-mono", className)}>
      {children}
    </p>
  );
};

const ProjectBody = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <p
      className={cn(
        "flex-1 whitespace-break-spaces text-pretty h-full items-end justify-end w-full gap-3 font-mono font-medium text-lg lowercase text-justify",
        className
      )}
    >
      {children}
    </p>
  );
};
