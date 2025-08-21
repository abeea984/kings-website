import { useMemo, useState } from "react";
import { ALL_TEAMS, FIXTURES } from "../data/fixtures";
import FixtureCard from "../components/FixtureCard";
import "./fixtures.css";

export default function Fixtures() {
  const [teamId, setTeamId] = useState<string>("all");

  const teams = ALL_TEAMS;
  const filtered = useMemo(() => {
    if (teamId === "all") return FIXTURES;
    return FIXTURES.filter(fx => fx.home.id === teamId || fx.away.id === teamId);
  }, [teamId]);

  return (
    <section className="fixtures">
      {/* Gold hero */}
      <div className="fixtures__hero">
        <div className="fixtures__hero__inner">
          <h1>FIXTURES</h1>
          <nav className="fixtures__breadcrumb" aria-label="breadcrumb">
            <span aria-hidden="true">🏠</span>
            <span className="sep">/</span>
            <span>Fixtures</span>
          </nav>
        </div>
      </div>

      {/* Filter row */}
      <div className="fixtures__filters">
        <div className="filter-card">
          <label htmlFor="teamSel" className="filter-title">Filter by Team</label>
          <select
            id="teamSel"
            className="filter-select"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
          >
            <option value="all">All</option>
            {teams.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        <button className="reset-btn" onClick={() => setTeamId("all")}>
          ⟳ Reset Filters
        </button>
      </div>

      {/* Cards grid */}
      <div className="fixtures__grid">
        {filtered.map(fx => <FixtureCard key={fx.id} fx={fx} />)}
      </div>
    </section>
  );
}
