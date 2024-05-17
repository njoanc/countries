import { useState, useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div>
      <button
        type="button"
        className={`${
          theme === "light"
            ? "bg-very-light-gray-(light-mode-background) text-very-dark-blue-(light-mode-text)"
            : "bg-dark-blue-(dark-mode-elements)  text-white-(dark-mode-text)"
        } my-1  inline-flex justify-center rounded-md px-2 py-3 font-medium hover:bg-gray-50 focus:outline-none md:my-9`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Filter by Region"}{" "}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`${
            theme === "light"
              ? "bg-very-light-gray-(light-mode-background)  text-very-dark-blue-(light-mode-text)"
              : "bg-dark-blue-(dark-mode-elements)  text-white-(dark-mode-text)"
          } origin-top-right absolute mt-2 w-40 rounded-md`}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className="block px-4 py-3  w-full text-left"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
