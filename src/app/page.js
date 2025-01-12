"use client";

import MultiStepForm from "@/Components/MultiStepForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import useFunctions from "@/Hooks/useFunctions";

export default function Home() {
  // import from useFunctions file
  const { isDarkMode, toggleDarkMode } = useFunctions();

  // Handle Portfolio by Md. Omar Faruk
  const handlePortfolioClick = () => {
    window.open("https://dev-omarfaruk.netlify.app/", "_blank");
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <header className="p-4 flex justify-between items-center sticky top-0 z-10 shadow-md bg-gray-100 dark:bg-gray-800">
          <h3
            className="text-lg font-bold cursor-pointer"
            onClick={handlePortfolioClick}
          >
            Multi Step Form Assignment by Omar Faruk
          </h3>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-blue-500 text-white rounded-full dark:bg-blue-700"
            aria-label="Toggle dark mode"
          >
            <FontAwesomeIcon icon={isDarkMode ? faLightbulb : faMoon} />
          </button>
        </header>
        <main className="">
          <MultiStepForm />
        </main>
      </div>
    </>
  );
}
