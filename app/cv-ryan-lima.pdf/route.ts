export function GET() {
  return Response.redirect(new URL("/cv", "http://localhost"), 307);
}
