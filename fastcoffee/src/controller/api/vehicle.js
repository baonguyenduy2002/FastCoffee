import vehicleService from "../service/vehicle.service";

const getVehicle = (id) => vehicleService.getVehicle(id);
const getVehicles = () => vehicleService.getVehicles();
const createVehicle = (data) => vehicleService.createVehicle(data);
const removeVehicle = (id) => vehicleService.removeVehicle(id);

const vehicleController = {
	getVehicle,
	getVehicles,
	createVehicle,
	removeVehicle,
};

export default vehicleController;
