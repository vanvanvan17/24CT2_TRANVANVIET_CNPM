import mysql, { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
let pool: Pool | undefined;
export function db(){
 if(!pool) pool=mysql.createPool({host:process.env.DB_HOST||'localhost',port:Number(process.env.DB_PORT||3306),user:process.env.DB_USER||'root',password:process.env.DB_PASSWORD||'',database:process.env.DB_NAME||'vnlibrary',waitForConnections:true,connectionLimit:10,charset:'utf8mb4'});
 return pool;
}
export async function query<T extends RowDataPacket[]=RowDataPacket[]>(sql:string, params:any[]=[]){const [rows]=await db().query<T>(sql,params);return rows;}
export async function exec(sql:string,params:any[]=[]){const [r]=await db().execute<ResultSetHeader>(sql,params);return r;}
