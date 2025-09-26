import React from 'react'

const Inputs = () => {
  return (
    <div>
      <div className='md:grid grid-cols-2 p-6 gap-4 items-center '>
        <div className=' rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl'>
        <div className='flex items-center gap-2 '>
          <i class="ri-upload-cloud-2-line text-indigo-300 text-2xl"></i>
          <h2 className='text-xl text-white font-semibold tracking-tight font-sans'>Upload Your Resume</h2>
        </div>
        <p className='mt-4 text-sm pl-4 text-slate-300 font-sans'>Drag and drop your resume or choose a file. Supported formats: PDF, DOC, DOCX</p>

        <div className='flex flex-col items-center rounded-2xl m-4  bg-white/5 ring-1 ring-white/10 border border-dashed border-slate-200/20 px-6 py-10 transition hover:border-indigo-400/30 hover:bg-white/10'>
        <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-white/10'>
          <i class="ri-file-upload-line text-3xl text-indigo-300"></i>
        </div>
        <p className='text-sm mt-3 text-slate-200 font-sans'>Drop your file here</p>
        <p className=' text-slate-400 font-sans'>or</p>
        <button className='mt-2 inline-flex items-center gap-2 rounded-lg bg-white/5 p-3 font-medium text-slate-200 hover:text-white hover:bg-white/10 ring-1 ring-white/10 '>
          <i class="ri-folder-open-fill"></i>
          Browse files
        </button>
        </div>
        </div>

        <div className=' rounded-xl md:mt-0 mt-6 p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl'>
          <div className='flex items-center gap-2'>
            <i class="ri-briefcase-3-line text-2xl text-indigo-300"></i>
            <h2 className='text-xl text-white font-semibold font-sans tracking-tight'>Job Description</h2>
          </div>
          <p className='mt-2 text-sm font-sans text-slate-300'>Paste the role details to align your resume with critical requirements.</p>
          <div className='mt-5'>
            <label
            className='text-slate-200 font-medium font-sans'
             htmlFor="jobDescription">
              Role Details
            </label>
            <textarea 
            name="jobDescription" id="jobDescription" placeholder='Past the job description here...'
            className='placeholder-slate-400 bg-white/5 w-full h-50 pt-3 pr-4 pb-3 pl-4 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 text-slate-200 block resize-none rounded-xs'
            >
            </textarea>
          </div>

          <div className='flex flex-col md:flex-row md:justify-between items-center justify-center '>
          <div className='flex mt-2 items-center justify-center text-xs gap-2 text-slate-400'>
            <i class="ri-shield-check-fill text-green-600"></i>
            <span>Data stays on your device until you submit.</span>
          </div>

          
            <button className='group mt-3 inline-flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 ring-1 ring-white/10 transition'>
              <i class="ri-flashlight-line text-indigo-300 group-hover:text-indigo-200"></i>
              Instant Analyze
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inputs