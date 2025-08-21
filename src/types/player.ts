export type PlayerRole = "Batter" | "Bowler" | "All-rounder" | "Wicket-keeper";

export interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  country: string;
  imageUrl: string;
  jersey?: number;
  battingStyle?: string;
  bowlingStyle?: string;

  // NEW:
  flagUrl?: string;      // small country flag image
  isCaptain?: boolean;   // show "C" badge
}
