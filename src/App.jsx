import React, { useState } from 'react'
import './App.css'
import { Icon, InlineIcon } from "@iconify/react";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import discordIcon from "@iconify/icons-simple-icons/discord";
import itchIcon from "@iconify/icons-simple-icons/itchdotio";
import Wave from 'react-wavify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="static flex items-center justify-center">
          <Wave fill='#FFE3A2'
          paused={false}
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', zIndex: -1}}
          options={{
            height: 300,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
        />
        
      <div className="holder" class="text-center mt-35">
        <div>
          <h2 class="text-7xl font-fredoka glow">Peaq</h2>
          <h3 class="text-2xl font-fredoka mt-1 glow">hope you like bright colors</h3>
        </div>

        <div className="cards" class="cards mt-15 flex justify-center space-x-4">
          <a href="">
            <button type='primary' class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={discordIcon} color='#FFE3A2' class="size-10"/>
            </button>
          </a>
          <a href="https://x.com/Peanut_500">
            <button class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={twitterIcon} color='#FFE3A2' class="size-10"/>
            </button>
          </a>
          <a href="https://peaq.itch.io/">
            <button class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={itchIcon} color='#FFE3A2' class="size-10"/>
            </button>
          </a>
        </div>

        <div class="text-center mt-0">
          <h3 class="text-3xl font-fredoka mt-1 white">other socials</h3>
        </div>

        <div className="element" class="text-center mt-75 grid grid-cols-3 grid-flow-col grid-rows-3 gap-4">
          <img src={"./holdphone.png"} class="w-50 row-span-3"></img>
          <div class="col-span-2 pt-12">
            <h1 class="text-5xl white font-fredoka">big text!</h1>
            <h3 class="text-3xl white font-fredoka">im heavily dissapointed in you.</h3>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default App
