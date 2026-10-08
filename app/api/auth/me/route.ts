import {currentUser} from '@/lib/auth';export async function GET(){try{const u=await currentUser();return Response.json({user:u})}catch{return Response.json({user:null})}}
