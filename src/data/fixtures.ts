import type { Fixture, Team } from "../types/fixture";

const BK: Team = { id: "gt", name: "Biratnagar Kings", short: "BK", logoUrl: "/logos/gt.png" };
const PK: Team = { id: "pk", name: "Pokhara Thunders", short: "PK", logoUrl: "/logos/gt.png" };

export const ALL_TEAMS: Team[] = [BK];

export const FIXTURES: Fixture[] = [
  {
    id: "fx1",
    venue: "Tribhuvan Cricket Stadium",
    city: "Kritipur",
    dateISO: "2025-08-21",
    status: "RECENT",
    home: BK,
    away: PK,
    homeScore: "190/9",
    awayScore: "184/7",
    homeOvers: "(20.0)",
    awayOvers: "(20.0)",
    resultText: "Kings beat thunders by 20 runs",
  },
  {
    id: "fx1",
    venue: "Tribhuvan Cricket Stadium",
    city: "Kritipur",
    dateISO: "2025-08-21",
    status: "RECENT",
    home: BK,
    away: PK,
    homeScore: "190/9",
    awayScore: "184/7",
    homeOvers: "(20.0)",
    awayOvers: "(20.0)",
    resultText: "Kings beat thunders by 20 runs",
  },
  {
    id: "fx1",
    venue: "Tribhuvan Cricket Stadium",
    city: "Kritipur",
    dateISO: "2025-08-21",
    status: "RECENT",
    home: BK,
    away: PK,
    homeScore: "190/9",
    awayScore: "184/7",
    homeOvers: "(20.0)",
    awayOvers: "(20.0)",
    resultText: "Kings beat thunders by 20 runs",
  },
  
  // add more…
];
