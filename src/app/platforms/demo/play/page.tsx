import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { UnifiedProductDemo } from "../../../components/demos/UnifiedProductDemo";

export const metadata = {
  title: "Interactive product demo | ShandayAI",
  description:
    "Watch raw incident logs become RCA reports and see RCA Assist agent orchestration on a reference Kubernetes audit incident.",
};

export default function PlayDemoPage() {
  return (
    <>
      <SiteHeader />
      <UnifiedProductDemo />
      <SiteFooter />
    </>
  );
}
