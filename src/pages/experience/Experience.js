import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import HtopExperience from "../../containers/htopExperience/HtopExperience";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="console-page-header">
          <Fade bottom duration={1200} distance="24px">
            <ConsoleHeader
              theme={theme}
              command="cat /var/log/career.log"
              title={experience.title}
              description={experience["description"]}
            />
          </Fade>
          <Fade bottom duration={1200} distance="24px">
            <InfoPanel
              theme={theme}
              title="career/summary"
              rows={[
                { k: "tenure", v: "4+ years in production", accent: true },
                { k: "current", v: "Senior DevOps · KocharTech" },
                { k: "scope", v: "15+ apps @ 99.9% SLA" },
                { k: "team", v: "leads 8+ engineers" },
                { k: "mttr", v: "−40%", accent: true },
              ]}
            />
          </Fade>
        </div>
        <HtopExperience theme={theme} />
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
