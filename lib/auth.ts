import {cookies} from 'next/headers';
import {query} from './db';
export async function currentUser(){const id=cookies().get('vnlibrary_user')?.value;if(!id)return null;const rows=await query<any>('SELECT id,name,email,role,status FROM users WHERE id=? AND status="ACTIVE" LIMIT 1',[id]);return rows[0]||null;}
export function requireAdmin(user:any){return user && (user.role==='ADMIN'||user.role==='LIBRARIAN');}
