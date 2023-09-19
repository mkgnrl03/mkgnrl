import "./style.css";
import Toggle from "react-toggle";

export default function Navbar({ isDark, setIsDark }) {
  return (
    <nav>
      <h1>Navbar</h1>

      <Toggle
        checked={isDark}
        onChange={({ target }) => setIsDark(target.checked)}
        icons={{ checked: "🌙", unchecked: "🔆" }}
        aria-label="Dark mode toggle"
      />
    </nav>
  );
}
