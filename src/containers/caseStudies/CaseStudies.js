import React from "react";
import { Fade } from "react-reveal";
import { caseStudies } from "../../portfolio";
import "./CaseStudies.css";

export default function CaseStudies({ theme }) {
  return (
    <section className="case-studies-section" id="case-studies">
      <Fade bottom duration={1000} distance="20px">
        <div className="case-studies-header">
          <h1 className="case-studies-title" style={{ color: theme.text }}>
            {caseStudies.title}
          </h1>
          <p
            className="case-studies-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {caseStudies.subtitle}
          </p>
        </div>
      </Fade>

      <div className="case-studies-grid">
        {caseStudies.studies.map((study) => (
          <Fade bottom duration={1000} distance="24px" key={study.title}>
            <article
              className="case-study-card"
              style={{
                backgroundColor: theme.highlight,
                borderColor: theme.headerColor,
              }}
            >
              <p
                className="case-study-focus"
                style={{ color: theme.imageHighlight }}
              >
                {study.focus}
              </p>
              <h2 className="case-study-title" style={{ color: theme.text }}>
                {study.title}
              </h2>
              {study.problem && (
                <div className="case-study-detail">
                  <span
                    className="case-study-detail-label"
                    style={{ color: theme.imageHighlight }}
                  >
                    Problem
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
                    Built
                  </span>
                  <p style={{ color: theme.secondaryText }}>{study.built}</p>
                </div>
              )}
              {study.description && (
                <p
                  className="case-study-description"
                  style={{ color: theme.secondaryText }}
                >
                  {study.description}
                </p>
              )}
              <div className="case-study-outcomes">
                {study.outcomes.map((outcome) => (
                  <span
                    className="case-study-outcome"
                    key={outcome}
                    style={{
                      color: theme.text,
                      borderColor: theme.imageHighlight,
                    }}
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
