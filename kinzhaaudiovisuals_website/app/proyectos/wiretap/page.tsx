import type { Metadata } from "next";
import Masthead from "@/components/projects/wiretap/Masthead";
import LeadStory from "@/components/projects/wiretap/LeadStory";
import WritersRow from "@/components/projects/wiretap/WritersRow";
import Protagonists from "@/components/projects/wiretap/Protagonists";
import InfoCards from "@/components/projects/wiretap/InfoCards";
import { ptSerif, specialElite, taiHeritage } from "@/lib/fonts-wiretap";

export const metadata: Metadata = {
  title: "Wiretap | Kinzha Audiovisuals",
};

export default function WiretapPage() {
  return (
    <div
      className={`${specialElite.variable} ${ptSerif.variable} ${taiHeritage.variable} min-h-screen bg-paper font-news text-black`}
    >
      <div className="mx-auto max-w-[930px] px-4 pb-16 pt-6 md:px-8">
        <Masthead />
        <LeadStory />
        <WritersRow />
        <Protagonists />
        <InfoCards />
      </div>
    </div>
  );
}