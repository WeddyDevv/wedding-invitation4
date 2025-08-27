import RomanticHeader from "@/components/RomanticHeader";
import HeroSection from "@/components/HeroSection";
import WeddingDecorationSection from "@/components/WeddingDecorationSection";
import CountdownSection from "@/components/CountdownSection";
import ServicesSection from "@/components/ServicesSection";
import RecentActivitiesSection from "@/components/RecentActivitiesSection";
import WeddingMenuSection from "@/components/WeddingMenuSection";
import BlessingSection from "@/components/BlessingSection";
import WhenWhereSection from "@/components/WhenWhereSection"

const Index = () => {
  return (
    <div className="min-h-screen">
      <RomanticHeader />
      <main>
        <HeroSection />
        <CountdownSection />
        <ServicesSection />
        <RecentActivitiesSection />
        <WeddingMenuSection />
        <WeddingDecorationSection />
            <WhenWhereSection />
        <BlessingSection />
      </main>
    </div>
  );
};

export default Index;
