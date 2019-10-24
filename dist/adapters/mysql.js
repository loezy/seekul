"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql2_1 = __importDefault(require("mysql2"));
/**
 * Executes the real define method and returns a Model
 * @param {ModelDefenition} model
 * @param {Sequelize} sequelize
 */
function defineModel(model, sequelize) {
    let attributes = createModelAttributes(model);
    let Model = sequelize.define(model.name, attributes);
    if (model.sync != undefined) {
        if (model.sync == "force") {
            Model.sync({ force: true });
        }
        if (model.sync == "alter") {
            Model.sync({ alter: true });
        }
    }
    return Model;
}
/**
 * Create the model defenition that sequelize requires
 * @param {ModelDefenition} model
 * @param {Sequelize} sequelize
 */
function createModelAttributes(model) {
    if (model.name == undefined || model.define == undefined) {
        throw new Error(`Missng the model name and or define`);
    }
    let defenition = {};
    for (const key in model.define) {
        if (model.define.hasOwnProperty(key)) {
            const element = model.define[key];
            defenition[key] = { type: element };
            if (typeof element == 'object') {
                defenition[key] = element;
            }
        }
    }
    return defenition;
}
function MySQLAdapter(dbname, user, pass, options) {
    if (options.dialect === 'mysql') {
        options.dialectModule = mysql2_1.default;
    }
    const sequelize = new sequelize_1.Sequelize(dbname, user, pass, options);
    const define = (model) => {
        return defineModel(model, sequelize);
    };
    return { sequelize, define };
}
exports.default = MySQLAdapter;
;
//# sourceMappingURL=mysql.js.map