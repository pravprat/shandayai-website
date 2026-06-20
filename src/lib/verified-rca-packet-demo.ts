import verifiedSnapshot from "../data/osip-rca-packet-verified.json";

export type VerifiedRcaMetrics = {
  primary_finding: string;
  evidence_count: number;
  content_unit_count: number;
  citation_type: string;
  human_review: string;
  replay_status: string;
  artifact_count: number;
  audit_events: number;
  line_level_citations: number;
  event_level_citations: number;
};

export type VerifiedRcaStage = {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  accent: "cyan" | "violet" | "emerald" | "amber";
  bullets: string[];
  detailTitle: string;
  detailLines: string[];
};

export type VerifiedRcaSnapshot = typeof verifiedSnapshot;

export const verifiedRcaSnapshot = verifiedSnapshot as VerifiedRcaSnapshot;

export const verifiedDemoNote =
  "This demo is based on a local OSIP ↔ SCRCA run using a sanitized Kubernetes audit fixture. Current grounding is event-level; line-level citation support depends on source format.";

export const verifiedStages: VerifiedRcaStage[] = [
  {
    id: "source",
    step: 1,
    title: "Enterprise source signal",
    subtitle: "Kubernetes audit log / incident input",
    accent: "cyan",
    bullets: [
      "Customer-controlled log file ingested locally",
      "No data leaves the workflow boundary in this demo",
      "1,576 audit events in the reference fixture",
    ],
    detailTitle: "Input signal",
    detailLines: [
      "Fixture: Kubernetes audit CSV (gatekeeper authorization failures)",
      "SourceManifest registered with SHA-256 content hash",
      "Format hint: k8s_audit_csv",
    ],
  },
  {
    id: "control-plane",
    step: 2,
    title: "Shared control plane",
    subtitle: "OSIP job, manifest, artifacts, audit, replay",
    accent: "cyan",
    bullets: [
      "Workflow job: reliability_rca_packet_phase1_6",
      "Artifacts stored with lineage and content hashes",
      "Audit trace exported for inspection",
    ],
    detailTitle: "OSIP control plane",
    detailLines: [
      `Job ID: ${verifiedSnapshot.meta.job_id}`,
      "Steps: register source → invoke external engine → persist outputs",
      `${verifiedSnapshot.metrics.audit_events} audit events recorded`,
      `${verifiedSnapshot.metrics.artifact_count} artifacts in stored run`,
    ],
  },
  {
    id: "domain-intelligence",
    step: 3,
    title: "Domain intelligence",
    subtitle: "SCRCA runs as the Reliability / RCA engine",
    accent: "violet",
    bullets: [
      "semantic-rca invoked via subprocess (not copied into OSIP)",
      "Full v2 output tree preserved before mapping",
      "Engine clustering and ranking unchanged by OSIP",
    ],
    detailTitle: "SCRCA engine invocation",
    detailLines: [
      `Engine: ${verifiedSnapshot.invocation.engine}`,
      `Exit code: ${verifiedSnapshot.invocation.exit_code}`,
      `Duration: ~${verifiedSnapshot.invocation.duration_seconds}s`,
      `Events ingested: ${verifiedSnapshot.invocation.events_ingested.toLocaleString()}`,
    ],
  },
  {
    id: "grounding",
    step: 4,
    title: "Evidence grounding",
    subtitle: "ContentUnits, event-level citations, EvidenceBundle",
    accent: "violet",
    bullets: [
      `${verifiedSnapshot.metrics.content_unit_count} ContentUnits registered from SCRCA outputs`,
      `${verifiedSnapshot.metrics.evidence_count} supporting evidence items in bundle`,
      "Event-level locators only for this fixture",
    ],
    detailTitle: "Grounding summary",
    detailLines: [
      `Mapped to ContentUnit: ${verifiedSnapshot.grounding.mapped_to_content_unit_count}/${verifiedSnapshot.grounding.total_scrca_evidence_items}`,
      `Mapped to SourceManifest: ${verifiedSnapshot.grounding.mapped_to_source_manifest_count}`,
      `Unresolved citations: ${verifiedSnapshot.grounding.unresolved_citation_count}`,
      verifiedSnapshot.grounding.known_gap,
    ],
  },
  {
    id: "rca-packet",
    step: 5,
    title: "RCA packet",
    subtitle: "Markdown packet + JSON output",
    accent: "emerald",
    bullets: [
      `Primary cluster: ${verifiedSnapshot.metrics.primary_finding}`,
      "Human-readable rca_packet.md for review",
      "Machine-readable output_packet.json for integration",
    ],
    detailTitle: "Packet outputs",
    detailLines: [
      verifiedSnapshot.primary_finding.summary,
      `Actor: ${verifiedSnapshot.primary_finding.actor}`,
      `Component: ${verifiedSnapshot.primary_finding.component}`,
      `Human review: ${verifiedSnapshot.metrics.human_review}`,
    ],
  },
  {
    id: "audit-replay",
    step: 6,
    title: "Audit and replay",
    subtitle: "Audit export and replay validation",
    accent: "emerald",
    bullets: [
      "Audit timeline exported as JSON and Markdown",
      "Replay validates lineage without re-running SCRCA",
      `Replay status: ${verifiedSnapshot.metrics.replay_status}`,
    ],
    detailTitle: "Validation",
    detailLines: [
      `Reconstructed: ${verifiedSnapshot.replay.reconstructed}`,
      `Lineage valid: ${verifiedSnapshot.replay.lineage_valid}`,
      `Hashes valid: ${verifiedSnapshot.replay.hashes_valid}`,
      "Replay does not re-invoke the engine unless explicitly requested",
    ],
  },
];

export const verifiedClaims = [
  "Local OSIP CLI run produced this output from a real semantic-rca subprocess",
  "Primary finding cluster C1 from SCRCA root-cause ranking (not re-ranked by OSIP)",
  "3 supporting evidence items with event-level citations",
  "203 ContentUnits registered from SCRCA event outputs",
  "Human review required before operational action",
  "Replay validation reconstructed stored artifacts with valid lineage and hashes",
  "Raw SCRCA v2 outputs preserved before OSIP mapping",
];

export const roadmapClaims = [
  "Production-ready multi-tenant SaaS deployment",
  "Autonomous remediation or closed-loop fixes",
  "Line-level citations for all log formats (depends on source ingest)",
  "Platform delegation to agentic artifact bus",
  "RCA Assist agent orchestration in this workflow",
  "Marketplace or cloud-managed offering",
];
