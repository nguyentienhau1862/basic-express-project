const { RequestMethod, routerBasic } = require("./base");
const tableName = "collections";

module.exports = [
	routerBasic.all(tableName),
	routerBasic.create(tableName),
	routerBasic.show(tableName),
	routerBasic.update(tableName),
	routerBasic.delete(tableName),
];