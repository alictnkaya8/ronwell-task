import dotenv from "dotenv";
import { bool, cleanEnv, host, port, str } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
    DATABASE_USERNAME: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_NAME: str(),
    DATABASE_HOST: host(),
    DATABASE_PORT: port(),
    SYNC: bool(),
    JWT_SECRET: str(),
});
