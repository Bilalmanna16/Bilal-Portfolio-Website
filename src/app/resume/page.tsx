import type { Metadata } from "next";
import { ProfileExperience } from "@/components/resume/profile-experience";

export const metadata: Metadata = { title: "Interactive Engineer Profile", description: "Discover Mohammed Bilal Manna's product engineering work, technical range, and approach to building.", alternates: { canonical: "/resume" } };

export default function ResumePage() { return <div className="resume-shell"><ProfileExperience /></div>; }
