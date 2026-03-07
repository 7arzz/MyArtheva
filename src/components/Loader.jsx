import { useEffect } from "react";
import "../styles/loader.css";

function Loader() {
  useEffect(() => {
    const word = "ARTHEVA";
    const textEl = document.getElementById("loaderText");

    // reset isi text dulu
    textEl.innerHTML = '<span class="loader-cursor"></span>';

    const cursor = textEl.querySelector(".loader-cursor");

    word.split("").forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = ch;
      span.style.animationDelay = `${1.0 + i * 0.08}s`;
      textEl.insertBefore(span, cursor);
    });
  }, []);

  return (
    <div className="loader">
      <div className="loader-grid"></div>

      <div className="loader-corner loader-corner--tl"></div>
      <div className="loader-corner loader-corner--tr"></div>
      <div className="loader-corner loader-corner--bl"></div>
      <div className="loader-corner loader-corner--br"></div>

      <div className="loader-status">SYS.BOOT — v4.2.1 — INITIALIZING</div>

      <div className="loader-body">
        <div className="loader-text" id="loaderText">
          <span className="loader-cursor"></span>
        </div>

        <div className="loader-divider"></div>

        <div className="loader-sub">
          LOADING ASSETS<span className="blink">_</span>
        </div>
      </div>

      <div className="loader-progress">
        <div className="loader-progress-label">
          <span>BOOT SEQUENCE</span>
          <span id="pct">0%</span>
        </div>

        <div className="loader-progress-track">
          <div className="loader-progress-bar"></div>
        </div>
      </div>

      <div className="loader-log">
        MEM: 16384K · CORE: ONLINE · NET: CONNECTED
      </div>
    </div>
  );
}

export default Loader;
