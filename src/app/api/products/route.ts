import db from '../../../../db.json';

export async function GET(request: Request) { // eslint-disable-line @typescript-eslint/no-unused-vars
  return new Response(JSON.stringify(db.products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}