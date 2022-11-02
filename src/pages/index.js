import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Leandro de Medeiros — Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Artigos recentes" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="Sobre mim" />
        <InterestsSection sectionId="details" heading="Habilidades e ferramentas" />
        <ProjectsSection sectionId="features" heading="O que eu faço" />
        <ContactSection sectionId="github" heading="Quer falar comigo?" />
      </Page>
    </>
  );
}
