import React from "react";
import Navbar from "app/components/Navbar/Navbar";
import TopNavbar from "app/components/TopNavbar/TopNavbar";
import Homepage from "app/components/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
