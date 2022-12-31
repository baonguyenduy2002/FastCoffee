import { employeeData } from "../data/employee";

let employeeData_temp;
let id_temp = "CO1129";
let photoURL_temp =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png";

const PHOTO_URL_BASE =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const PHOTO_URL_BASE_LENGTH = 96;
//-----------------------------------------Get one Employee--------------------------
export const getEmployee = (id) =>
	new Promise((resolve, reject) => {
		if (!employeeData_temp) {
			employeeData_temp = employeeData;
		}
		const employee = employeeData_temp[id];

		if (!employee) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(employeeData_temp[id]), 300));
	});

//-----------------------------------------Get all Employees--------------------------
export const getEmployees = () =>
	new Promise((resolve, reject) => {
		if (!employeeData && !employeeData_temp) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => {
			if (!employeeData_temp) {
				employeeData_temp = employeeData;
				resolve(Object.values(employeeData_temp));
			} else {
				resolve(Object.values(employeeData_temp));
			}
		}, 300);
	});

//-----------------------------------------Create new Employee--------------------------
export const createEmployee = (data) =>
	new Promise((resolve, reject) => {
		if (!data.name || !data.type) {
			reject(new Error("Not enough information!"));
		}

		//Id autoincrement
		const words = id_temp.split("O");
		const number = parseInt(words[1]) + 1;
		id_temp = words[0] + "O" + number.toString();

		// Get new profile photo
		const word = photoURL_temp.slice(
			PHOTO_URL_BASE_LENGTH,
			photoURL_temp.indexOf(".png")
		);
		const num = parseInt(word) + 1;
		photoURL_temp = PHOTO_URL_BASE + num.toString() + ".png";

		const newEmployee = {
			id_temp,
			...data,
			photoURL_temp,
		};

		employeeData_temp = { ...employeeData_temp, [id_temp]: newEmployee };

		setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Delete one Employee--------------------------
export const removeEmployee = (id) =>
	new Promise((resolve, reject) => {
		const { [id]: employee, ...rest } = employeeData_temp;

		if (!employee) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}

		employeeData_temp = { ...rest };

		return setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Update one Employee--------------------------
export const updateEmployee = (id, data) =>
	new Promise((resolve, reject) => {
		if (!employeeData_temp[id]) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}
		employeeData_temp[id] = { id, ...data };

		return setTimeout(() => resolve(true), 300);
	});

const employeeService = {
	getEmployee,
	getEmployees,
	createEmployee,
	removeEmployee,
	updateEmployee,
};
export default employeeService;
