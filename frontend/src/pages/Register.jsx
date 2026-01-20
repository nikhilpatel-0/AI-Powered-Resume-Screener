import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";
const Register = () => {
  const [form, setForm] = useState({name: '', email: '', password: ''})
  const navigate = useNavigate()

  const onChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault()

    axios.post("https://ai-powered-resume-screener-xe66.onrender.com/api/auth/register",
      {name:form.name, email:form.email, password:form.password},
      {withCredentials:true}
    ).then((res)=>{
      console.log(res)
      navigate("/")
    }).catch((err)=>{
      console.log(err)
      const message = err.response?.data?.message || "user already exists"
      toast.error(message)
    })

    console.log("register", form)
    setForm({name: '', email: '', password: ''})
  }

  return (
    <div className="overflow-hidden h-screen">
      <button 
      onClick={ () => navigate("/")}
      className="w-16 h-16 flex items-center justify-center absolute md:pl-10 cursor-pointer"
      >
        <i className="ri-arrow-left-line text-indigo-300 text-3xl"></i>
      </button>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 px-4">
      <div className="bg-white/10 backdrop-blur-lg ring-1 ring-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Greeting */}
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Create Account ✨
        </h1>
        <p className="text-indigo-200 mb-8">
          Sign up today and start your journey with us.
        </p>

        {/* Register Form */}
        <form 
        onSubmit={onSubmit}
        className="space-y-5 text-left">
          {/* Full Name */}
          <div>
            <label className="block text-indigo-200 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              onChange={onChange}
              value={form.name}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-indigo-200 text-sm font-medium mb-2">
              Email
            </label>
            <input
              onChange={onChange}
              value={form.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-indigo-200 text-sm font-medium mb-2">
              Password
            </label>
            <input
              onChange={onChange}
              value={form.password}
              name="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 shadow-lg hover:shadow-indigo-500/30"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center text-indigo-200 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-400 hover:text-blue-400 font-medium transition"
          >
            Login
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;
