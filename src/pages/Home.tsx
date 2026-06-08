import MainLayout from "../layouts/MainLayout";
import HeroSection from "../modules/home/HeroSection";
import ExperienceSection from "../modules/home/ExperienceSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ExperienceSection />
    </MainLayout>
  );
}