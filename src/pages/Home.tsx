import MainLayout from "../layouts/MainLayout";
import HeroSection from "../modules/home/HeroSection";
import ExperienceSection from "../modules/home/ExperienceSection";
import Projects from "../projects/Projects";
import EducationSection from "../modules/education/EducationSection";
import ContactSection from "../modules/contact/ContactSection";
export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
      <Projects />
      <EducationSection />
      <ContactSection />
    </MainLayout>
  );
}