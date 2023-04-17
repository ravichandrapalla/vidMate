import "./App.css";
import Customers from "./components/customers";
//import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/login";
function App() {
  //const navigate = useNavigate();
  /*const [data, setData] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 3 },
    { id: 4, value: 5 },
  ]);
  const handleOnDelete = (deleteId) => {
    const updatedData = data.filter((dat) => dat.id !== deleteId);
    setData(updatedData);
  };
  const handleCounterClick = (item, val) => {
    const newData = [...data];
    const index = newData.indexOf(item);
    newData[index] = { ...item };
    newData[index].value = newData[index].value + val;
    setData(newData);
  };
  const handleReset = () => {
    const resetedData = data.map((c) => {
      c.value = 0;
      return c;
    });
    setData(resetedData);
  };*/
  return (
    <div>
      {/*<NavBar totalCounters={data.filter((c) => c.value > 0).length} />*/}
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/movies/:id" element={<MovieForm />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
      {/*<main className="container">
        <Counters
          onReset={handleReset}
          onCounterClick={handleCounterClick}
          onDelete={handleOnDelete}
          counter={data}
        />
  </main>*/}
    </div>
  );
}

export default App;
