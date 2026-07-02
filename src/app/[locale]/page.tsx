import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedSkills from "@/components/FeaturedSkills";
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
      <CategoryGrid />
      <FeaturedSkills />
      <About />
    </>
  );
}
