
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Result = ({data}) => {
  const result = data.result
  const score = result.matchPercentage
  return (
    <div>
      <div className='p-6'>
        {/* Header */}
        <div className='flex items-center gap-2'>
          <i className="ri-bar-chart-grouped-fill text-indigo-300 text-xl"></i>
          <h3 className='text-lg font-semibold text-white tracking-tight'>
            Analysis Results
          </h3>
        </div>

        {/* Cards Grid */}
        <div className='grid mt-4 gap-6 md:grid-cols-3'>

          {/* Match Score */}
          <div className='bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 hover:ring-indigo-500/30 transition-all'>
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

            <div className='flex items-center justify-center w-full mt-10'>
              <div className='w-28 h-28'>
                <CircularProgressbar
                  value={score}
                  text={`${score}%`}
                  styles={buildStyles({
                    pathColor: '#6366f1',
                    textColor: '#ffffff',
                    trailColor: 'rgba(255,255,255,0.1)',
                    textSize: '16px',
                  })}
                />
            </div>
          </div>
          </div>

          {/* Potential Gap Skills */}
          <div className='bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 hover:ring-indigo-500/30 transition-all'>
            <div className='flex items-center gap-2 mb-3'>
              <i className="ri-stack-line text-indigo-300 text-xl"></i>
              <p className='text-sm font-medium text-slate-200 font-sans'>
                Potential Gap Skills
              </p>
            </div>
            <ol className='flex flex-col gap-3 list-decimal pl-5 text-slate-300'>
              {result.gaps.map((gap, i) => (
                <li
                className='p-3 bg-white/5 hover:bg-indigo-500/10 rounded-xl transition-all ring-1 ring-white/10 hover:ring-indigo-400/30 shadow-sm'
                key={i}
                >
                  {gap}
                </li>
              ))}
            </ol>
          </div>

          {/* Improvement Suggestions */}
          <div className='bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 hover:ring-indigo-500/30 transition-all'>
            <div className='flex items-center gap-2 mb-3'>
              <i className="ri-shining-line text-indigo-300 text-xl font-bold"></i>
              <p className='text-slate-200 font-medium font-sans'>
                Improvement Suggestions
              </p>
            </div>
            <ol className='flex flex-col gap-3 list-decimal pl-5 text-slate-300'>
              {result.improvementSuggestions.map((suggetion, i) => (
                <li 
                className='p-3 bg-white/5 hover:bg-indigo-500/10 rounded-xl transition-all ring-1 ring-white/10 hover:ring-indigo-400/30 shadow-sm'
                key={i}
                >
                  {suggetion}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Result
