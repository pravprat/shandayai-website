export type DemoStepGroup = "ingest" | "engine" | "investigate" | "assist" | "platform" | "deliver";

export type PipelineStep = {
  order: number;
  agent: string;
  title: string;
  subtitle: string;
  group: DemoStepGroup;
  status: string;
  highlights: Record<string, unknown>;
};

export type PipelineFlow = {
  job_id: string;
  status: string;
  product_tier: string;
  incident_id: string;
  log_path?: string;
  steps: PipelineStep[];
  report_preview?: {
    summary_markdown?: string | null;
    detailed_markdown?: string | null;
  };
};

export type ReasoningChainStep = {
  step_id: string;
  agent: string;
  label: string;
  summary: string;
  confidence?: number;
  related_pattern_ids?: string[];
  top_items?: { ref_id: string; summary: string }[];
  actions?: {
    action_id: string;
    title: string;
    description: string;
    action_class: string;
    priority: number;
  }[];
};

export type AssistSummary = {
  job_id: string;
  incident_id: string;
  product_tier: string;
  engine_context: Record<string, unknown>;
  reasoning: {
    hypotheses: {
      hypothesis_id: string;
      title: string;
      description: string;
      status: string;
      confidence: number;
      related_pattern_ids: string[];
    }[];
    reasoning_chain: ReasoningChainStep[];
  };
  remediation: {
    actions: {
      action_id: string;
      title: string;
      description: string;
      priority: number;
      action_class: string;
    }[];
  };
  report: {
    title: string;
    summary: string;
    root_cause_hypothesis_id: string;
    sections: { heading: string; body: string }[];
  } | null;
};

export type DemoRunResponse = {
  job_id: string;
  status: string;
  product_tier: string;
  pipeline_flow?: PipelineFlow;
  assist_summary?: AssistSummary;
};
