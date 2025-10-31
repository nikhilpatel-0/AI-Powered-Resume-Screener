import React, { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

const Inputs = ({setResultData}) => {

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("")
  const [isDragging, setIsDragging] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false)
  const [loadingJD, setLoadingJD] = useState(false)
  const [analyze, setAnalyze] = useState(false)

  // Handle file selection through input
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  // Handle delete file
  const handleDelete = () => {
    setFile(null);
    document.getElementById("input-file").value = "";
  };

  // Convert bytes into human-readable file size
  const fileSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

   //  API CALL 1: Upload Resume

   const handleResumeUpload = async () => {
    if(!file){
      console.log("No selected file")
       return toast.error("Please upload a resume first!")
    }
    console.log("selected file", file)
    try {
      setLoadingResume(true)
      const formData = new FormData()
      formData.append("resume", file)

      const res = await axios.post(
        "https://ai-powered-resume-screener-xe66.onrender.com/api/resume/upload",
        formData,
        {
          headers: {"Content-Type": "multipart/form-data"},
          withCredentials: true
        }
      )

      toast.success("Resume uploaded successfully!")
      console.log(res.data)
    } catch (err) {
      console.error(err)
      toast.error("Error uploading resume!")
    }finally{
      setLoadingResume(false)
    }
   }

   //  API CALL 2: Upload JD
   const handlejDSubmit = async () => {
    if(!jobDescription.trim()) return toast.error("Please enter a job description!")
    try {
      setLoadingJD(true)
      const res = await axios.post(
        "https://ai-powered-resume-screener-xe66.onrender.com/api/jd/upload-jd",
        {content:jobDescription},
        {withCredentials:true}
      )
      toast.success("Job description saved successfully!")
      console.log(res.data)
    } catch (err) {
      console.error(err)
      toast.error("Error uploading JD")
    }finally{
      setLoadingJD(false)
    }
   }

   //  API CALL 3: Match Resume & JD via AI
   const matchHandle = async () => {
    if(!file || !jobDescription.trim()) return toast.error("Please upload both Resume and Job Description first!")

    try {
      setAnalyze(true)
      const res = await axios.post("https://ai-powered-resume-screener-xe66.onrender.com/api/resume/compare",
        { file, jobDescription },
        {withCredentials:true}
      )
      setResultData(res.data)
    } catch (err) {
      console.error(err)
      toast.error("Error fetching AI match result")
    }finally{
      setAnalyze(false)
    }
   }

  // Drag events for highlighting the drop area
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
    setIsDragging(false);
  };

  return (
    <div>
      <div className="md:grid grid-cols-2 p-6 gap-4 items-stretch">
        
        {/* Upload Resume Section */}
        <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-2">
            <i className="ri-upload-cloud-2-line text-indigo-300 text-2xl"></i>
            <h2 className="text-xl text-white font-semibold tracking-tight font-sans">
              Upload Your Resume
            </h2>
          </div>
          <p className="mt-4 text-sm pl-4 text-slate-300 font-sans">
            Drag and drop your resume or choose a file. Supported formats: PDF,
            DOC, DOCX
          </p>

          {/* Drag & Drop Area */}
          <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center rounded-2xl m-4 bg-white/5 ring-1 ring-white/10 border border-dashed px-6 py-10 transition ${
              isDragging
                ? "border-green-400 bg-green-500/10"
                : "border-slate-200/20 hover:border-indigo-400/30 hover:bg-white/10"
            }`}
          >
            {/* Upload Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-white/10">
              <i className="ri-file-upload-line text-3xl text-indigo-300"></i>
            </div>
            <p className="text-sm mt-3 text-slate-200 font-sans">
              Drop your file here
            </p>
            <p className="text-slate-400 font-sans">or</p>

            {/* Hidden File Input */}
            <input
              onChange={handleChange}
              type="file"
              accept=".pdf, .doc, .docx"
              className="hidden"
              id="input-file"
            />

            {/* Browse Button */}
            <label
              htmlFor="input-file"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white/5 p-3 font-medium text-slate-200 hover:text-white hover:bg-white/10 ring-1 ring-white/10 cursor-pointer"
            >
              <i className="ri-folder-open-fill"></i>
              Browse files
            </label>
          </div>

          {/* File Preview */}
          {file && (
            <div className="bg-white/5 ring-1 ring-white/10 rounded-xs mt-3">
              <div className="flex items-center justify-between px-2">
                <div>
                  <p className="text-slate-200 font-medium">{file.name}</p>
                  <p className="text-slate-400 text-xs">{fileSize(file.size)}</p>
                </div>
                {/* Delete Button */}
                <button
                  onClick={handleDelete}
                  className="text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <i className="ri-delete-bin-line text-xl"></i>
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center mt-4">
            <button
             className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 ring-1 ring-white/10 transition"
             onClick={handleResumeUpload}
             disabled={loadingResume}
             >
              <i className="ri-file-upload-fill text-indigo-300 text-xl"></i>
              {loadingResume? "Uploading" : "Resume Upload"}
            </button>
          </div>
        </div>

        {/* Job Description Section */}
        <div className="rounded-xl md:mt-0 mt-6 p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur-xl flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex items-center gap-2">
            <i className="ri-briefcase-3-line text-2xl text-indigo-300"></i>
            <h2 className="text-xl text-white font-semibold font-sans tracking-tight">
              Job Description
            </h2>
          </div>
          <p className="mt-2 text-sm font-sans text-slate-300">
            Paste the role details to align your resume with critical
            requirements.
          </p>

          {/* Textarea Input */}
          <div className="mt-5">
            <label
              className="text-slate-200 font-medium font-sans"
              htmlFor="jobDescription"
            >
              Role Details
            </label>
            <textarea
              name="jobDescription"
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="placeholder-slate-400 bg-white/5 w-full h-70 pt-3 pr-4 pb-3 pl-4 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 text-slate-200 block resize-none rounded-xs"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col md:flex-row md:justify-between items-center justify-center mt-3">
            <div className="flex items-center text-xs gap-2 text-slate-400">
              <i className="ri-shield-check-fill text-green-600"></i>
              <span>Data stays on your device until you submit.</span>
            </div>

            <button className="group mt-3 md:mt-0 inline-flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 ring-1 ring-white/10 transition"
            onClick={handlejDSubmit}
            disabled={loadingJD}
            >
              <i className="ri-file-upload-fill text-indigo-300 group-hover:text-indigo-200"></i>
              {loadingJD? "Saving..." : "Upload JD"}
            </button>
          </div>
        </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 mx-auto">
          <button
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-green-500/20 ring-1 ring-white/10 rounded-2xl px-6 py-3 text-lg font-medium text-slate-200 transition-all duration-200 backdrop-blur-xl"
          onClick={matchHandle}
          disabled={analyze}
          >
            <i className="ri-flashlight-line text-2xl text-indigo-300 group-hover:text-indigo-100"></i>
            {analyze? "Analyzing..." : "Analyze"}
          </button>
          <p className="text-slate-400 text-sm mt-2 text-center">
            Ensure both resume and job description are uploaded before analyzing.
          </p>
      </div>
    </div>
  );
};

export default Inputs;
