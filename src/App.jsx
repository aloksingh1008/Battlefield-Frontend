import React, { useEffect, useState } from 'react';
import Icon from './../components/Icon'; // Adjust path as needed
import {
  FaStar,
  FaAngleLeft,
  FaRegCircle,
  FaRegDotCircle,
  FaUsers
} from 'react-icons/fa';

import { fetchServerDetails } from './data/serverDetails'; // Import your data loader

const backgroundImage = './menu__background.svg';

export default function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('https://battlefield-backend-9fot.onrender.com/')
        .then(response => response.json())
        .then(data => {
          setServerData(data);
        })
        .catch(error => {
          console.error('Error fetching server details:', error);
        });
    }, 1000);

    document.title = "Battlefield 4"; 
    const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "./side-menu__game copy 2.svg";
  }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <CombinedServerBrowserPage serverData={serverData} />
    </div>
  );
}

function CombinedServerBrowserPage({ serverData }) {
  const isLoading = !serverData;

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative font-rajdhani flex" // Keep flex here
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Left Menu Section */}
      <div className="w-20 flex-shrink-0 min-h-screen relative z-10 bg-opacity-80 flex flex-col items-center py-6 space-y-8">

        <div className="absolute right-0 top-0 h-full w-[0.1px] bg-gray-600"></div>
        <div className="absolute left-0 top-[290px] h-[40px] w-[3px] bg-orange-500"></div>
        <div className="flex flex-col h-full py-6">

          {/* Top images */}
          <div className="mb-8 pt-28 flex flex-col items-center"> {/* Changed flex-wrap to flex-col here for consistent vertical stacking */}
            <div className="relative group mb-6">
              <img
                src="./side-menu__game copy.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Battlefield V
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__game copy 3.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Battlefield 1
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__game copy 2.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Battlefield 4
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__game.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Battlefield hardline
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__career.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Career
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__watch.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Watch
              </div>
            </div>
            <div className="relative group mb-6">
              <img
                src="./side-menu__news.svg"
                alt="Quit Icon"
                className="w-10 h-10"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                News
              </div>
            </div>
          </div>

          {/* This div will be pushed to the bottom */}
          <div className="mt-auto mx-auto flex flex-col items-center">
            <div className="relative group mb-6">
              <img
                src="./side-menu__help copy.svg"
                alt="Help Icon"
                className="w-5 h-5"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Help
              </div>
            </div>

            <div className="relative group mb-6">
              <img
                src="./side-menu__quit.svg"
                alt="Quit Icon"
                className="w-5 h-5"
              />
              {/* Tooltip box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3
                    px-2 py-1 bg-black text-white text-s opacity-0
                    group-hover:opacity-100 pointer-events-none whitespace-nowrap
                    select-none">
                Quit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 flex flex-col relative z-10 overflow-y-auto">
        {/* Top Navigation */}
        <div className="flex items-center text-xs text-white mb-4 text-[23px] font-rajdhani">
          <MenuItem icon={FaAngleLeft} isActive={false} direction="row" size={23} />
          <span className="ml-2">MULTIPLAYER &nbsp; / &nbsp; SERVER BROWSER &nbsp; /</span>
        </div>

        <h1 className="text-3xl mb-6 font-rajdhani text-[40px] font-semibold px-2">SERVER INFO</h1>

        {/* Server Info Section */}
        <div className="p-2 rounded-lg mb-8 mt-6">
          <h2 className="text-[35px] font-medium mb-2 tracking-wide">#1| NASA | Noobs Welcome | Conquest 40Hz</h2>
          <div className="text-sm text-white mb-4 tracking-wide flex items-start text-[20px]">
            <GermanFlag /> &nbsp;
            <span className="ml-2"> {/* Added a span for the text and some left margin */}
              CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ
            </span>
          </div>
          <div class="text-sm tracking-wide flex flex-wrap items-center text-[18px] w-full">
            <p class="inline pr-1">Server protected by The_K-50 AntiCheat. VIP !Rules, Questions, Request, Appeal, Visit us:</p>
            <a href="https://www.epg.gg" class="text-blue-400 hover:underline inline-block md:whitespace-nowrap" target="_blank" rel="noopener noreferrer">www.epg.gg</a>
            <span class="inline-block px-1">|</span>
            <span class="inline-block pr-1">Discord</span>
            <a href="https://discord.gg/3r5NK46" class="text-blue-400 hover:underline inline-block md:whitespace-nowrap" target="_blank" rel="noopener noreferrer">https://discord.gg/3r5NK46</a>
          </div>

          <div className="flex items-center space-x-1 mb-4 mt-6 flex-wrap">
            <button className="px-6 py-2 bg-transparent border border-gray-600 text-white hover:bg-gray-600 w-56 mb-2 sm:mb-2">JOIN</button>
            <button className="px-6 py-2 bg-transparent border border-gray-600 text-white hover:bg-gray-600 w-56 mb-2 sm:mb-2">SPECTATE</button>
            <button className="px-6 py-2 bg-transparent border border-gray-600 text-white hover:bg-gray-600 w-56 mb-2 sm:mb-2">JOIN AS COMMANDER</button>
            <button className="px-6 py-2 bg-transparent border border-gray-600 text-white hover:bg-gray-600 w-32 flex items-center justify-center space-x-2 mb-2 sm:mb-2">
              <Icon icon={FaStar} size={18} />
              <span>13672</span>
            </button>
          </div>

          {isLoading ? (
            <div className="mt-6 flex items-center justify-center text-white font-rajdhani">
              Loading server data...
            </div>
          ) : (
            <div className="flex justify-between items-start mb-6 w-full max-w-[24rem]">
              <div>
                <p className="text-m text-white">PLAYERS</p>
                <p className="text-3xl font-medium text-white">{serverData.status.currentPlayers}/{serverData.status.maxPlayers}</p>
              </div>
              <div>
                <p className="text-m text-white">PING</p>
                <p className="text-3xl font-medium text-white">
                  {serverData.status.pingMs} <span className="text-medium font-normal">ms</span>
                </p>
              </div>
              <div>
                <p className="text-m text-white">TICKRATE</p>
                <p className="text-3xl font-medium text-white">
                  {serverData.status.serverTickrateHz} <span className="text-3xl font-normal">Hz</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Settings and Rules Columns */}
        {!isLoading && (
          <div className="flex flex-grow rounded-lg ml-8 flex-wrap">
            <div className="w-80 pr-4 mr-10 mb-6 md:mb-0 mt-12">
              <h3 className="text-lg mb-4 ml-[12px]">SETTINGS</h3>
              <div className="space-y-2">
                {Object.entries(serverData.settings || {}).map(([key, value]) =>
                  renderSetting(key.replace(/([A-Z])/g, ' $1').toUpperCase(), value)
                )}
              </div>
            </div>

            <div className="w-80 pr-4 mr-10 mb-6 md:mb-0  mt-12">
              <h3 className="text-lg mb-4 ml-[12px]">ADVANCED</h3>
              <div className="space-y-2">
                {Object.entries(serverData.advancedSettings || {}).map(([key, value]) =>
                  renderSetting(key.replace(/([A-Z])/g, ' $1').toUpperCase(), value)
                )}
              </div>
            </div>

            <div className="w-56 pr-4  mt-12">
              <h3 className="text-lg mb-4 ml-[12px]">RULES</h3>
              <div className="space-y-2">
                {Object.entries(serverData.rules || {}).map(([key, value]) =>
                  renderRule(key.replace(/([A-Z])/g, ' $1').toUpperCase(), value)
                )}
              </div>
            </div>
          </div>
        )}

        <h2 className='text-medium font-semibold mb-4 mt-auto mt-12'>MAP ROTATION</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <img src="./browser__SI-next copy 7.svg" alt="Image 1" className="h-36 object-contain flex-shrink-0" />
          <img src="./browser__SI-next copy 8.svg" alt="Image 1" className="h-36 object-contain flex-shrink-0" />
          <img src="./browser__SI-next copy 6.svg" alt="Image 1" className="h-36 object-contain flex-shrink-0" />
          <img src="./browser__SI-next copy 2.svg" alt="Image 1" className="h-36 object-contain flex-shrink-0" />
        </div>
      </div>

      {/*Right Menu*/}
      <div className="
        w-20 flex-shrink-0 h-full // Always fixed width, don't shrink, full height
        relative z-10 bg-opacity-80 flex flex-col items-center py-4 space-y-8
      ">
        <div className="absolute right-0 top-0 h-full w-[0.1px] bg-gray-600"></div>
        <div className="flex flex-col h-full py-6">

          {/* Top images */}
          <div className="mb-8 pt-2 flex flex-col items-center"> {/* Changed flex-wrap to flex-col here for consistent vertical stacking */}
            <Icon icon={FaUsers} size={12} />
            <img src="./join.svg" alt="User Avatar" className="w-10 h-10 mb-8 mt-4" />

            <Icon icon={FaRegDotCircle} size={12} />
            <img src="./friend profile pic.svg" alt="User Avatar" className="w-10 h-10 mb-8 mt-4" />

            <Icon icon={FaRegCircle} size={12} />
            <img
              src="./image 2.svg"
              alt="User Avatar"
              className="w-10 h-10 mb-8 mt-4 opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


// Helper component for individual menu items
const MenuItem = ({ icon, text, isActive, direction = 'col', size }) => (
  <div
    className={`flex ${direction === 'row' ? 'flex-row items-center space-x-1' : 'flex-col items-center space-y-1'
      } cursor-pointer transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
      }`}
  >
    <Icon icon={icon} size={size || (direction === 'row' ? 16 : 24)} />
    <span className={`${direction === 'row' ? 'text-sm' : 'text-l font-thin'}`}>{text}</span>
  </div>
);

function GermanFlag() {
  return (
    <div className="flex flex-col w-[20px] h-[15px]">
      <div className="flex-1 bg-black"></div>
      <div className="flex-1 bg-red-500"></div>
      <div className="flex-1 bg-yellow-400"></div>
    </div>
  );
}

const renderSetting = (label, value) => (
  <div key={label} className="flex justify-between items-center border-b border-gray-600 w-80">
    <span className="text-white">&nbsp;&nbsp;&nbsp;{label}</span>
    <span className="text-white justify-left">{value} &nbsp;&nbsp;&nbsp;</span>
  </div>
);

const renderRule = (label, value) => {
  const valueColorClass = label.toLowerCase() === 'tickets' || label.toLowerCase() === 'vehicle spawn delay' ? 'text-yellow-400' : 'text-white';

  return (
    <div key={label} className="flex justify-between items-center border-b border-gray-600 w-80">
      <span className="text-white">&nbsp;&nbsp;&nbsp;{label}</span>
      <span className={`${valueColorClass} justify-left`}>{value} &nbsp;&nbsp;&nbsp;</span>
    </div>
  );
};