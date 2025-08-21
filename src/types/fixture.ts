export interface Team {
    id: string;
    name: string;
    short: string;    
    logoUrl: string;    
  }
  
  export interface Fixture {
    id: string;
    venue: string;
    city?: string;
    dateISO: string;    // "2025-05-12"
    status: "UPCOMING" | "LIVE" | "RECENT";
    home: Team;
    away: Team;
    homeScore?: string; // "208/6"
    awayScore?: string; // "228/5"
    homeOvers?: string; // "(20.0)"
    awayOvers?: string; // "(20.0)"
    resultText?: string;// "MI beat GT by 20 runs"
  }
  