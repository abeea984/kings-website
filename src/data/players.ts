import type { Player } from "../types/player";

export const PLAYERS: Player[] = [
  {
    id: "p1",
    name: "Abishek",
    role: "Batter",
    country: "India",
    jersey: 7,
    imageUrl: "/images/players/gill.jpg",
    battingStyle: "Right-hand bat"
  },
  {
    id: "p2",
    name: "Ram",
    role: "All-rounder",
    country: "Afghanistan",
    jersey: 19,
    imageUrl: "/images/players/rashid.jpg",
    bowlingStyle: "Right-arm leg break"
  },
  {
    id: "p3",
    name: "Sandeep Lamichhane",
    role: "Bowler",
    country: "India",
    imageUrl: "/images/players/mohit.jpg",
    bowlingStyle: "Right-arm medium-fast"
  },
  {
    id: "p4",
    name: "Shyam",
    role: "Wicket-keeper",
    country: "India",
    imageUrl: "/images/players/saha.jpg"
  },

];
