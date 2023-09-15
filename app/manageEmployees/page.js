export const metadata = {
  title: "Manage Employees",
  description: "CRUD FOR EMPLOYEES",
  keywords: "doctors,",
};

async function fetchEmployees() {
  const res = await fetch(`http://localhost:5232/api/Employee`);

  const json = await res.json();

  return json;
}

const ManageEmployeePage = async () => {
  const employees = await fetchEmployees();
  console.log(employees);

  return (
    <div className="flex = 1">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Employee Name</th> <th>JobID</th> <th>EmployeeID</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">
                        {employee.employeeFirstName}
                      </div>
                      <div className="text-sm opacity-50">
                        {employee.employeeLastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">
                      {employee.employee_JobDetailId}
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{employee.employeeId}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployeePage;
