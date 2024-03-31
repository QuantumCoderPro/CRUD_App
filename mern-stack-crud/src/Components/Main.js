import React from 'react';
import { Routes, Route } from "react-router-dom";

// Import your components
import ListEmployee from '../Components/ListEmployee';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ListEmployee />} />
        <Route path="/list" element={<ListEmployee />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editemployee/:id" element={<EditEmployee />} />
      </Routes>
    </main>
  );
}

export default Main;