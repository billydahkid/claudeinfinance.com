import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import WhatYouBuild from "@/components/WhatYouBuild";
import LearnBuildAutomate from "@/components/LearnBuildAutomate";
import FeaturedCourses from "@/components/FeaturedCourses";
import Certification from "@/components/Certification";
import SkillsPreview from "@/components/SkillsPreview";
import Pricing from "@/components/Pricing";
import ForOrganizations from "@/components/ForOrganizations";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhatYouBuild />
      <LearnBuildAutomate />
      <FeaturedCourses />
      <Certification />
      <SkillsPreview />
      <Pricing />
      <ForOrganizations />
      <Faq />
      <FinalCta />
    </>
  );
}
