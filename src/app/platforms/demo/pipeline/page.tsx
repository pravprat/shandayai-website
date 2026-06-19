import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { PipelineFlowDemo } from "../../../components/demos/PipelineFlowDemo";

export const metadata = {
  title: "Demo: Raw logs to RCA report | ShandayAI",
  description: "Interactive walkthrough of the semantic RCA pipeline on Kubernetes audit logs.",
};

export default function PipelineDemoPage() {
  return (
    <>
      <SiteHeader />
      <PipelineFlowDemo />
      <SiteFooter />
    </>
  );
}
