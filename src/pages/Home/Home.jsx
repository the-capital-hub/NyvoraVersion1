import Hero from "../../components/Hero/Hero";
import Trust from "../../components/Trust/Trust";
import Introduction from "../../components/Introduction/Introduction";
import PracticeAreas from "../../components/PracticeAreas/PracticeAreas";
import WhyNyvora from "../../components/WhyNyvora/WhyNyvora";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import Signature from "../../components/Signature/Signature";
import Attorneys from "../../components/Attorneys/Attorneys";
import CaseResults from "../../components/CaseResults/CaseResults";
import AIAssistant from "../../components/AIAssistant/AIAssistant";
import Testimonials from "../../components/Testimonials/Testimonials";
import Insights from "../../components/Insights/Insights";
import CTA from "../../components/CTA/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Introduction />
      <PracticeAreas />
      <WhyNyvora />
      <HowWeWork />
      <Signature />
      <Attorneys />
      <CaseResults />
      <AIAssistant />
      <Testimonials />
      <Insights />
      <CTA />
    </>
  );
}
