import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import NotFound from './pages/NotFound';
import { useState } from "react";
import { useEffect } from 'react';
import { supabase } from './supabaseClient';


function App() {
  // const [employees, setEmployees] = useState([
  //         {
  //           id: 1,
  //           name: 'John Doe',
  //           email: 'john@example.com',
  //           designation: 'Software Engineer',
  //         },
  //         {
  //           id: 2,
  //           name: 'Jane Smith',
  //           email: 'jane@example.com',
  //           designation: 'Product Manager',
  //         },
  //       ]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const { data, error } = await supabase.from('employees').select('*');
    if (error) console.error('Error fetching employees:', error);
    else setEmployees(data);
  };
  
        const deleteEmployee = (id) => {
          const updatedEmployees = employees.filter((employee) => employee.id !== id);
          setEmployees(updatedEmployees);
        }
  
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<Home employees={employees} delEmployee={deleteEmployee}  setEmployees={setEmployees}/>} />
          <Route path="/add" element={<AddEmployee  employees={employees} setEmployees={setEmployees}/>} />
          <Route path="/edit/:id" element={<EditEmployee employees={employees} setEmployees={setEmployees} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

