import { Sequelize } from 'sequelize';
export default function SQLiteAdapter(path: string, options: object): {
    sequelize: Sequelize;
};
