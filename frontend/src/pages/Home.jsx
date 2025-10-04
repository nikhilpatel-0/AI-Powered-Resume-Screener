import Hero from "../components/Hero/Hero"
import Inputs from "../components/inputs/Inputs"
import Navbar from "../components/Navbar/Navbar"
import Result from "../components/result/Result"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Inputs />
      <Result />
    </>
  )
}

export default Home