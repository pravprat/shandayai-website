/** Representative k8s audit lines for demo theater (reference incident). */
export const RAW_LOG_LINES = [
  "2023-01-27T18:28:08Z,403,system:node:k8s-node-1-perfspec,watch,configmaps,kube-flannel",
  "2023-01-27T18:28:08Z,403,system:node:k8s-node-1-perfspec,watch,configmaps,kube-system",
  "2023-01-27T18:28:08Z,404,system:serviceaccount:gatekeeper-system:gatekeeper-admin,get,assign",
  "2023-01-27T18:28:09Z,403,system:serviceaccount:kube-system:replicaset-controller,create,pods",
  "2023-01-27T18:28:10Z,404,system:serviceaccount:gatekeeper-system:gatekeeper-admin,get,constrainttemplates",
];

export const ASSIST_AGENT_STEPS = [
  { id: "hypothesis", label: "Hypothesis", color: "amber" },
  { id: "evidence", label: "Evidence", color: "cyan" },
  { id: "remediation", label: "Remediation", color: "violet" },
  { id: "report", label: "Report", color: "emerald" },
] as const;
