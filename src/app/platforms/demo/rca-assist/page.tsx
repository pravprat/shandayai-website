import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { RcaAssistDemo } from "../../../components/demos/RcaAssistDemo";

export const metadata = {
  title: "Demo: RCA Assist reasoning | ShandayAI",
  description:
    "See RCA Assist hypotheses, evidence linking, and recommended remediation actions.",
};

export default function RcaAssistDemoPage() {
  return (
    <>
      <SiteHeader />
      <RcaAssistDemo />
      <SiteFooter />
    </>
  );
}
