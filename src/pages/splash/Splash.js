import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

const BOOT_SEEN_KEY = "crypticani_boot_seen";

const Ok = () => (
  <span>
    <span className="boot-dim">[</span>
    <span className="boot-ok">{"  OK  "}</span>
    <span className="boot-dim">]</span>{" "}
  </span>
);

// One entry per boot line: `d` is the pause after the line appears.
const BOOT_LINES = [
  {
    d: 320,
    el: (
      <span className="boot-kmsg">
        crypticaniOS 4.2 — kernel 6.15-crypticani (tty1)
      </span>
    ),
  },
  {
    d: 200,
    el: (
      <span className="boot-kmsg">
        [&nbsp;&nbsp;&nbsp;&nbsp;0.000000] Booting Linux on x86_64,
        coffee=enabled
      </span>
    ),
  },
  {
    d: 170,
    el: (
      <span>
        <Ok />
        Mounted <span className="boot-amber">/skills</span> and{" "}
        <span className="boot-amber">/projects</span>.
      </span>
    ),
  },
  {
    d: 160,
    el: (
      <span>
        <Ok />
        Started Container Runtime{" "}
        <span className="boot-dim">(docker.service)</span>.
      </span>
    ),
  },
  {
    d: 160,
    el: (
      <span>
        <Ok />
        Started Kubernetes Node Agent{" "}
        <span className="boot-dim">(kubelet.service)</span>.
      </span>
    ),
  },
  {
    d: 170,
    el: (
      <span>
        <Ok />
        Started Automation Daemon{" "}
        <span className="boot-dim">(python3, 42 cron jobs)</span>.
      </span>
    ),
  },
  {
    d: 340,
    el: (
      <span>
        <Ok />
        Reached target <span className="boot-amber">Cloud Infrastructure</span>
        .
      </span>
    ),
  },
  { d: 140, el: <span>&nbsp;</span> },
  {
    d: 850,
    el: (
      <span>
        <span className="boot-dim">crypticani.dev login:</span>{" "}
        <span className="boot-typed">recruiter</span>
      </span>
    ),
  },
  {
    d: 300,
    el: (
      <span>
        <span className="boot-dim">Password:</span> ********
      </span>
    ),
  },
  {
    d: 320,
    el: (
      <span className="boot-dim">
        Last login: today. Welcome — everything here is automated.
      </span>
    ),
  },
  {
    d: 550,
    el: (
      <span>
        <span className="boot-ok">crypticani@prod</span>
        <span className="boot-dim">:~$</span> startx
        <span className="boot-caret" aria-hidden="true" />
      </span>
    ),
  },
];

class Splash extends Component {
  constructor(props) {
    super(props);
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Visiting /splash directly always replays the boot; on "/" it plays
    // only once per tab session.
    const forceReplay =
      props.location && props.location.pathname === "/splash";
    const alreadySeen =
      !forceReplay &&
      typeof window !== "undefined" &&
      window.sessionStorage &&
      window.sessionStorage.getItem(BOOT_SEEN_KEY) === "1";
    this.state = {
      redirect: alreadySeen,
      count: reducedMotion ? BOOT_LINES.length : 0,
      reducedMotion,
    };
    this.timer = null;
    this.startedAt = 0;
    this.finish = this.finish.bind(this);
    this.skip = this.skip.bind(this);
  }

  componentDidMount() {
    if (this.state.redirect) return;
    this.startedAt = Date.now();
    window.addEventListener("keydown", this.skip);
    window.addEventListener("pointerdown", this.skip);
    if (this.state.reducedMotion) {
      this.timer = setTimeout(this.finish, 800);
    } else {
      this.next();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    window.removeEventListener("keydown", this.skip);
    window.removeEventListener("pointerdown", this.skip);
  }

  skip() {
    // Grace period so the click that focuses the window doesn't
    // instantly skip the boot.
    if (Date.now() - this.startedAt < 500) return;
    this.finish();
  }

  next() {
    const { count } = this.state;
    if (count >= BOOT_LINES.length) {
      this.timer = setTimeout(this.finish, 350);
      return;
    }
    this.timer = setTimeout(() => {
      this.setState({ count: count + 1 }, () => this.next());
    }, BOOT_LINES[count].d);
  }

  finish() {
    try {
      window.sessionStorage.setItem(BOOT_SEEN_KEY, "1");
    } catch (e) {
      // private mode — boot will just replay next time
    }
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="boot-screen" role="status" aria-label="Loading portfolio">
        <div className="boot-log">
          {BOOT_LINES.slice(0, this.state.count).map((line, index) => (
            <div className="boot-line" key={index}>
              {line.el}
            </div>
          ))}
        </div>
        <div className="boot-skip" aria-hidden="true">
          press any key to skip
        </div>
      </div>
    );
  }
}

export default Splash;
