import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./Theme";
import './App.css'
function App() {
  const { theme } = useContext( ThemeContext );

  return (
    <div className={`App ${theme} pt-[10px]`}>
      <Navbar />
    </div>
  );
}

export default App;
