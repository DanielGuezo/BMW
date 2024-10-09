import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Car from "./Components/Facts/Car"


const App = () => {
  let heroData =[
    {text1: " BMW",text2:"E30"},
    {text1: "Engine",text2:"MPower"},
    {text1: "Interior",text2:"Pure Racing"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 10000);
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        setHerCount={setHeroCount}
        playStatus={playStatus}/>
        <Car/>
      
    </div>
  )
}

export default App
