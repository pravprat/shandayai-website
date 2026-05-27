export const articles = [
  {
    slug: "from-observability-to-operational-intelligence",
    title: "From Observability to Operational Intelligence",
    subtitle:
      "Why modern infrastructure needs systems that explain why incidents happen, not just what happened.",
    tag: "Operational Intelligence",
    sections: [
      [
        "The gap in observability",
        "Modern observability tools are excellent at surfacing signals: dashboards, alerts, traces, metrics, and logs. The hard part starts after the alert fires. Engineers still have to correlate fragments across systems, decide which signal matters, reconstruct the incident timeline, and explain why the failure happened. Visibility is necessary, but it is not the same as diagnosis.",
      ],
      [
        "Operational intelligence",
        "Operational intelligence is the layer above raw telemetry. It connects alerts, logs, metrics, topology, deployments, tickets, and service context into a structured understanding of the incident. Instead of asking teams to inspect every dashboard manually, the system should assemble context, identify relationships, and produce an evidence-backed explanation of what changed and what likely caused impact.",
      ],
      [
        "What changes for teams",
        "The operating model shifts from reactive search to guided investigation. SRE, platform, and support teams can move faster because the system narrows the time window, groups repeated patterns, highlights causal candidates, and preserves the evidence trail. The goal is not to hide complexity. The goal is to make complex systems explainable enough for teams to take confident action.",
      ],
    ],
  },
  {
    slug: "why-deterministic-ai-matters",
    title: "Why Deterministic AI Matters for Infrastructure Operations",
    subtitle:
      "Infrastructure teams need repeatability, evidence, validation, and control before trusting AI-driven operations.",
    tag: "Deterministic AI",
    sections: [
      [
        "Why generic AI is not enough",
        "Free-form AI can summarize operational data, but infrastructure operations require stronger guarantees. A production incident is not a brainstorming exercise. Teams need to know which events were used, which assumptions were made, why a candidate root cause was ranked highly, and whether the same input would produce the same diagnostic artifact again.",
      ],
      [
        "Evidence-backed diagnostics",
        "A deterministic diagnostic core gives AI systems a stable foundation. Signals are normalized into events, grouped into patterns, scored against time and severity, and linked back to evidence. Generative AI can still help with narrative and interaction, but the claims should be grounded in artifacts that can be inspected, validated, and improved over time.",
      ],
      [
        "Trust before autonomy",
        "The path to automation must pass through trust. Before a system recommends remediation, it should show its evidence, confidence, alternatives, risk boundaries, and approval path. Deterministic AI matters because it gives infrastructure teams the repeatability and auditability required to move from diagnosis to governed action.",
      ],
    ],
  },
  {
    slug: "semantic-infrastructure-intelligence",
    title: "Semantic Infrastructure Intelligence",
    subtitle:
      "Turning fragmented infrastructure signals into entities, relationships, context, and operational understanding.",
    tag: "Semantic Intelligence",
    sections: [
      [
        "From raw signals to entities",
        "Infrastructure data arrives as fragments: log lines, alert payloads, deployment events, metrics, traces, tickets, and configuration changes. Semantic infrastructure intelligence turns those fragments into entities such as services, namespaces, pods, containers, dependencies, owners, and change events. Once signals are represented as entities, they become easier to correlate and reason about.",
      ],
      [
        "Why relationships matter",
        "Incidents are rarely isolated to one log line. They move through dependencies, control planes, queues, storage systems, networks, and release pipelines. Relationship context helps separate source from symptom, local failure from downstream impact, and likely cause from noisy coincidence. This is the bridge between observability and root cause analysis.",
      ],
      [
        "Infrastructure memory",
        "Over time, semantic systems can build memory around recurring patterns: which components fail together, which changes often precede incidents, and which signals are useful for diagnosis. This memory does not need to expose private implementation details. It should help teams recognize familiar operational shapes and respond with better evidence.",
      ],
    ],
  },
  {
    slug: "agentic-ai-for-infrastructure-operations",
    title: "Agentic AI for Infrastructure Operations",
    subtitle:
      "How agents, deterministic reasoning, CI/CD tools, and human approval can work together safely.",
    tag: "Agentic AI",
    sections: [
      [
        "Beyond chat-based AI",
        "Agentic AI for operations should do more than answer questions in a chat window. It should coordinate a workflow: receive an alert, gather context, invoke diagnostic tools, inspect recent changes, prepare evidence, request approval, and verify outcomes. The value is not just a better summary. The value is a safer operating loop.",
      ],
      [
        "A clean responsibility split",
        "The safest architecture separates responsibilities. Agents orchestrate work and interact with tools. Semantic systems provide context about entities and relationships. Deterministic RCA systems diagnose and preserve evidence. Humans approve risky actions. This split prevents the agent from becoming an opaque decision-maker with too much unchecked authority.",
      ],
      [
        "Toward governed remediation",
        "The path to remediation should be gradual. First, diagnose. Then correlate likely causes with changes. Then propose bounded actions with risk and reversibility. Then ask for approval. Finally, execute and verify. This is how infrastructure teams can benefit from agents while keeping control, auditability, and safety at the center.",
      ],
    ],
  },
];
