export function ok(data:any){return Response.json(data)}
export function fail(message:string,status=400){return Response.json({error:message},{status})}
