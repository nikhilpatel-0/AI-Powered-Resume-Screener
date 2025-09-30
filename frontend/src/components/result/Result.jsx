import React from 'react'

const Result = () => {
  return (
    <div>
      <div className='p-6'>
        <div className='flex items-center gap-2'>
          <i className="ri-bar-chart-grouped-fill text-indigo-300 text-xl"></i>
          <h3 className='text-lg font-semibold text-white tracking-tight'>
            Analysis Results
          </h3>
        </div>

        <div className='grid mt-4 gap-6 md:grid-cols-3'>
          <div className='bg-white/5 rounded-2xl p-6 ring-1 ring-white/10'>
            <div className='flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
              <i className="ri-search-line text-indigo-300 text-xl"></i>
              <p className='text-sm font-medium text-slate-200 font-sans'>
                Match Score
              </p>
            </div>
            <span className='bg-indigo-500/10 rounded-full text-slate-200 text-xs px-2.5 py-0.5 ring-1 ring-white/10 font-sans'>
              Partial fit
            </span>
          </div>
          </div>

          <div className='bg-white/5 rounded-2xl p-6'>
            <div className='flex items-center gap-2'>
              <i className="ri-stack-line text-indigo-300 text-xl"></i>
              <p className='text-sm font-medium text-slate-200 font-sans'>
                Potential Gap Skills
              </p>
            </div>
          </div>

          <div className='bg-white/5 rounded-2xl p-6'>
            <div className='flex items-center gap-2'>
              <i className="ri-shining-line text-indigo-300 text-xl font-bold"></i>
              <p className='text-slate-200 font-medium font-sans'>
                Improvement Suggestions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result