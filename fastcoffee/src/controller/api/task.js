import taskService from "../service/task.service";

const getTask = (id) => taskService.getTask(id);
const getTasks = () => taskService.getTasks();
const createTask = (data) => taskService.createTask(data);
const removeTask = (id) => taskService.removeTask(id);
const updateTask = (id, data) => taskService.updateTask(id, data);

const taskController = {
	getTask,
	getTasks,
	createTask,
	removeTask,
	updateTask,
};
export default taskController;
