'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ShieldCheck, Mail, MapPin, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030508] text-slate-300 font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        {/* Page Header */}
        <div className="border-b border-slate-800 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            <span>Legal &amp; Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Effective Date: January 1, 2026 | Last Updated: October 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-300">
          <section className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FileText size={20} className="text-blue-400" />
              1. Overview
            </h2>
            <p>
              Welcome to <strong className="text-white">TechNeekX</strong> (&ldquo;TNX&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a student-driven AI product studio and engineering ecosystem headquartered in Lucknow, Uttar Pradesh, India. We are committed to protecting your personal information and your right to privacy.
            </p>
            <p className="mt-3">
              This Privacy Policy explains how we collect, store, utilize, and protect your information when you visit our website (<code className="text-sky-300 text-xs bg-slate-800 px-1.5 py-0.5 rounded">teamtechneekx.netlify.app</code>), register for events, submit applications to join our builder team, or partner with our community.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              We only collect information that you directly and voluntarily provide to us when interacting with our ecosystem:
            </p>
            <ul className="space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Contact Details:</strong> Your name, email address, WhatsApp/phone number, and social profiles (GitHub, LinkedIn).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Application Information:</strong> Resume data, coding portfolio links, skills, university affiliation, and project experience submitted via our recruitment or onboarding forms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Partnership Inquiries:</strong> Organization name, proposal details, and collaboration objectives submitted via partnership forms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Technical Logs:</strong> Non-personally identifiable diagnostic information (browser type, OS, page views) collected for performance optimization and debugging.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>
              TechNeekX uses your information strictly for legitimate community and operational purposes:
            </p>
            <ul className="space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Reviewing and responding to builder team recruitment applications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Coordinating hackathon teams, workshops, mentorship sessions, and open-source contributions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Communicating announcements, community milestones, and collaborative opportunities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Ensuring website security, preventing abuse, and verifying authentic student participation.</span>
              </li>
            </ul>
            <p className="mt-2 text-slate-400 text-sm">
              We never sell, rent, monetize, or trade your personal data to third parties or data brokers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">4. Cookies and Local Storage</h2>
            <p>
              Our website uses strictly necessary cookies and local storage tokens solely to maintain basic session state, UI theme preferences, and prevent duplicate recruitment modal popups. We do not employ intrusive tracking cookies or cross-site behavioral tracking scripts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">5. Third-Party Services</h2>
            <p>
              We integrate with trusted service providers to support our operations:
            </p>
            <ul className="space-y-2 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">GitHub:</strong> For code hosting, open-source repositories, and developer identity verification.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Google Forms &amp; Workspace:</strong> For processing team applications, event registrations, and partner inquiries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span><strong className="text-slate-200">Netlify:</strong> For continuous deployment, CDN caching, and edge server hosting.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">6. Data Security &amp; Retention</h2>
            <p>
              We implement industry-standard encryption, HTTPS protocols, and access controls to protect your data. We retain application submissions only for the duration necessary to evaluate recruitment and manage community membership. You may request the deletion of your submitted details at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">7. Your Rights</h2>
            <p>
              Depending on your location, you have the right to access, rectify, or request the deletion of your personal data held by TechNeekX. If you would like to inspect or remove any information you have submitted through our forms or platform, please contact us directly.
            </p>
          </section>

          <section className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 mt-12">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock size={20} className="text-blue-400" />
              8. Contact Us
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              If you have any questions or concerns regarding this Privacy Policy, please reach out to our team:
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:teamtechneekx@gmail.com" className="text-white hover:underline">
                  teamtechneekx@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
