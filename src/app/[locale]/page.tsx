import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import LearnBuildAutomate from "@/components/LearnBuildAutomate";
import FeaturedCourses from "@/components/FeaturedCourses";
import LearnByBuilding from "@/components/LearnByBuilding";
import SkillsPreview from "@/components/SkillsPreview";
import Method from "@/components/Method";
import Credibility from "@/components/Credibility";
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
      <LearnBuildAutomate />
      <FeaturedCourses />
      <LearnByBuilding />
      <SkillsPreview />
      <Method />
      <Credibility />
      <FinalCta />
    </>
  );
}
