import dotenv from "dotenv";
dotenv.config();

import { Options, Sequelize } from "sequelize";
import { UserFactory } from "./user.js";
import { TicketFactory } from "./ticket.js";

const sequelize_options: Options = {
  host: "localhost",
  dialect: "postgres",
  dialectOptions: {
    decimalNumbers: true,
    ssl: {
      require: true,
      rejectUnauthorized: false, // Important for self-signed certificates
    },
  },
};

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, sequelize_options)
  : new Sequelize(
      process.env.DB_NAME || "",
      process.env.DB_USER || "",
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, { foreignKey: "assignedUserId" });
Ticket.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });

export { sequelize, User, Ticket };
