import postgres from 'postgres';
const sql = postgres(process.env.PGCONNECT, {});
export default sql;
