import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/programs")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yoga Website | Programs" },
      {
        name: "description",
        content: "Programs page foundation for a five-page yoga website.",
      },
      { property: "og:title", content: "Yoga Website | Programs" },
      {
        property: "og:description",
        content: "Programs page foundation for a five-page yoga website.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: EmptyPage,
});

function EmptyPage() {
  return null;
}
