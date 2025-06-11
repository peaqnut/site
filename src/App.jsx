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
          <Wave fill='#fb6376'
          paused={false}
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}
          options={{
            height: 300,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
        />
        
      <div class="text-center mt-35">
        <div>
          <h2 class="text-7xl font-fredoka red">Peaq</h2>
          <h3 class="text-2xl font-fredoka mt-1 red">made this site in free time</h3>
        </div>

        <div class="cards mt-15 flex justify-center space-x-4">
          <a href="https://discord.gg/cfj2JfGQbk">
            <button type='primary' class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={discordIcon} color='#fb6376' class="size-10"/>
            </button>
          </a>
          <a href="https://x.com/Peanut_500">
            <button class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={twitterIcon} color='#fb6376' class="size-10"/>
            </button>
          </a>
          <a href="https://peaq.itch.io/">
            <button class="bg-[#ffffff] hover:bg-[#eaeaea] relative size-20 flex items-center justify-center">
              <Icon icon={itchIcon} color='#fb6376' class="size-10"/>
            </button>
          </a>
        </div>

        <div class="text-center mt-0">
          <h3 class="text-2xl font-fredoka mt-1 white">other socials</h3>
        </div>

      </div>
    </div>
  )
}

export default App
