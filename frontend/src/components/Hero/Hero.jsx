import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="grid pt-20 pb-10 px-5 md:flex">
        
        {/* Left Section: Heading, Description, Buttons */}
        <div>
          {/* Tagline */}
          <div className="inline-flex gap-2 text-sm text-slate-200 bg-white/5 ring-1 ring-white/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
            <i className="ri-sparkling-line"></i>
            AI-powered insights
          </div>

          {/* Main Heading */}
          <h1 className="md:text-8xl sm:text-5xl text-5xl font-semibold text-white tracking-tight mt-4 text-start">
            Optimize Your Resume with AI
          </h1>

          {/* Sub-heading / Description */}
          <p className="mt-4 md:text-3xl text-slate-300 text-base sm:text-lg font-sans text-start">
            Upload your resume and job description, and let AI suggest
            improvements.
          </p>

          {/* Action Buttons */}
          <div className="md:flex-row flex flex-col items-center gap-3 mt-5">
            {/* Primary CTA */}
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-sm font-medium text-white shadow-md shadow-indigo-900/30 ring-1 ring-white/15 hover:brightness-110 transition">
              <i className="ri-magic-line text-xl"></i>
              Get Started
            </button>

            {/* Secondary CTA */}
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 ring-1 ring-white/10 transition">
              <i className="ri-robot-2-line text-xl"></i>
              See Features
            </button>
          </div>
        </div>

        {/* Right Section: Feature Cards */}
        <div className="rounded-2xl bg-white/5 mt-6 p-6 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Resume Fit Card */}
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-slate-200">
                <i className="ri-article-line text-2xl"></i>
                <span className="text-lg font-medium font-sans">
                  Resume Fit
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400 font-sans">
                Skill coverage • Keyword match • Format score
              </p>
              {/* Progress bar */}
              <div className="mt-4 w-full h-2 rounded-full bg-white/5">
                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              </div>
            </div>

            {/* ATS Check Card */}
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-slate-200">
                <i className="ri-qr-scan-2-line text-2xl"></i>
                <span className="text-lg font-medium font-sans">
                  ATS Check
                </span>
              </div>
              {/* Checklist */}
              <ul className="mt-3 space-y-1.5 text-slate-400">
                <li className="flex items-center gap-2 font-sans">
                  <i className="ri-checkbox-circle-line text-green-600"></i>
                  Readable layout
                </li>
                <li className="flex items-center gap-2 font-sans">
                  <i className="ri-checkbox-circle-line text-green-600"></i>
                  Keywords detected
                </li>
                <li className="flex items-center gap-2 font-sans">
                  <i className="ri-error-warning-line text-yellow-600"></i>
                  Optimize sections
                </li>
              </ul>
            </div>

            {/* Tailored Suggestions Card (Full width) */}
            <div className="col-span-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-200">
                  <i className="ri-shining-line text-lg"></i>
                  <span className="text-lg">Tailored Suggestions</span>
                </div>
                <span className="text-xs text-slate-400 font-sans">
                  Live preview
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300 font-sans">
                Replace passive verbs, quantify achievements, and align with role
                requirements.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
