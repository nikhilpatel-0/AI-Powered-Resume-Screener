import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=' text-gray-300 py-10 border-t border-indigo-700 pt-8 mt-4'>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 ">
            
            {/* Brand Info */}
            <div>
            <h2 className="text-white text-xl font-semibold mb-3">
                AI Resume Screener
            </h2>
            <p className="text-sm leading-relaxed">
                Empower your hiring process with AI. Analyze resumes, match them
                with job descriptions, and get instant insights in seconds.
            </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-sm">
                    <li className='flex gap-1'><i className="ri-reactjs-line text-sky-400"></i> React.js</li>
                    <li className='flex gap-1'><i className="ri-nodejs-line text-green-500"></i>Node.js</li>
                    <li className='flex gap-1'><i className="ri-gemini-line text-yellow-400"></i>Gemini API</li>
                    <li className='flex gap-1'><i className="ri-database-line text-emerald-400"></i>MongoDB</li>
                    <li className='flex gap-1'><i className="ri-tailwind-css-fill text-cyan-400"></i>Tailwind CSS</li>
                </ul>
            </div>


            {/* Contact */}
            <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="flex gap-1 items-center text-sm">
                <i className="ri-mail-line text-indigo-400"></i>
                nikhilraajpatel@gmail.com
            </p>
            <p className="flex gap-1 items-center text-sm">
                <i className="ri-global-line text-indigo-400"></i>
                India
            </p>
            </div>

            {/* Social Links */}
            <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-sm md:flex-col">
                <a href="https://www.linkedin.com/in/nikhil-patel-dev/" 
                    target='_blank'
                    rel='noopener noreferrer'
                    className="flex gap-1 hover:text-white transition"
                >
                    <i className="ri-linkedin-box-fill text-blue-400"></i>
                    LinkedIn
                </a>
                <a href="https://github.com/nikhilpatel-0" target='_blank' rel='noopener noreferrer' className="flex gap-1 hover:text-white transition">
                    <i className="ri-github-fill text-gray-300"></i>
                    GitHub
                </a>
                <a href="#" className="flex gap-1 hover:text-white transition">
                    <i className="ri-twitter-x-line text-black"></i>
                    Twitter(X)
                </a>
                <a href="#" className="flex gap-1 hover:text-white transition">
                    <i className="ri-instagram-fill text-pink-500"></i>
                    Instagram
                </a>
            </div>
            </div>
        </div>

        <div className="text-center border-t border-indigo-700 mt-8 pt-4 text-xs text-gray-400">
            © 2025 <span className="text-indigo-300 font-medium">AI Resume Screener</span> — 
            Designed & Developed by <span className="text-blue-300 font-semibold">
                Nikhil Raj Patel
            </span>
        </div>
        </div>
    </div>
  )
}

export default Footer