import dotenv from "dotenv"
function loadEnv() {
    dotenv.config();
}

loadEnv();

if (!process.env.MONGO_URL) {
    console.error("Please add MONGO_URL to your .env file");
    process.exit(1);
}

const serverConfig = {
    PORT: Number(process.env.PORT) || 3005,
    MONGO_URL: process.env.MONGO_URL
};

export default serverConfig;