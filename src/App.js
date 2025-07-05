import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">📚 Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">coded by Noxolo Siya Ndlovu</footer>
    </div>
  );
}
