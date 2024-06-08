import { DataSource } from "typeorm";
import { env } from "../env";
import migration from "./migration";

export const DatabaseConnection = new DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: migration,
  synchronize: env.SYNC,
  logging: ["query", "error"],
  migrations: [],
  subscribers: [],
});
