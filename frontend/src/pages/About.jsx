import React from 'react'

const About = () => {
  return (
    <div className='py-20 md:py-30'>
      <div className='p-6 md:px-20 grid grid-cols-1 md:grid-cols-2  gap-12'>
        <div>
          <h1 className='text-5xl font-bold text-white leading-tight'
          >
            Empowering Careers with Intelligent Resume Insights
          </h1>
          <p className='text-xl md:text-2xl text-slate-300 mt-8 font-sans leading-relaxed'>
            HireSense uses advanced AI to analyze your resume against job descriptions, helping you improve and get noticed faster.
          </p>
        </div>
        <div className='h-[400px] rounded-2xl overflow-hidden shadow-2xl'>
          <img
          className='w-full h-full object-cover'
          src="about.webp" alt="resume-img" />
        </div>
      </div>

      <div className='px-6 pt-20 md:p-20'>
        <div className='text-center'>
          <h2 className='text-4xl text-white font-bold mb-4'>
            How It Works
          </h2>
          <p className='text-lg text-slate-300 px-3'>
            Get AI-powered resume insights in three simple steps
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='flex flex-col gap-6 rounded-xl p-8 text-center bg-white/5 ring-1 ring-white/10 mt-10 backdrop-blur-lg hover:shadow-2xl'>
            <div className='w-16 h-16 rounded-full flex mb-6 items-center justify-center bg-indigo-500/40 text-white mx-auto'>
              <i className="ri-upload-2-line text-3xl"></i>
            </div>
            <div className='text-5xl font-bold text-white mb-4'>
              01
            </div>
            <h3 className='text-xl font-semibold text-white mb-3'>Upload Your Resume</h3>
            <p className='text-slate-300'>Simply upload your resume in PDF, DOCX format</p>
          </div>
          <div className='flex flex-col gap-6 rounded-xl p-8 text-center bg-white/5 ring-1 ring-white/10 mt-10 backdrop-blur-lg hover:shadow-2xl'>
            <div className='w-16 h-16 rounded-full flex mb-6 items-center justify-center bg-indigo-500/40 text-white mx-auto'>
              <i className="ri-file-copy-2-line text-3xl"></i>
            </div>
            <div className='text-5xl font-bold text-white mb-4'>
              02
            </div>
            <h3 className='text-xl font-semibold text-white mb-3'>Paste Job Description</h3>
            <p className='text-slate-300'>Add the job description you're targeting for personalized analysis</p>
          </div>
          <div className='flex flex-col gap-6 rounded-xl p-8 text-center bg-white/5 ring-1 ring-white/10 mt-10 backdrop-blur-lg hover:shadow-2xl'>
            <div className='w-16 h-16 rounded-full flex mb-6 items-center justify-center bg-indigo-500/40 text-white mx-auto'>
              <i className="ri-ai-generate-2 text-3xl"></i>
            </div>
            <div className='text-5xl font-bold text-white mb-4'>
              03
            </div>
            <h3 className='text-xl font-semibold text-white mb-3'>Get AI Insights</h3>
            <p className='text-slate-300'>Receive detailed suggestions and match scores instantly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About