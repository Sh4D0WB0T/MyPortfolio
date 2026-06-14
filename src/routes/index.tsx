import { createFileRoute } from "@tanstack/react-router";
import { AuroraBg } from "@/components/portfolio/AuroraBg";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { AaishaAI } from "@/components/portfolio/AaishaAI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaisha Verma · AURORA NEXUS — AI/ML × Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "AURORA NEXUS — the digital consciousness of Aaisha Verma. AI/ML Engineer, Cybersecurity Enthusiast, Full Stack Developer. Projects, experience, and a live AI digital twin.",
      },
      { property: "og:title", content: "Aaisha Verma · AURORA NEXUS" },
      {
        property: "og:description",
        content:
          "Exploring Intelligence. Securing Systems. Engineering the Future. AI/ML × Cybersecurity portfolio with a live AI digital twin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AuroraBg />
      <Portfolio />
      <AaishaAI />
    </>
  );
}
