import { useRef, useState } from "react"
import Hero from "../components/Hero/Hero"
import Inputs from "../components/inputs/Inputs"
import Result from "../components/result/Result"

const Home = () => {
  const [resultData, setResultData] = useState(null)
  const inputRef = useRef(null)

  const scrollToInput = () => {
    inputRef.current?.scrollIntoView({ behavior : "smooth"})
  }
  return (
    <>
      <Hero onGetStarted={scrollToInput} />
      <Inputs ref={inputRef} setResultData={setResultData} />
      {resultData && <Result data={resultData} />}
    </>
  )
}

export default Home