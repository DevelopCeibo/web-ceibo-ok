import mongoose from "mongoose";

const conn = {
    isConnected: false
}

export async function dbConnect() {
    if (conn.isConnected) return;
    const db = await mongoose.connect(process.env.CONECTION_STRING);
    conn.isConnected = db.connections[0].readyState;
    console.log("[DB name] -> ", db.connection.db.databaseName);
};

// https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on("connected", () => console.log("✅ [DB] connection success"))
mongoose.connection.on("error", (error) => console.log("⛔ [DB] connection error->", error))
