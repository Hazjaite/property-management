"use client";

import type { MouseEvent } from "react";

export default function Header() {
  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  };
  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${targetId}`);
    }
  };

  return (
    <header>
      <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><img loading="lazy" className="img-fluid" src="/images/logo.png" alt="img" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse home" id="main_nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/" onClick={handleHomeClick}>Начало</a></li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#plans"
                  onClick={(event) => handleAnchorClick(event, "plans")}
                >
                  Планове
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/#services"
                  onClick={(event) => handleAnchorClick(event, "services")}
                >
                  Услуги
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/about-us">За нас</a></li>
            </ul>
          </div>{" "}
        </div>{" "}
      </nav>
    </header>
  );
}
