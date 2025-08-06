import dotenv from "dotenv";

dotenv.config();

interface Config {
  NODE_ENV: string;
  PORT: number;
  JWT_SECRET: string;
  CORS_ORIGIN: string;
  API_URL: string;
  DATABASE_USER: string;
  DATABASE_NAME: string;
  DATABASE_PASSWORD: string;
  DATABASE_PORT: number;
  DATABASE_HOST: string;
}

const config: Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  // biome-ignore lint/style/useNumberNamespace: <explanation>
  PORT: parseInt(process.env.PORT || "3000"),
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  API_URL: process.env.API_URL || "http://localhost:3000/api",
  DATABASE_USER: process.env.DATABASE_USER || "xavier",
  DATABASE_NAME: process.env.DATABASE_NAME || "url_short",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "secretPassword",
  // biome-ignore lint/style/useNumberNamespace: <explanation>
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT || "5435"),
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
};

const requiredEnvVars = ["JWT_SECRET"];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export { config };
