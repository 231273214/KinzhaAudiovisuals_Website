import {
  ArcPage,
  ClosingPage,
  CoverPage,
  FactsPage,
  GalleryPage,
  IntroPage,
  OutlinePage,
  TextPage,
} from "@/components/projects/comic/Pages";
import type { ComicPage } from "@/lib/data/comic";

export default function PageView({ page }: { page: ComicPage }) {
  switch (page.type) {
    case "cover":
      return <CoverPage page={page} />;
    case "intro":
      return <IntroPage page={page} />;
    case "facts":
      return <FactsPage page={page} />;
    case "text":
      return <TextPage page={page} />;
    case "gallery":
      return <GalleryPage page={page} />;
    case "outline":
      return <OutlinePage page={page} />;
    case "arc":
      return <ArcPage page={page} />;
    case "closing":
      return <ClosingPage page={page} />;
  }
}