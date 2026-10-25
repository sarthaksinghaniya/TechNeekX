'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ShieldCheck, Mail, MapPin, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111318] font-sans editorial-grid-subtle">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-[#626873] hover:text-[#111318] transition-colors mb-8 cursor-pointer bg-transparent border-none font-medium"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        {/* Page Header */}
        <div className="border-b border-[#DDE1E6] pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0062FF] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            <span>Legal &amp; Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111318] tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[#626873] text-sm sm:text-base">
            Effective Date: January 1, 2026 | Last Updated: October 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#626873]">
          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#111318] mb-3 flex items-center gap-2">
              <FileText size={20} className="text-[#0062FF]" />
              1. Overview
            </h2>
            <p>
              Welcome to <strong className="text-[#111318]">TechNeekX</strong> (&ldquo;TNX&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a student-driven AI product studio and engineering ecosystem headquartered in Lucknow, Uttar Pradesh, India. We are committed to protecting your personal information and your right to privacy.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, store, utilize, and protect your information when you visit our website (<code className="text-[#0062FF] text-xs bg-[#F7F8FA] border border-[#DDE1E6] px-2 py-0.5 rounded font-mono">teamtechneekx.netlify.app</code>), register for events, submit applications to join our builder team, or partner with our community.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">2. Information We Collect</h2>
            <p>
              We only collect information that you directly and voluntarily provide to us when interacting with our ecosystem:
            </p>
            <ul className="space-y-3 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Contact Details:</strong> Your name, email address, WhatsApp/phone number, and social profiles (GitHub, LinkedIn).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Application Information:</strong> Resume data, coding portfolio links, skills, university affiliation, and project experience submitted via our recruitment or onboarding forms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Partnership Inquiries:</strong> Organization name, proposal details, and collaboration objectives submitted via partnership forms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Technical Logs:</strong> Non-personally identifiable diagnostic information (browser type, OS, page views) collected for performance optimization and debugging.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">3. How We Use Your Information</h2>
            <p>
              TechNeekX uses your information strictly for legitimate community and operational purposes:
            </p>
            <ul className="space-y-3 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span>Reviewing and responding to builder team recruitment applications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span>Coordinating hackathon teams, workshops, mentorship sessions, and open-source contributions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span>Communicating announcements, community milestones, and collaborative opportunities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span>Ensuring website security, preventing abuse, and verifying authentic student participation.</span>
              </li>
            </ul>
            <p className="mt-2 text-[#626873] text-sm">
              We never sell, rent, monetize, or trade your personal data to third parties or data brokers.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">4. Cookies and Local Storage</h2>
            <p>
              Our website uses strictly necessary cookies and local storage tokens solely to maintain basic session state, UI theme preferences, and prevent duplicate recruitment modal popups. We do not employ intrusive tracking cookies or cross-site behavioral tracking scripts.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">5. Third-Party Services</h2>
            <p>
              We integrate with trusted service providers to support our operations:
            </p>
            <ul className="space-y-3 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">GitHub:</strong> For code hosting, open-source repositories, and developer identity verification.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Google Forms &amp; Workspace:</strong> For processing team applications, event registrations, and partner inquiries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Netlify:</strong> For continuous deployment, CDN caching, and edge server hosting.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">6. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard encryption, HTTPS protocols, and access controls to protect your data. We retain application submissions only for the duration necessary to evaluate recruitment and manage community membership. You may request the deletion of your submitted details at any time.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">7. Your Rights</h2>
            <p>
              Depending on your location, you have the right to access, rectify, or request the deletion of your personal data held by TechNeekX. If you would like to inspect or remove any information you have submitted through our forms or platform, please contact us directly.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm mt-12">
            <h2 className="text-xl font-bold text-[#111318] mb-4 flex items-center gap-2">
              <Lock size={20} className="text-[#0062FF]" />
              8. Contact Us
            </h2>
            <p className="text-sm text-[#626873] mb-4">
              If you have any questions or concerns regarding this Privacy Policy, please reach out to our team:
            </p>
            <div className="space-y-2.5 text-sm text-[#626873]">
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#0062FF]" />
                <a href="mailto:teamtechneekx@gmail.com" className="text-[#111318] font-medium hover:text-[#0062FF] transition-colors">
                  teamtechneekx@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[#0062FF]" />
                <span className="text-[#111318]">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
