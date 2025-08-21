import type { Player } from "../types/player";
import "./player-card.css";

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <article className="gtp-card" aria-label={player.name}>
      <div className="gtp-media">
        <img src={player.imageUrl} alt={player.name} loading="lazy" />
        {/* Top-left captain badge */}
        {player.isCaptain && <span className="gtp-badge">C</span>}
        {/* Top-right flag */}
        {player.flagUrl && (
          <img className="gtp-flag" src={player.flagUrl} alt={player.country} />
        )}
        {/* Bottom gradient & name */}
        <div className="gtp-footer">
          <h3 className="gtp-name">
            {player.name.split(" ").slice(0, -1).join(" ") || player.name}
            {player.name.includes(" ") && <br />}
            {player.name.split(" ").slice(-1)}
          </h3>
        </div>
      </div>
    </article>
  );
}
