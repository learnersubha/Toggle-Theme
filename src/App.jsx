import React, { useState } from 'react'

const App = () => {
  const [dark, setDark] = useState(false)

   // CSS for light mode
  const lightMode = {
    backgroundColor: "#ffffff",
    color: "#000000",
    height: "100vh",
    padding: "40px",
    textAlign: "center",
    transition: "0.3s",
  };

  // CSS for dark mode
  const darkMode = {
    backgroundColor: "#121212",
    color: "#ffffff",
    height: "100vh",
    padding: "40px",
    textAlign: "center",
    transition: "0.3s",
  };

  return (
    <div style={dark ? darkMode : lightMode}>
      <button onClick={()=>{
        setDark(!dark)
      }}>Change Theme</button>
    </div>
  )
}

export default App
