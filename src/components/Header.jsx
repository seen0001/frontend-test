"use client";

import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const handleKeyDown = (event, menuName, setActiveFunction) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveFunction((prev) => (prev === menuName ? "" : menuName));
    }
  };

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto flex justify-between py-8">
          <img className="text-xl font-bold" src="/images/dermaworld.svg" alt="DERMA World logo saying: DERMA World By LEO Pharma."></img>
          <div className="relative w-1/3">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input id="search" type="text" placeholder="Search" className="w-full px-4 py-2 border border-maingrey rounded-full text-black" />
          </div>
        </div>
      </header>

      {/* Hovedmenu */}
      <nav className="bg-white">
        <div className="container mx-auto">
          <ul role="menu" aria-label="Main navigation" className="flex justify-start space-x-6 py-6">
            {["Bedingungen", "Behandlungen", "Veranstaltungen", "Werkzeuge", "Forschung und Erkenntnisse"].map((item) => (
              <li key={item} className="relative">
                <button onClick={() => setActiveMenu(activeMenu === item ? "" : item)} onKeyDown={(e) => handleKeyDown(e, item, setActiveMenu)} aria-haspopup={item === "Behandlungen" ? "true" : undefined} aria-expanded={activeMenu === item} className="focus:underline focus:outline-none text-gray-700 hover:text-black">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Undermenu til "Behandlungen" */}
        {activeMenu === "Behandlungen" && (
          <div className="bg-maingrey border-t">
            <div className="container mx-auto">
              <ul className="flex justify-start space-x-4 py-6">
                {["Adtralza", "Diavonex", "Diavobet", "Enstilar", "Fucidin", "Kyntheum", "Protopic", "Skinoren", "Tralokinumab", "Xamiol"].map((subItem) => (
                  <li key={subItem}>
                    <button onClick={() => setActiveSubmenu(activeSubmenu === subItem ? "" : subItem)} onKeyDown={(e) => handleKeyDown(e, subItem, setActiveSubmenu)} className={`focus:underline focus:outline-none text-mainblue hover:text-black ${activeSubmenu === subItem ? "font-bold underline" : ""}`}>
                      {subItem}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Undermenu til "Adtralza" */}
        {activeSubmenu === "Adtralza" && (
          <div className="bg-mainblue border-t">
            <div className="container mx-auto">
              <ul className="flex justify-start space-x-4 py-6">
                {["Overview", "Mode of Action", "Efficacy", "Quality of Life", "Safety", "Dosing", "News", "Technical Information"].map((thirdLevelItem) => (
                  <li key={thirdLevelItem}>
                    <a href="#" className="text-white hover:text-black focus:underline focus:outline-none">
                      {thirdLevelItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
