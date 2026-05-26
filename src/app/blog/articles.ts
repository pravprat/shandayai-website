export const articles = [
  {
    slug: "from-observability-to-operational-intelligence",
    title: "From Observability to Operational Intelligence",
    subtitle:
      "Why modern infrastructure needs systems that explain why incidents happen, not just what happened.",
    tag: "Operational Intelligence",
    sections: [
      ["The gap in observability", "Observability tools expose signals, but humans still perform most of the correlation, interpretation, and root cause reasoning."],
      ["Operational intelligence", "The next layer connects alerts, logs, metrics, deployments, and topology into structured understanding."],
      ["What changes", "Teams move from dashboard inspection to evidence-backed diagnostics and guided operational workflows."],
    ],
  },
  {
    slug: "why-deterministic-ai-matters",
    title: "Why Deterministic AI Matters for Infrastructure Operations",
    subtitle:
      "Infrastructure teams need repeatability, evidence, validation, and control before trusting AI-driven operations.",
    tag: "Deterministic AI",
    sections: [
      ["Why generic AI is not enough", "Free-form AI can summarize, but infrastructure operations require traceable and repeatable reasoning."],
      ["Evidence-backed diagnostics", "Every conclusion should connect to observable signals, time windows, and system context."],
      ["Trust before autonomy", "Automation should only progress when diagnosis, confidence, approval, and rollback boundaries are clear."],
    ],
  },
  {
    slug: "semantic-infrastructure-intelligence",
    title: "Semantic Infrastructure Intelligence",
    subtitle:
      "Turning fragmented infrastructure signals into entities, relationships, context, and operational understanding.",
    tag: "Semantic Intelligence",
    sections: [
      ["From raw signals to entities", "Logs become more useful when mapped to services, namespaces, pods, containers, deployments, and owners."],
      ["Why relationships matter", "Dependency and topology context improves diagnosis, impact analysis, and workflow routing."],
      ["Infrastructure memory", "Over time, operational systems can learn recurring patterns without exposing private implementation logic."],
    ],
  },
  {
    slug: "agentic-ai-for-infrastructure-operations",
    title: "Agentic AI for Infrastructure Operations",
    subtitle:
      "How agents, deterministic reasoning, CI/CD tools, and human approval can work together safely.",
    tag: "Agentic AI",
    sections: [
      ["Beyond chat-based AI", "Operational agents must coordinate workflows, tools, approvals, and verification, not simply generate text."],
      ["A clean responsibility split", "Agents coordinate, semantic systems contextualize, deterministic systems diagnose, and humans approve risky actions."],
      ["Toward governed remediation", "The path to automation starts with diagnosis, then change correlation, approval, execution, and verification."],
    ],
  },
];