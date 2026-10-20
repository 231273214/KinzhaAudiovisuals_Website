import {
  CHARACTERS, MOOD_CHARACTERS, MOOD_SCENES, SCENARIOS,
  contextPage, productPage, scriptEndPage, scriptStartPage,
} from "@/lib/data/cadence";
import type { BookSpread } from "./Book";
import { CharacterFile } from "./CharacterFile";
import { CharacterSheet } from "./CharacterSheet";
import { IdentityLeft, IdentityRight } from "./IdentityPages";
import { MoodboardPage } from "./MoodboardPage";
import { ScenarioPage } from "./ScenarioPage";
import { TextPageView } from "./TextPageView";

export const SPREADS: BookSpread[] = [
  {
    id: "producto",
    left: () => <TextPageView page={productPage} side="left" />,
    right: () => <TextPageView page={contextPage} side="right" />,
  },
  {
    id: "guion",
    left: () => <TextPageView page={scriptStartPage} side="left" />,
    right: () => <TextPageView page={scriptEndPage} side="right" />,
  },
  ...CHARACTERS.map<BookSpread>((c) => ({
    id: c.id,
    left: (active) => <CharacterFile character={c} active={active} />,
    right: () => <CharacterSheet character={c} />,
  })),
  {
    id: "moodboard",
    left: () => <MoodboardPage title="Personajes" images={MOOD_CHARACTERS} side="left" />,
    right: () => <MoodboardPage title="Escenarios" images={MOOD_SCENES} side="right" />,
  },
  ...SCENARIOS.map<BookSpread>((s) => ({
    id: s.id,
    left: () => <ScenarioPage title={s.title} step="01" label={s.stages[0].label} src={s.stages[0].src} side="left" />,
    right: () => <ScenarioPage title={s.title} step="02" label={s.stages[1].label} src={s.stages[1].src} side="right" />,
  })),
  {
    id: "identidad",
    left: () => <IdentityLeft />,
    right: () => <IdentityRight />,
  },
];

export const TABS = [
  { label: "Proyecto", from: 0, to: 0 },
  { label: "Guion", from: 1, to: 1 },
  { label: "Personajes", from: 2, to: 5 },
  { label: "Mood board", from: 6, to: 6 },
  { label: "Escenarios", from: 7, to: 8 },
  { label: "Identidad", from: 9, to: 9 },
];