import React from "react";
import { useNavigate } from "react-router-dom";
import AddEmployee from "../pages/AddEmployee";

export default function EmployeeTable({ employees, delEmployee, setEmployees}) {
  const navigate = useNavigate(); // useNavigate should be called inside the component

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Employee List</h3>
        <i
          className="fas fa-user-plus btn btn-success"
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(true) }
        >
          &nbsp; Add Employee
        </i>
      </div>
      <table class="table table-striped-columns">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">Edit</th>
            <th scope="col">Del</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No Employees Found
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td>
                  <i
                    className="fas fa-edit me-3"
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => handleEdit(emp.id)}
                  ></i>
                </td>
                <td>
                  <i
                    className="fas fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      delEmployee(emp.id);
                    }}
                  ></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
     <AddEmployee show={showModal}
        onClose={() => setShowModal(false)}
        setEmployees={setEmployees}
        employees={employees} />
    </>
  );
}
