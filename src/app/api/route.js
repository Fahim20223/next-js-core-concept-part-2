export const feedback = [
  {
    id: 1,
    message: "Khabar khub moja chilo",
  },
  {
    id: 2,
    message: "waiter der bebohar arro bhalo kora jai",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yahooo. API created",
  });
}
