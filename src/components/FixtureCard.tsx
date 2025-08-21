import type { Fixture } from "../types/fixture";
import "./fixture-card.css";

export default function FixtureCard({ fx }: { fx: Fixture }) {
  return (
    <article className="fx-card">
      <div className="fx-card__top">
        <div className="fx-venue">
          {fx.venue}{fx.city ? `, ${fx.city}` : ""}
        </div>
        {fx.status === "RECENT" && <span className="fx-badge">RECENT</span>}
        {fx.status === "LIVE" && <span className="fx-badge fx-badge--live">LIVE</span>}
      </div>

      <div className="fx-card__mid">
        <div className="fx-side">
          <div className="fx-score">{fx.homeScore ?? "-"}</div>
          <img src={fx.home.logoUrl} alt={fx.home.short} className="fx-logo" />
          <div className="fx-overs">{fx.homeOvers ?? ""}</div>
        </div>

        <div className="fx-vs">VS</div>

        <div className="fx-side">
          <div className="fx-score">{fx.awayScore ?? "-"}</div>
          <img src={fx.away.logoUrl} alt={fx.away.short} className="fx-logo" />
          <div className="fx-overs">{fx.awayOvers ?? ""}</div>
        </div>
      </div>

      {fx.resultText && (
        <div className="fx-result" title={fx.resultText}>
          {fx.resultText}
        </div>
      )}
    </article>
  );
}
