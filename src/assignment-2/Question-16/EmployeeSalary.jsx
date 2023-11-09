/*

16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries.

*/
import { useState, useMemo } from "react";
const employee = [
  {
    name: "Munendra",
    salary: 24,
  },
  {
    name: "Mohit",
    salary: 20,
  },
];

const EmployeeSalary = () => {
  const [empData, setEmpData] = useState(employee);
  const avgSal = useMemo(() => {
    const salary = empData.reduce((acc, item) => acc + item.salary, 0);
    return salary / empData.length;
  }, [empData]);

  const changeData = () => {
    const updatedData = empData.map((emp) => ({
      ...emp,
      salary: emp.salary + 1000,
    }));
    setEmpData(updatedData);
  };

  return (
    <>
      <h4>
        16.Create a functional component named EmployeeSalary that displays the
        average salary of a list of employees. Define an array of employee
        objects, where each object has a name and salary property. Use the
        useMemo hook to calculate the average salary of employees. Ensure that
        the useMemo hook has a dependency on the employee data so that it
        recalculates when the employee data changes. Render the average salary
        on the screen. Include a button that, when clicked, updates the employee
        data with new salaries.
      </h4>
      <p>{avgSal}</p>
      <button onClick={changeData}>Update Salary</button>
    </>
  );
};

export default EmployeeSalary;
