import { useEffect, useState } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    darkMode ? setIsDark(true) : setIsDark(false);
    console.log(darkMode);
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="dark:bg-slate-900">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
