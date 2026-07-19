import React from "react";
import { Fade } from "react-reveal";
import { caseStudies } from "../../portfolio";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";
import "./CaseStudies.css";

// Case studies as stacked report rows — scannable left-to-right like a
// journal, and immune to grid orphans no matter how many entries exist.
export default function CaseStudies({ theme }) {
  return (
    <section className="case-studies-section" id="case-studies">
      <Fade bottom duration={1000} distance="20px">
        <ConsoleHeader
          theme={theme}
          command="journalctl -u production --case-studies"
          title={caseStudies.title}
          description={caseStudies.subtitle}
        />
      </Fade>

      <div className="case-studies-list">
        {caseStudies.studies.map((study, index) => (
          <Fade bottom duration={800} distance="20px" key={study.title}>
            <article
              className="case-study-row"
              style={{
                backgroundColor: theme.panel || theme.highlight,
                borderColor: theme.border || theme.headerColor,
              }}
            >
              <div className="case-study-side">
                <p
                  className="case-study-index"
                  style={{ color: theme.secondaryText }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p
                  className="case-study-focus"
                  style={{ color: theme.imageHighlight }}
                >
                  {study.focus}
                </p>
                <h2 className="case-study-title" style={{ color: theme.text }}>
                  {study.title}
                </h2>
                <div className="case-study-outcomes">
                  {study.outcomes.map((outcome) => (
                    <span
                      className="case-study-outcome"
                      key={outcome}
                      style={{
                        color: theme.secondaryText,
                        borderColor: theme.border || theme.headerColor,
                      }}
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-study-body">
                {study.problem && (
                  <div className="case-study-detail">
                    <span
                      className="case-study-detail-label"
                      style={{ color: theme.imageHighlight }}
                    >
                      problem
                    </span>
                    <p style={{ color: theme.secondaryText }}>
                      {study.problem}
                    </p>
                  </div>
                )}
                {study.built && (
                  <div className="case-study-detail">
                    <span
                      className="case-study-detail-label"
                      style={{ color: theme.imageHighlight }}
                    >
                      built
                    </span>
                    <p style={{ color: theme.secondaryText }}>{study.built}</p>
                  </div>
                )}
              </div>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
