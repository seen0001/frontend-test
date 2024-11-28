"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleKeyDown = (event, menuName, setActiveFunction) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveFunction((prev) => (prev === menuName ? "" : menuName));
    }
  };

  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-8">
          <img className="text-xl font-bold" src="/images/dermaworld.svg" alt="DERMA World logo saying: DERMA World By LEO Pharma." />
          <div className="relative w-1/3 hidden md:block">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="flex place-items-center gap-2">
              <input id="search" type="text" placeholder="Search" className="w-full px-4 py-2 border border-maingrey rounded-full text-black" />
              <button className="text-black" type="submit">
                <IoIosSearch size={28} />
              </button>
            </div>
          </div>
          <button className="block md:hidden focus:outline-none" aria-label="Toggle burger menu" onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Hovedmenu */}
      <nav className={`${isBurgerOpen ? "block" : "hidden"} bg-white md:block`} aria-label="Main navigation">
        <div className="container mx-auto">
          <ul role="menu" className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-6 py-6">
            {["Bedingungen", "Behandlungen", "Veranstaltungen", "Werkzeuge", "Forschung und Erkenntnisse"].map((item) => (
              <li key={item} role="none">
                <button onClick={() => setActiveMenu(activeMenu === item ? "" : item)} onKeyDown={(e) => handleKeyDown(e, item, setActiveMenu)} aria-haspopup={item === "Behandlungen" ? "true" : undefined} aria-expanded={activeMenu === item} role="menuitem" className="focus:underline focus:outline-none text-black hover:text-black">
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
              <ul role="menu" className="flex flex-col space-y-2 md:flex-row md:space-x-4 py-6">
                {["Adtralza", "Diavonex", "Diavobet", "Enstilar", "Fucidin", "Kyntheum", "Protopic", "Skinoren", "Tralokinumab", "Xamiol"].map((subItem) => (
                  <li key={subItem} role="none">
                    <button onClick={() => setActiveSubmenu(activeSubmenu === subItem ? "" : subItem)} onKeyDown={(e) => handleKeyDown(e, subItem, setActiveSubmenu)} role="menuitem" className={`focus:underline focus:outline-none text-mainblue hover:text-black ${activeSubmenu === subItem ? "font-bold underline" : ""}`}>
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
              <ul role="menu" className="flex flex-col space-y-2 md:flex-row md:space-x-4 py-6">
                {["Overview", "Mode of Action", "Efficacy", "Quality of Life", "Safety", "Dosing", "News", "Technical Information"].map((thirdLevelItem) => (
                  <li key={thirdLevelItem} role="none">
                    <a href="#" role="menuitem" className="text-white hover:text-black focus:underline focus:outline-none">
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
