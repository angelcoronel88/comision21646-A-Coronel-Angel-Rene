import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_post", "root","", {
    host: "localhost",
    dialect: "mysql",
});

export const startDatabase = async () => {
    try {
      await sequelize.authenticate();
      //await sequelize.sync( { force: true});
      
      await sequelize.sync();
      console.log("La conexion se establecio exitosamente.");
    } catch (error) {
      console.error("Imposible conectarse a la base de datos:", error);
    }
};  