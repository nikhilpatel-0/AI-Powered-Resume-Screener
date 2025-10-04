import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Login = () => {
  const [form, setForm] = useState({email:'', password:''})
  const navigate = useNavigate()

  const onChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e)=>{
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login", {
      email: form.email,
      password: form.password

    },{withCredentials: true}
    ).then((res)=>{
      console.log(res)
      navigate("/")
    }).catch((err)=>{
      console.log(err)
    })

    console.log("login", form)
    setForm({email:'', password:''})
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 px-4">
      <div className="bg-white/10 backdrop-blur-lg ring-1 ring-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Greeting */}
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-indigo-200 mb-8">
          We're glad to see you again. Please login to continue.
        </p>

        {/* Login Form */}
        <form className="space-y-5 text-left"
          onSubmit={onSubmit}
        >
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm text-center text-indigo-200 mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-blue-400 font-medium transition"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
