import { vehicleData } from "../data/vehicle";

let vehicles_tmp;
let id = "CH1005";
//-----------------------------------------Get one MCP--------------------------
export const getVehicle = (id) =>
	new Promise((resolve, reject) => {
		if (!vehicles_tmp) {
			vehicles_tmp = vehicleData;
		}

		const vehicle = vehicles_tmp[id];

		if (!vehicle) {
			return setTimeout(
				() => reject(new Error("Vehicle data not found!")),
				300
			);
		}

		setTimeout(() => resolve(Object.values(vehicles_tmp[id]), 300));
	});

//-----------------------------------------Get all MCPs--------------------------
export const getVehicles = () =>
	new Promise((resolve, reject) => {
		if (!vehicleData && !vehicles_tmp) {
			return setTimeout(() => reject(new Error("Vehicles not found!")), 300);
		}

		setTimeout(() => {
			if (!vehicles_tmp) {
				vehicles_tmp = vehicleData;
				resolve(Object.values(vehicles_tmp));
			} else {
				resolve(Object.values(vehicles_tmp));
			}
		}, 300);
	});

//-----------------------------------------Create new MCP--------------------------
export const createVehicle = (data) =>
	new Promise((resolve, reject) => {
		if (!data.MCPs || !data.capacity) {
			reject(new Error("Not enough information!"));
		}

		const words = id.split("H");
		const number = parseInt(words[1]) + 1;
		id = "CH" + number.toString();
		const newTask = {
			id,
			...data,
		};

		vehicles_tmp = { ...vehicles_tmp, [id]: newTask };

		setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Delete one MCP--------------------------
export const removeVehicle = (id) =>
	new Promise((resolve, reject) => {
		const { [id]: mcp, ...rest } = vehicles_tmp;

		if (!mcp) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}

		vehicles_tmp = { ...rest };

		return setTimeout(() => resolve(true), 300);
	});

const vehicleService = {
	getVehicle,
	getVehicles,
	createVehicle,
	removeVehicle,
};
export default vehicleService;
