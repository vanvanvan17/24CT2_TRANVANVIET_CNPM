import {cookies} from 'next/headers';export async function POST(){cookies().set('vnlibrary_user','',{httpOnly:true,sameSite:'lax',path:'/',maxAge:0});return Response.json({ok:true})}
