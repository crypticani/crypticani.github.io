import React from "react";
import "./Greeting.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import PlatformHeroIllustration from "./PlatformHeroIllustration";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <h2 className="greeting-headline" style={{ color: theme.text }}>
                {greeting.headline}
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="greeting-actions-row">
                <div>
                  <Button
                    text="View Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>

                <div>
                  <Button
                    text="GitHub"
                    newTab={true}
                    href={greeting.githubProfile}
                    theme={theme}
                  />
                </div>

                <div>
                  <Button
                    text="LinkedIn"
                    newTab={true}
                    href={greeting.linkedInProfile}
                    theme={theme}
                  />
                </div>

                <div>
                  <Button
                    text="Contact Me"
                    newTab={false}
                    href={greeting.contactLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <PlatformHeroIllustration theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
