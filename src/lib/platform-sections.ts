import type { LucideIcon } from "lucide-react";
import { BadgeCheck, FileText, Layers3, PlayCircle, Sparkles } from "lucide-react";

export type PlatformTierId = "rca-core" | "rca-assist" | "platform";

export type PlatformNavItem = {
  id: string;
  label: string;
  href: string;
  children?: { id: string; label: string; href: string }[];
};

export type PlatformDemo = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  featured?: boolean;
  icon: LucideIcon;
  accent: "cyan" | "teal" | "violet" | "amber";
};

export type PlatformTier = {
  id: PlatformTierId;
  name: string;
  shortName: string;
  tagline: string;
  bestFor: string;
  availableToday: string[];
  comingSoon: string[];
  deployment: string;
  accent: string;
  labelColor: string;
  badge: "Available today" | "Design partner pilot" | "Pilot and roadmap";
  todayLabel?: string;
  futureLabel?: string;
  note?: string;
  demos: PlatformDemo[];
};

export const platformNav: PlatformNavItem[] = [
  { id: "overview", label: "Overview", href: "#overview" },
  {
    id: "products",
    label: "Products",
    href: "#rca-core",
    children: [
      { id: "rca-core", label: "RCA Core", href: "#rca-core" },
      { id: "rca-assist", label: "RCA Assist", href: "#rca-assist" },
      { id: "platform", label: "Reliability Platform", href: "#platform" },
    ],
  },
  {
    id: "interactive-demos",
    label: "Interactive demos",
    href: "#interactive-demos",
    children: [
      { id: "demos-rca-core", label: "RCA Core demos", href: "#demos-rca-core" },
      { id: "demos-rca-assist", label: "RCA Assist demos", href: "#demos-rca-assist" },
      { id: "demos-platform", label: "Platform demos", href: "#demos-platform" },
    ],
  },
  { id: "how-it-works", label: "How it works", href: "#how-it-works" },
  { id: "deliverables", label: "Deliverables", href: "#deliverables" },
  { id: "deployment", label: "Deployment", href: "#deployment" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const platformTiers: PlatformTier[] = [
  {
    id: "rca-core",
    name: "ShandayAI RCA Core",
    shortName: "RCA Core",
    tagline: "Deterministic RCA in a local or customer-managed container.",
    bestFor:
      "Teams starting with evidence-backed RCA from logs and incident data before adding AI-assisted workflows.",
    availableToday: [
      "Local container deployment",
      "Log and incident data ingest",
      "Incident window detection and failure clustering",
      "Root-cause candidate ranking with evidence links",
      "RCA reports for team review",
    ],
    comingSoon: [
      "Additional export formats for ITSM handoff",
      "Broader pre-built connector patterns",
    ],
    deployment: "Local container or customer-managed environment",
    accent: "border-cyan-300/25 bg-gradient-to-b from-cyan-300/5 to-transparent",
    labelColor: "text-cyan-300",
    badge: "Available today",
    demos: [
      {
        href: "/platforms/demo/verified-rca-packet/",
        title: "Verified RCA packet",
        description:
          "Sanitized output from a real local run: evidence packet, grounding summary, audit and replay.",
        badge: "Verified",
        featured: true,
        icon: BadgeCheck,
        accent: "cyan",
      },
      {
        href: "/platforms/demo/pipeline/",
        title: "Raw logs to RCA report",
        description: "Animated walkthrough: ingest, normalization, RCA Core, and incident report.",
        icon: FileText,
        accent: "cyan",
      },
    ],
  },
  {
    id: "rca-assist",
    name: "ShandayAI RCA Assist",
    shortName: "RCA Assist",
    tagline: "RCA Core plus AI-assisted investigation and reporting.",
    bestFor:
      "Operations, SRE, support, and platform teams that want faster investigation and clearer handoff reports.",
    availableToday: [
      "Full RCA Core pipeline",
      "Local and private deployment options through pilot engagements",
    ],
    comingSoon: [
      "AI-assisted summaries and hypotheses",
      "Evidence packaging for support-ready reports",
      "Remediation suggestions with human review",
      "Broader self-serve enterprise deployment",
    ],
    deployment: "Local container or private enterprise through design partner pilot",
    accent: "border-teal-300/25 bg-gradient-to-b from-teal-300/5 to-transparent",
    labelColor: "text-teal-300",
    badge: "Design partner pilot",
    todayLabel: "In pilot today",
    futureLabel: "Planned for broader release",
    note: "AI-assisted investigation is delivered through design partner pilots. The RCA Core pipeline is available now.",
    demos: [
      {
        href: "/platforms/demo/rca-assist/",
        title: "RCA Assist reasoning",
        description: "Agent orchestration, evidence chain, and recommended actions with human review.",
        icon: Sparkles,
        accent: "amber",
      },
    ],
  },
  {
    id: "platform",
    name: "ShandayAI Reliability Intelligence Platform",
    shortName: "Reliability Platform",
    tagline: "Enterprise incident intelligence with governance and integrations.",
    bestFor:
      "Platform, infrastructure, and reliability teams that need governed incident workflows in private environments.",
    availableToday: [
      "Scoped enterprise pilots with RCA Core and Assist capabilities",
      "Private deployment patterns in customer-controlled infrastructure",
    ],
    comingSoon: [
      "Expanded observability and ITSM integrations",
      "Enterprise workflow orchestration and auditability at scale",
      "Cloud marketplace procurement",
    ],
    deployment: "Private enterprise deployment; marketplace on roadmap",
    accent: "border-violet-300/25 bg-gradient-to-b from-violet-300/5 to-transparent",
    labelColor: "text-violet-300",
    badge: "Pilot and roadmap",
    todayLabel: "In pilot today",
    futureLabel: "Planned for broader release",
    demos: [
      {
        href: "/platforms/demo/play/",
        title: "Full product walkthrough",
        description:
          "Auto-play pipeline plus RCA Assist on one reference incident. Best end-to-end preview.",
        badge: "Recommended",
        featured: true,
        icon: PlayCircle,
        accent: "violet",
      },
    ],
  },
];

export const demoAccentClasses: Record<
  PlatformDemo["accent"],
  { border: string; bg: string; icon: string }
> = {
  cyan: {
    border: "border-cyan-400/30 hover:border-cyan-300/50",
    bg: "bg-cyan-400/5",
    icon: "text-cyan-300",
  },
  teal: {
    border: "border-teal-400/30 hover:border-teal-300/50",
    bg: "bg-teal-400/5",
    icon: "text-teal-300",
  },
  violet: {
    border: "border-violet-400/30 hover:border-violet-300/50",
    bg: "bg-violet-400/5",
    icon: "text-violet-300",
  },
  amber: {
    border: "border-amber-400/30 hover:border-amber-300/50",
    bg: "bg-amber-400/5",
    icon: "text-amber-300",
  },
};
