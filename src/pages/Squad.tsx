import { useMemo, useState } from "react";
import PlayerCard from "../components/PlayerCard";
import { PLAYERS } from "../data/players";
import type { PlayerRole } from "../types/player";
import "./squad.css";

const ROLES: Array<"All" | PlayerRole> = [
  "All",
  "Batter",
  "Bowler",
  "All-rounder",
  "Wicket-keeper",
];

export default function Squad() {
  const [activeRole, setActiveRole] = useState<(typeof ROLES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLAYERS.filter((p) => {
      const matchesRole = activeRole === "All" ? true : p.role === activeRole;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        (p.battingStyle?.toLowerCase().includes(q) ?? false) ||
        (p.bowlingStyle?.toLowerCase().includes(q) ?? false);
      return matchesRole && matchesQuery;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [activeRole, query]);

  return (
    <section className="squad">
      {/* Hero header */}
      <div className="squad__hero">
        <div className="squad__hero__inner">
          <h1>Squad</h1>
          <p>Meet the players representing the Kings.</p>
        </div>
      </div>

      {/* Controls */}
      <div className="squad__controls">
        <div className="squad__tabs" role="tablist" aria-label="Filter by role">
          {ROLES.map((role) => (
            <button
              key={role}
              role="tab"
              aria-selected={activeRole === role}
              className={
                "squad__tab" + (activeRole === role ? " squad__tab--active" : "")
              }
              onClick={() => setActiveRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        <div className="squad__search">
          <input
            type="search"
            placeholder="Search by name, country, style…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search players"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="squad__grid">
        {filtered.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}

        {filtered.length === 0 && (
          <div className="squad__empty">No players match your filters.</div>
        )}
      </div>
    </section>
  );
}
