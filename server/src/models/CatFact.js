import { DataTypes } from "sequelize";
import db from "../config/database.js";

const CatFact = db.define(
  "CatFact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "cat_facts",
  }
);

(async () => {
  await CatFact.sync();
})();

export default CatFact;
