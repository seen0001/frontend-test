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
      {/* Header med logo og søgefunktion */}
      <header className="flex justify-between items-center px-6 py-8 bg-white shadow">
        <img className="text-xl font-bold" src="/images/dermaworld.svg"></img>
        <div className="relative w-1/3">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input id="search" type="text" placeholder="Search" className="w-full px-4 py-2 border border-maingrey rounded-full text-black" />
        </div>
      </header>

      {/* Hovedmenu */}
      <nav className="bg-white">
        <ul className="flex justify-start space-x-6 px-40 py-6">
          {["Bedingungen", "Behandlungen", "Veranstaltungen", "Werkzeuge", "Forschung und Erkenntnisse"].map((item) => (
            <li key={item} className="relative">
              <button onClick={() => setActiveMenu(activeMenu === item ? "" : item)} onKeyDown={(e) => handleKeyDown(e, item, setActiveMenu)} aria-haspopup={item === "Behandlungen" ? "true" : undefined} aria-expanded={activeMenu === item} className="text-gray-700 hover:text-black focus:outline-none">
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Undermenu til "Behandlungen" */}
        {activeMenu === "Behandlungen" && (
          <div className="bg-maingrey border-t">
            <ul className="flex justify-start space-x-4 px-40 py-6">
              {["Adtralza", "Diavonex", "Diavobet", "Enstilar", "Fucidin", "Kyntheum", "Protopic", "Skinoren", "Tralokinumab", "Xamiol"].map((subItem) => (
                <li key={subItem}>
                  <button onClick={() => setActiveSubmenu(activeSubmenu === subItem ? "" : subItem)} onKeyDown={(e) => handleKeyDown(e, subItem, setActiveSubmenu)} className={`text-mainblue hover:text-black focus:outline-none ${activeSubmenu === subItem ? "font-bold underline" : ""}`}>
                    {subItem}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Undermenu til "Adtralza" */}
        {activeSubmenu === "Adtralza" && (
          <div className="bg-mainblue border-t">
            <ul className="flex justify-start space-x-4 px-40 py-6">
              {["Overview", "Mode of Action", "Efficacy", "Quality of Life", "Safety", "Dosing", "News", "Technical Information"].map((thirdLevelItem) => (
                <li key={thirdLevelItem}>
                  <a href="#" className="text-white hover:text-black focus:underline focus:outline-none">
                    {thirdLevelItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
