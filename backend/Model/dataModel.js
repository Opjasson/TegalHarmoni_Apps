import { Sequelize, UUID } from "sequelize";
import db from "../Config/database.js";

const { DataTypes } = Sequelize;

const data = db.define(
    "hotel",
    {
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100],
            },
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        maps: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true,
    }
);

export default data;
