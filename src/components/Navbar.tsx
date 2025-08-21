import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logoUrl from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/squad", label: "Squad" },
  { to: "/fixtures", label: "Fixtures" },
  { to: "/shop", label: "Shop" },
];

export default function Navbar() {
  const [_open, setOpen] = useState(false);

  return (
    <header className="gt-nav">
      <div className="gt-nav__inner">
        <Link to="/" className="gt-nav__brand" aria-label="Home">
        <img src={logoUrl} alt="Biratnagar Kings" className="gt-logo" />
        </Link>

        {/* Desktop menu */}
        <nav className="gt-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                "gt-link" + (isActive ? " gt-link--active" : "")
              }
              onClick={() => setOpen(false)}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        </div>
    </header>
  );
}
