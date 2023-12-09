// Import necessary dependencies from React and react-router-dom
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Competitions from "./component/Competitions";
import ResultsStats from "./component/ResultsStats";
import GeneralInfo from "./component/GeneralInfo";
import Calendar from "./component/Calendar";
import Play from "./component/Play";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

// Main component function for the entire application
function App() {
  // State hook to manage the 'name' variable in the component's state
  const [name, setName] = useState("");

  // Render the main application structure
  return (
    <>
      {/* Render the Navbar component and pass the 'setName' function */}
      <Navbar setName={setName} />

      {/* Define the routes for different sections of the application */}
      <Routes>
        {/* Home route with the Home component and pass the 'name' variable */}
        <Route path="/" element={<Home name={name} />} />

        {/* Competitions route with the Competitions component */}
        <Route path="/competitions" element={<Competitions />} />

        {/* ResultsStats route with the ResultsStats component */}
        <Route path="/resultsstats" element={<ResultsStats />} />

        {/* GeneralInfo route with the GeneralInfo component */}
        <Route path="/generalinfo" element={<GeneralInfo />} />

        {/* Calendar route with the Calendar component */}
        <Route path="/calendar" element={<Calendar />} />

        {/* Play route with the Play component */}
        <Route path="/play" element={<Play />} />

        {/* Contact route with the Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Render the Footer component at the bottom of the application */}
      <Footer />
    </>
  );
}

// Export the App component as the default export
export default App;
