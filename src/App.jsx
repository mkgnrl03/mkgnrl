import Navbar from "./components/UI/navbar/Navbar";
import Hero from "./components/UI/heropage/Hero";

import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
    </div>
  );
}

export default App;
