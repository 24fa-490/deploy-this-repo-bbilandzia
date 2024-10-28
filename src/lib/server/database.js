import postgres from 'postgres'
import 'dotenv/config';

const PGCONNECT=process.env.PGCONNECT;
const sql = postgres(PGCONNECT, {} )

export default sql;
