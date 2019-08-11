import React from "react";
import "./App.css";
import "./features/tables/TableRoot";
import TableRoot from "./features/tables/TableRoot";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <TableRoot />
      </main>
    </div>
  );
}

export default App;
