import React from "react";
import {
  AboutSection,
  ArticlesSection,
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
        <ArticlesSection sectionId="articles" heading="Artigos recentes" sources={['Medium']} />
        <AboutSection sectionId="about" heading="Sobre mim" />
        <InterestsSection sectionId="details" heading="Habilidades e interesses" />
        <ProjectsSection sectionId="features" heading="Serviços" />
        <ContactSection sectionId="github" heading="Quer falar comigo?" />
      </Page>
    </>
  );
}
