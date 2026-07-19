import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";
import InfoPanel from "../../components/infoPanel/InfoPanel";
import TechnicalWritingIllustration from "./TechnicalWritingIllustration";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <div className="console-page-header">
            <Fade bottom duration={1000} distance="24px">
              <div>
                <ConsoleHeader
                  theme={theme}
                  command="cat /etc/aniket/contact"
                  title={ContactData["title"]}
                  description={ContactData["description"]}
                />
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </Fade>
            <Fade bottom duration={1000} distance="24px">
              <InfoPanel
                theme={theme}
                title="contact/channels"
                rows={[
                  { k: "email", v: "aniket.kumar@hotmail.com", accent: true },
                  { k: "github", v: "github.com/crypticani" },
                  { k: "linkedin", v: "in/crypticani" },
                  { k: "discord", v: "@crypticani" },
                  { k: "blog", v: "blog.crypticani.dev" },
                  { k: "response time", v: "< 24h · IST" },
                ]}
              />
            </Fade>
          </div>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                {blogSection.featuredLinks?.length ? (
                  <div className="handbook-card-grid">
                    {blogSection.featuredLinks.map((handbook) => (
                      <div
                        className="handbook-card"
                        key={handbook.href}
                        style={{
                          backgroundColor: theme.highlight,
                          borderColor: theme.secondaryText,
                        }}
                      >
                        <h2
                          className="handbook-card-title"
                          style={{ color: theme.text }}
                        >
                          {handbook.title}
                        </h2>
                        <p
                          className="handbook-card-description"
                          style={{ color: theme.secondaryText }}
                        >
                          {handbook.description}
                        </p>
                        <Button
                          className="handbook-card-action"
                          text={handbook.buttonText}
                          newTab={true}
                          href={handbook.href}
                          theme={theme}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="blogsite-btn-div">
                  {blogSection.links?.length ? (
                    blogSection.links.map((link) => (
                      <Button
                        key={link.href}
                        text={link.text}
                        newTab={true}
                        href={link.href}
                        theme={theme}
                      />
                    ))
                  ) : !blogSection.featuredLinks?.length ? (
                    <Button
                      text="Visit My Blogsite"
                      newTab={true}
                      href={blogSection.link}
                      theme={theme}
                    />
                  ) : null}
                </div>
              </div>
              <div className="blog-heading-img-div">
                <TechnicalWritingIllustration theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
