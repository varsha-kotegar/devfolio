import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyView from "@/components/CaseStudyView";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.tag,
    openGraph: { title: study.name, description: study.tag },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = caseStudies.findIndex((cs) => cs.slug === params.slug);
  const study = caseStudies[index];
  if (!study) notFound();

  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <Nav />
      <main id="main">
        <CaseStudyView study={study} next={next.slug === study.slug ? undefined : next} />
      </main>
      <Footer />
    </>
  );
}
