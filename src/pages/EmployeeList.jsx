import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense, useState } from 'react';
// import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';

const DataTable = lazy(() => import('react-data-table-component'));

const EmployeeList = () => {
  const [search, setSearch] = useState('');

  const employees = useSelector((state) => state.employees);
  console.log(employees);

  // Create the columns of table
  // name = name of columns
  // selector = allows you to extract and display a specific property of this object in the corresponding column.
  // row = represents each individual element of the data,
  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) =>
        row.startDate ? dayjs(row.startDate).format('YYYY-MM-DD') : 'N/A',
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) =>
        row.dateOfBirth ? dayjs(row.dateOfBirth).format('YYYY-MM-DD') : 'N/A',
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className="w-[80%] mx-auto py-10">
      <h1 className="text-center font-bold text-2xl ">Current Employees</h1>
      <div className="flex justify-end my-5">
        <input
          type="text"
          placeholder="Search employees"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded"
        />
      </div>
      <Suspense fallback={<div>Loading..</div>}>
        <DataTable
          columns={columns}
          data={filteredEmployees} // Les données filtrées du store Redux
          pagination
          highlightOnHover
          responsive
          noDataComponent={'No employees found'}
        />
      </Suspense>
      <div className="flex justify-center">
        <NavLink to={'/'} className={'underline font-bold py-5 text-xl'}>
          Home
        </NavLink>
      </div>
    </section>
  );
};

export default EmployeeList;
