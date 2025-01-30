export function GET(req: Request, { params }: { params: { userId: string } }) {
  return Response.json({ status: 200, body: { userId: params.userId } });
}
