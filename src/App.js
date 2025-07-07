import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">📚 Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
      </div>
      <Footer className="text-center" />
    </div>
  );
}
