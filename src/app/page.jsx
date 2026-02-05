import AboutMissionSection from "@/components/Home/AboutMissionSection";
import Banner from "@/components/Home/Banner";
import ServicesOverview from "@/components/Home/ServicesOverview";
import TestimonialsSuccessMetrics from "@/components/Home/TestimonialsSuccessMetrics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <section className="">
          <Banner></Banner>
          <AboutMissionSection></AboutMissionSection>
          <ServicesOverview></ServicesOverview>
          <TestimonialsSuccessMetrics></TestimonialsSuccessMetrics>
        </section>
      </main>
    </div>
  );
}
