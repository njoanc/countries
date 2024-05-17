import { useContext } from "react";
import { ThemeContext } from "./context/Themecontext";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-[#f1f0f0]"
          : "bg-very-dark-blue-(dark-mode-background)"
      } w-full md:w-[100%] flex flex-col justify-center items-center`}
    >
      <Header />
      <Search />
    </div>
  );
};

export default App;
