"use client";

import GitHubCalendar from "react-github-calendar";

export const GithubContributionsGraph = () => {
  return (
    <GitHubCalendar
    blockSize={18}
      showWeekdayLabels={false}
      fontSize={12}
      hideTotalCount={false}
      hideColorLegend={false}
      blockRadius={0}
      username="jonahseguin"
      style={{
        fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
      }}
      theme={{
        dark: ["hsl(0,0%,96.1%)", "hsl(0,0%,9%)"],
        light: ["hsl(0,0%,14.9%)", "hsl(0,0%,98%)"],
      }}
    />
  );
};
