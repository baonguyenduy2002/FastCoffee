import { mcpData } from "../data/mcp";

let mcps_tmp;
let id = "#1019";
//-----------------------------------------Get one MCP--------------------------
export const getMCP = (id) =>
	new Promise((resolve, reject) => {
		if (!mcps_tmp) {
			mcps_tmp = mcpData;
		}
		const mcp = mcps_tmp[id];

		if (!mcp) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(mcps_tmp[id]), 300));
	});

//-----------------------------------------Get all MCPs--------------------------
export const getMCPs = () =>
	new Promise((resolve, reject) => {
		if (!mcpData && !mcps_tmp) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => {
			if (!mcps_tmp) {
				mcps_tmp = mcpData;
				resolve(Object.values(mcps_tmp));
			} else {
				resolve(Object.values(mcps_tmp));
			}
		}, 300);
	});

//-----------------------------------------Create new MCP--------------------------
export const createMCP = (data) =>
	new Promise((resolve, reject) => {
		if (!data.area || !data.location) {
			reject(new Error("Not enough information!"));
		}
		const words = id.split("#");
		const number = parseInt(words[1]) + 1;
		id = "#" + number.toString();
		const newTask = {
			id,
			...data,
		};

		mcps_tmp = { ...mcps_tmp, [id]: newTask };

		setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Delete one MCP--------------------------
export const removeMCP = (id) =>
	new Promise((resolve, reject) => {
		const { [id]: mcp, ...rest } = mcps_tmp;

		if (!mcp) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}

		mcps_tmp = { ...rest };

		return setTimeout(() => resolve(true), 300);
	});

const mcpService = {
	getMCP,
	getMCPs,
	createMCP,
	removeMCP,
};
export default mcpService;
