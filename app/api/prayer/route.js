export async function GET() {
  try {
    const res = await fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=London&country=UK&method=2",
      { cache: "no-store" }
    );

    const data = await res.json();

    return Response.json({
      fajr: data.data.timings.Fajr,
      maghrib: data.data.timings.Maghrib,
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch prayer times" }, { status: 500 });
  }
}
