import { mcpData } from "./mcp";

const idList = ["CH1001", "CH1002", "CH1003", "CH1004", "CH1005"];

const mcpData_Array = Object.values(mcpData);

export const vehicleData = {
	[idList[0]]: {
		id: idList[0],
		name: "Truck 1",
		capacity: 1500,
		route: [mcpData_Array[0], mcpData_Array[1]],
		status: "inactive",
		fuel: 60,
	},
	[idList[1]]: {
		id: idList[1],
		name: "Truck 2",
		capacity: 1500,
		route: [mcpData_Array[2], mcpData_Array[3]],
		status: "active",
		fuel: 95,
	},
	[idList[2]]: {
		id: idList[2],
		name: "Truck 3",
		capacity: 1500,
		route: [mcpData_Array[4], mcpData_Array[5]],
		status: "active",
		fuel: 95,
	},
	[idList[3]]: {
		id: idList[3],
		name: "Truck 4",
		capacity: 1500,
		route: [mcpData_Array[6], mcpData_Array[7]],
		status: "active",
		fuel: 95,
	},
	[idList[4]]: {
		id: idList[4],
		name: "Truck 5",
		capacity: 1500,
		route: [mcpData_Array[8], mcpData_Array[9]],
		status: "active",
		fuel: 95,
	},
};
