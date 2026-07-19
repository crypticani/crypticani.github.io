import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import HtopExperience from "../../containers/htopExperience/HtopExperience";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";
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
