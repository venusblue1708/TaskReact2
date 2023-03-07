import React, { useState } from "react";
import "./Employer.css";
const Employer = (props) => {
  const [salary, setSalary] = useState(1);
  const [total, setTotal] = useState(1);
  const [salaryPerDay, setSalaryPerDay] = useState(1);

  return (
    <div className="render">
      <h2>Employer component</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days</th>
            <th>SalaryPerDay</th>
            <th>Countsalary</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
                <input
                  type="number"
                  //   value={item.days}
                  defaultValue={item.days}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  defaultValue={item.salaryPerDay}
                  onChange={(e) => setSalaryPerDay(e.target.value)}
                />
              </td>
              <td>
                {salary === 1 && salaryPerDay === 1
                  ? item.days * item.salaryPerDay
                  : salary * salaryPerDay}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employer;
