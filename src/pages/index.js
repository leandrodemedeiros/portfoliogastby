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

<style>
  .gatsby-image-wrapper{
    background: rgba(236, 236, 236, 0.08);
    border-top: 1px solid rgba(255,255,255, 0.5);
    border-left: 1px solid rgba(255,255,255, 0.5);
    Background-filter: blur(5px);
  }
</style>
