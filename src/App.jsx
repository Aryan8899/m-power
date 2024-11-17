import React from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Section from "./Component/about";
import Solutions from './Component/Solutions';
import AIAnalysis from './Component/AIAnalysis';
import BonusSection from './Component/BonusSection';
import LeadershipProfile from './Component/Leadership';
import Roadmapsection from "./Component/RoadmapSection";
import Form from "./Component/Fotter";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <Section />
        </section>
        <section id="solution">
          <Solutions />
        </section>
        <section id="why-ai">
          <AIAnalysis />
        </section>
        <section id="growth">
          <BonusSection />
        </section>
        <section id="leadership">
          <LeadershipProfile />
        </section>
        <section id="roadmap">
          <Roadmapsection />
        </section>
        <Form />
      </main>
    </div>
  );
};

export default App