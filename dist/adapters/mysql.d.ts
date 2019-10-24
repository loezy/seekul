import { Sequelize, Model } from 'sequelize';
import { ModelDefenition } from '../lib/defenition';
import { Options } from 'sequelize';
export default function MySQLAdapter(dbname: string, user: string, pass: string, options: Options): {
    sequelize: Sequelize;
    define: (model: ModelDefenition) => typeof Model;
};
