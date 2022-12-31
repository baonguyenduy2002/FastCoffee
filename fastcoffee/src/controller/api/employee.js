import employeeService from "../service/employee.service";

const getEmployees = () => employeeService.getEmployees();
const getEmployee = (id) => employeeService.getEmployee(id);
const createEmployee = (data) => employeeService.createEmployee(data);
const removeEmployee = (id) => employeeService.removeEmployee(id);
const updateEmployee = (id, data) => employeeService.updateEmployee(id, data);

const employeeController = {
	getEmployees,
	getEmployee,
	createEmployee,
	removeEmployee,
	updateEmployee,
};
export default employeeController;
