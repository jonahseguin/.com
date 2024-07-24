"use client";

import GitHubCalendar from "react-github-calendar";

export const GithubContributionsGraph = () => {
  return (
    <GitHubCalendar
    blockSize={22}
      showWeekdayLabels={false}
      fontSize={12}
      hideTotalCount={false}
      hideColorLegend={false}
      blockRadius={0}
      username="jonahseguin"
      style={{
        fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
        color: "hsl(var(--primary))"
      }}
      theme={{
        light: ["hsl(0,0%,96.1%)", "hsl(0,0%,9%)"],
        dark: ["hsl(0,0%,14.9%)", "hsl(0,0%,98%)"],
      }}
    />
  );
};
