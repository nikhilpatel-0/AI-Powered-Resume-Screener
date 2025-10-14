import { useState } from "react"
import Hero from "../components/Hero/Hero"
import Inputs from "../components/inputs/Inputs"
import Navbar from "../components/Navbar/Navbar"
import Result from "../components/result/Result"

const Home = () => {
  const [resultData, setResultData] = useState(null)
  return (
    <>
      <Navbar />
      <Hero />
      <Inputs setResultData={setResultData} />
      {resultData && <Result data={resultData} />}
    </>
  )
}

export default Home