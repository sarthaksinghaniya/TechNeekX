'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Scale, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
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
            <Scale size={14} />
            <span>Community Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111318] tracking-tight leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-[#626873] text-sm sm:text-base">
            Effective Date: January 1, 2026 | Last Updated: October 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#626873]">
          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#111318] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing the website (<code className="text-[#0062FF] text-xs bg-[#F7F8FA] border border-[#DDE1E6] px-2 py-0.5 rounded font-mono">teamtechneekx.netlify.app</code>), applying for community membership, or participating in hackathons, workshops, and open-source initiatives organized by <strong className="text-[#111318]">TechNeekX</strong> (&ldquo;TNX&rdquo;), you acknowledge and agree to be bound by these Terms and Conditions.
            </p>
            <p className="mt-3">
              If you do not agree with any part of these terms, please discontinue access to our platform and programs.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">2. Community Code of Conduct</h2>
            <p>
              TechNeekX is built on peer collaboration, hands-on engineering, and mutual respect. All members, contributors, and applicants agree to uphold the following standards:
            </p>
            <ul className="space-y-3 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Integrity:</strong> Submit only original code, genuine hackathon submissions, and truthful academic or technical credentials.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Respect &amp; Inclusivity:</strong> Maintain a constructive, harassment-free environment across all channels (WhatsApp, Discord, GitHub, and in-person hackathons).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Constructive Collaboration:</strong> Support fellow student builders, share knowledge, and respect project deadlines during collaborative sprints.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">3. Intellectual Property Rights</h2>
            <p>
              We believe student builders should own what they create:
            </p>
            <ul className="space-y-3 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Student Ownership:</strong> Individual developers and hackathon teams retain full intellectual property ownership of the software, models, and code they build, subject to applicable open-source licenses chosen by the team.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Showcase License:</strong> By publishing or submitting a project through TechNeekX, you grant us a non-exclusive license to feature the project title, screenshots, demos, and contributor names in our portfolio and social channels.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-[#0062FF] mt-1 flex-shrink-0" />
                <span><strong className="text-[#111318]">Brand Assets:</strong> The TechNeekX name, TNX insignia, and site assets are protected branding of TechNeekX Innovation Hub.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">4. Hackathons &amp; Events Participation</h2>
            <p>
              Participation in national hackathons (Smart India Hackathon, internal sprints, university partner events) coordinated under TechNeekX requires adherence to host venue rules, organizer terms (e.g. Unstop, Devfolio), and team commitments. TechNeekX is not liable for schedule alterations or rule enforcement by independent third-party event organizers.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">5. Disclaimers &amp; Limitation of Liability</h2>
            <div className="bg-[#F7F8FA] border border-[#DDE1E6] rounded-xl p-5 flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-[#626873] text-sm leading-relaxed">
                The TechNeekX website, software templates, and community resources are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. TechNeekX does not guarantee that the site or any hosted open-source code will be error-free or uninterrupted.
              </p>
            </div>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#111318]">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-[#111318]">Lucknow, Uttar Pradesh, India</strong>.
            </p>
          </section>

          <section className="bg-white border border-[#DDE1E6] rounded-2xl p-6 sm:p-8 shadow-sm mt-12">
            <h2 className="text-xl font-bold text-[#111318] mb-4">7. Contact &amp; Questions</h2>
            <p className="text-sm text-[#626873] mb-4">
              For any legal or community conduct inquiries, reach out to our team:
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
