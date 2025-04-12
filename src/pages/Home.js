import React from "react";
import EmployeeTable from "../components/EmployeeTable";

const Home = ({employees, delEmployee, setEmployees}) => {

  const searchEmp = (e)=> {
    e.preventDefault()
    const searchValue = document.getElementById("buttonSearch").value;
   const emp = employees.find((emp) => emp.name == searchValue)
   setEmployees([emp])
  }

   
  return (
    <>
    {/*Nav Bar*/}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="buttonSearch"
              />
              <button class="btn btn-outline-success" type="submit"  onClick={searchEmp}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

{/*Table*/}

<div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Dashboard</h2>
      </div>
      <EmployeeTable employees={employees} delEmployee={delEmployee} setEmployees={setEmployees}/>

    </div>
    
    </>
  );
};
export default Home;
