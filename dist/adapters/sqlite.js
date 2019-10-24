"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function SQLiteAdapter(path, options) {
    const sequelize = new sequelize_1.Sequelize(`sqlite::${path}`);
    return { sequelize };
}
exports.default = SQLiteAdapter;
;
//# sourceMappingURL=sqlite.js.map