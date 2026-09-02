import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

// Phase 1 — Hero & Core Sections
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ClientProblems from "@/components/sections/ClientProblems";
import Services from "@/components/sections/Services";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Methodology from "@/components/sections/Methodology";
import SecurityWorkflow from "@/components/sections/SecurityWorkflow";

// Phase 2 — Experience, Projects & Evidence
import Experience from "@/components/sections/Experience";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FindingShowcase from "@/components/sections/FindingShowcase";
import ReportPreview from "@/components/sections/ReportPreview";
import Certifications from "@/components/sections/Certifications";
import Recognition from "@/components/sections/Recognition";
import Speaking from "@/components/sections/Speaking";
import SpeakerHighlight from "@/components/sections/SpeakerHighlight";
import AchievementTimeline from "@/components/sections/AchievementTimeline";
import ProofWall from "@/components/sections/ProofWall";

// Phase 3 — Research, Skills, Contact & Finish
import SecurityResearch from "@/components/sections/SecurityResearch";
import BugBounty from "@/components/sections/BugBounty";
import GitHubSection from "@/components/sections/GitHub";
import SecurityArsenal from "@/components/sections/SecurityArsenal";
import Skills from "@/components/sections/Skills";
import ProofOfPractice from "@/components/sections/ProofOfPractice";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Packages from "@/components/sections/Packages";
import HowItWorks from "@/components/sections/HowItWorks";
import EthicalSecurity from "@/components/sections/EthicalSecurity";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col overflow-hidden">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trust Credentials */}
        <TrustBar />

        {/* 3. Client Problems */}
        <ClientProblems />

        {/* 4. Services */}
        <Services />

        {/* 5. Why Hire Me */}
        <WhyHireMe />

        {/* 6. Security Methodology */}
        <Methodology />

        {/* 7. Signature Workflow */}
        <SecurityWorkflow />

        {/* 8. Professional Experience */}
        <Experience />

        {/* 9-10. Featured Security Work & Case Studies */}
        <FeaturedWork />

        {/* 11. Finding Showcase */}
        <FindingShowcase />

        {/* 12. Report Preview */}
        <ReportPreview />

        {/* 13. Certifications */}
        <Certifications />

        {/* 14. Awards & Recognition */}
        <Recognition />

        {/* 15. Speaking */}
        <Speaking />

        {/* 16. Speaker Highlight */}
        <SpeakerHighlight />

        {/* 17. Achievement Timeline */}
        <AchievementTimeline />

        {/* 18. Photo Proof Wall */}
        <ProofWall />

        {/* 19. Security Research */}
        <SecurityResearch />

        {/* 20. Bug Bounty (conditional) */}
        <BugBounty />

        {/* 21. GitHub */}
        <GitHubSection />

        {/* 22. Security Arsenal */}
        <SecurityArsenal />

        {/* 23. Technical Skills */}
        <Skills />

        {/* 24. Proof of Practice */}
        <ProofOfPractice />

        {/* 25. About */}
        <About />

        {/* 26. Education */}
        <Education />

        {/* 27. Freelance Packages */}
        <Packages />

        {/* 28. How It Works */}
        <HowItWorks />

        {/* 29. Ethical Security */}
        <EthicalSecurity />

        {/* 30. Testimonials / Proof of Work */}
        <Testimonials />

        {/* 31. FAQ */}
        <FAQ />

        {/* 32. Contact */}
        <Contact />

        {/* 33. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
