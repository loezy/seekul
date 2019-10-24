import { Sequelize } from 'sequelize';

export default function SQLiteAdapter(path: string, options: object) {
    const sequelize = new Sequelize(`sqlite::${path}`);
    return { sequelize };
};