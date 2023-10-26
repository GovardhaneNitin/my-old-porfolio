import React, { useState, useEffect } from "react";
import { Contact, Projects, Skills, About, Header, Footer } from "./containers";
import { CTA, Navbar, Typewriter, LoadingComponent } from "./components";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
          <Typewriter />
          <About />
          <Skills />
          <Projects />
          <CTA />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
