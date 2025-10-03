import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/HomePage";
import PricingPage from "@/react-app/pages/PricingPage";
import TermsPage from "@/react-app/pages/TermsPage";
import PrivacyPage from "@/react-app/pages/PrivacyPage";
import RefundPage from "@/react-app/pages/RefundPage";
import ContactPage from "@/react-app/pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
