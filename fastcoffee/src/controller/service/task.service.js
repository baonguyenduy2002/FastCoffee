import { taskData } from "../data/task";

let taskData_temp;
let id = "T20";

//-----------------------------------------Get one Task--------------------------
export const getTask = (id) =>
	new Promise((resolve, reject) => {
		if (!taskData_temp) {
			taskData_temp = taskData;
		}

		const task = taskData_temp[id];

		if (!task) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(taskData_temp[id]), 300));
	});

//-----------------------------------------Get all Tasks--------------------------
export const getTasks = () =>
	new Promise((resolve, reject) => {
		if (!taskData && !taskData_temp) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => {
			if (!taskData_temp) {
				taskData_temp = taskData;
				resolve(Object.values(taskData_temp));
			} else {
				resolve(Object.values(taskData_temp));
			}
		}, 300);
	});

//-----------------------------------------Create new Task--------------------------
export const createTask = (data) =>
	new Promise((resolve, reject) => {
		console.log("service: ", data);
		if (!data.emId || !data.des) {
			reject(new Error("Not enough information!"));
		}
		const words = id.split("T");
		const number = parseInt(words[1]) + 1;
		id = "T" + number.toString();
		const newTask = {
			id,
			...data,
		};

		taskData_temp = { ...taskData_temp, [id]: newTask };

		setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Load Task to storage (unused)--------------------------
export const loadTasks = () =>
	new Promise((resolve, reject) => {
		if (!taskData) {
			return setTimeout(
				() => reject(new Error("Tasks not found to load!")),
				300
			);
		}
		setTimeout(() => resolve(localStorage.removeItem("tasks")));
	});

//-----------------------------------------Delete one Task--------------------------
export const removeTask = (id) =>
	new Promise((resolve, reject) => {
		const { [id]: task, ...rest } = taskData_temp;

		if (!task) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}

		taskData_temp = { ...rest };

		return setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Update one Task--------------------------
export const updateTask = (id, data) =>
	new Promise((resolve, reject) => {
		console.log("id", id);
		console.log("data", data);
		if (!taskData_temp[id]) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}
		taskData_temp[id] = { id, ...data };

		return setTimeout(() => resolve(true), 300);
	});

const taskService = {
	loadTasks,
	getTask,
	getTasks,
	createTask,
	updateTask,
	removeTask,
};
export default taskService;
