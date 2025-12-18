import dotenv from "dotenv"
function loadEnv(){
    dotenv.config();
}

loadEnv();

const serverConfig ={
    PORT :Number(process.env.PORT) || 3005
}

export default serverConfig;