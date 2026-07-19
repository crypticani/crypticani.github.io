import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";

const projectSections = [
  {
    id: "featured",
    title: "Featured Platform & Terminal Work",
    description:
      "Current tools and infrastructure-oriented projects that best match my DevOps, Linux, observability, and cloud direction.",
  },
  {
    id: "writing",
    title: "Handbooks & Technical Writing",
    description:
      "Repository-backed handbooks and technical notes for DevOps, Linux, cloud, and practical application security.",
  },
  {
    id: "earlier",
    title: "Earlier Developer Work",
    description:
      "Older projects that show my full-stack and automation roots before moving deeper into DevOps and platform engineering.",
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="console-page-header">
          <Fade bottom duration={1200} distance="24px">
            <ConsoleHeader
              theme={theme}
              command="ls ~/public --sort=stars"
              title={projectsHeader.title}
              description={projectsHeader["description"]}
            />
          </Fade>
        </div>
        <div className="project-section-list">
          {projectSections.map((section) => {
            const repos = ProjectsData.data.filter(
              (repo) => repo.category === section.id,
            );
            if (!repos.length) return null;

            return (
              <section
                className={`project-group-section project-group-section-${section.id}`}
                key={section.id}
              >
                <div className="project-group-heading">
                  <h2 style={{ color: theme.text }}>{section.title}</h2>
                  <p style={{ color: theme.secondaryText }}>
                    {section.description}
                  </p>
                </div>
                <div
                  className={`repo-cards-div-main repo-cards-div-main-${section.id}`}
                >
                  {repos.map((repo) => {
                    return (
                      <GithubRepoCard repo={repo} theme={theme} key={repo.id} />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
