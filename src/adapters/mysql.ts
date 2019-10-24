import { Sequelize, ModelAttributes, Model } from 'sequelize';
import { ModelDefenition } from '../lib/defenition';
import { Options } from 'sequelize';
import mysql2 from 'mysql2';

/**
 * Executes the real define method and returns a Model
 * @param {ModelDefenition} model
 * @param {Sequelize} sequelize
 */
function defineModel(model: ModelDefenition, sequelize: Sequelize): typeof Model {
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
function createModelAttributes(model: ModelDefenition): ModelAttributes {
    if (model.name == undefined || model.define == undefined) {
        throw new Error(`Missng the model name and or define`);
    }

    let defenition: ModelAttributes = {};
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

export default function MySQLAdapter(dbname: string, user: string, pass: string, options: Options) {
    if (options.dialect === 'mysql') {
        options.dialectModule = mysql2;
    }

    const sequelize = new Sequelize(dbname, user, pass, options);
    const define = (model: ModelDefenition) => {
        return defineModel(model, sequelize);
    };
    return { sequelize, define };
};