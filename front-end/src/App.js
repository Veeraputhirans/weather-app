import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Home from "./Components/Home"
import "./App.css"; // CSS for app content

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., API call)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show Loader while loading
      ) : (
        <Home/>
      )}
    </div>
  );
};

export default App;
