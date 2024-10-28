import postgres from 'postgres'

const PGCONNECT=process.env.PGCONNECT;
const sql = postgres(PGCONNECT, {} )

export default sql;
