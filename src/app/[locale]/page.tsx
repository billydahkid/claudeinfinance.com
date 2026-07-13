import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedSkills from "@/components/FeaturedSkills";
import OfficialSkills from "@/components/OfficialSkills";
import SkillExplorer from "@/components/SkillExplorer";
import About from "@/components/About";

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
      <SkillExplorer />
      <OfficialSkills />
      <CategoryGrid />
      <FeaturedSkills />
      <About />
    </>
  );
}
