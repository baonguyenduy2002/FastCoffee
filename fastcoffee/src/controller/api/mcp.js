import mcpService from "../service/mcp.service";

const getMCP = (id) => mcpService.getMCP(id);
const getMCPs = () => mcpService.getMCPs();
const createMCP = (data) => mcpService.createMCP(data);
const removeMCP = (id, data) => mcpService.removeMCP(id, data);

const mcpController = {
	getMCP,
	getMCPs,
	createMCP,
	removeMCP,
};
export default mcpController;
