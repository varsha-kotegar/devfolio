import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-rail flex-col items-start justify-between gap-4 text-sm text-ink-soft sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built from scratch, reviewed like a case file.
        </p>
      </div>
      {/*
        Hi — you're reading the source. That counts as due diligence in my book.
        Say so in the contact form and I'll know you looked twice.
      */}
    </footer>
  );
}
