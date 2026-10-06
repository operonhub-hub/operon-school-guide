import React from 'react';
import {
  Compass,
  School,
  GraduationCap,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Users,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import operonLogo from '@/assets/operon-logo.png';
import { documentationNavigationConfig } from '../../config/documentation/navigation.config';

const sectionIcons: Record<string, React.ElementType> = {
  'getting-started': Compass,
  'school-setup': School,
  'academic-management': GraduationCap,
  finance: CreditCard,
  communication: MessageSquare,
  administration: ShieldCheck,
};

export const OverviewPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* 1. Welcoming Hero (Calm, School-Friendly, No Dark Tech Gradient) */}
      <section className="relative overflow-hidden rounded-3xl border border-operon-100 bg-gradient-to-b from-operon-50/70 via-white to-slate-50/40 p-8 sm:p-10 lg:p-12 shadow-xs">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-operon-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-operon-800 ring-1 ring-operon-600/10">
            <img src={operonLogo} alt="" className="h-3.5 w-auto object-contain" />
            <span>Operon School Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Welcome to Operon
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to confidently manage your school, support your students, and get the most out of Operon.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Link
              to="/docs/registration/register-your-school"
              className="inline-flex items-center gap-2 rounded-xl bg-operon-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-operon-700 transition-all duration-150"
            >
              <span>Start Here</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#all-guides"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-150"
            >
              <BookOpen className="h-4 w-4 text-slate-500" />
              <span>Browse All Guides</span>
            </a>
          </div>
        </div>

        {/* Subtle decorative background watermark */}
        <div className="absolute right-4 -bottom-10 opacity-[0.07] pointer-events-none hidden md:block">
          <img src={operonLogo} alt="" className="h-64 sm:h-72 w-auto object-contain select-none" />
        </div>
      </section>

      {/* 2. New User Callout Recommendation */}
      <section className="rounded-2xl border border-operon-200/80 bg-operon-50/50 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xs">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-operon-600 text-white text-xs font-bold">
              ★
            </span>
            <h3 className="text-base font-bold text-slate-900">
              New to Operon?
            </h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Start with our simple school setup guide and learn the essential steps before you begin managing your school.
          </p>
        </div>

        <Link
          to="/docs/registration/register-your-school"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-operon-300 px-4 py-2.5 text-xs font-bold text-operon-700 hover:bg-operon-600 hover:text-white hover:border-operon-600 shadow-2xs transition-all duration-150 shrink-0"
        >
          <span>Start School Setup</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* 3. "What Would You Like to Do?" Audience & Task Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What would you like to do?
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Choose what you need help with and we'll take you to the right guides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Teacher */}
          <Link
            to="/docs/academic-management"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 mb-4 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                I'm a Teacher
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn how to manage attendance, assessments, scores, students and report cards.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>View Teacher Guides</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 2: Administrator */}
          <Link
            to="/docs/school-setup"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 mb-4 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                <School className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                I'm a School Administrator
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Set up your school, manage staff, academic sessions, classes and school settings.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>View Admin Guides</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 3: Student Management */}
          <Link
            to="/docs/academic-management/students"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 mb-4 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                I'm Managing Students
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find guides for student records, enrolment, classes and academic information.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>View Student Guides</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 4: Payments / Finance */}
          <Link
            to="/docs/finance"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 mb-4 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                I'm Managing Payments
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn how to configure payments and manage school collections.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>View Finance Guides</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Card 5: Communication */}
          <Link
            to="/docs/communication"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-200 sm:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 mb-4 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                I'm Communicating With Parents
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn how to use Operon's communication tools to stay connected with parents.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>View Communication Guides</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. "Explore All Guides" Complete Handbook Catalogue */}
      <section id="all-guides" className="space-y-6 scroll-mt-24">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Explore all guides
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Step-by-step help for every part of your Operon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {documentationNavigationConfig.sections.map((section) => {
            const Icon = sectionIcons[section.id] || School;
            const guideCount = section.items.length;

            return (
              <div
                key={section.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 font-mono">
                      {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {section.description}
                  </p>

                  {/* Individual Guides List */}
                  <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.path}
                          className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:bg-operon-50/70 hover:text-operon-700 transition"
                        >
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-operon-600 transition-colors" />
                            <span>{item.title}</span>
                          </span>
                          {item.badge ? (
                            <span className="rounded bg-operon-100 px-1.5 py-0.2 text-[10px] font-semibold text-operon-800">
                              {item.badge}
                            </span>
                          ) : (
                            <ArrowRight className="h-3 w-3 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Helpful Support & Assistance Section */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 text-center space-y-3">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-operon-100 text-operon-700">
          <HelpCircle className="h-5 w-5" />
        </div>
        <h3 className="text-base font-bold text-slate-900">
          Need help finding something?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Use the search bar at the top of any page (<kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">⌘K</kbd>) to quickly find guides, setup steps, and answers.
        </p>
      </section>
    </div>
  );
};

export default OverviewPage;
