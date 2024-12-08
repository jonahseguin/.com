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
        color: "hsl(var(--phthalo-text))",
      }}
      theme={{
        light: ["hsl(145,15%,51%)", "hsl(151,49%,14%)"],
        dark: ["hsl(151,49%,5%)", "hsl(145,15%,51%)"],
      }}
    />
  );
};
