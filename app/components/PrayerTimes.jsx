"use client";

import { useEffect, useState } from "react";

export default function PrayerTimes() {
  const [fajr, setFajr] = useState(null);
  const [maghrib, setMaghrib] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [loading, setLoading] = useState(true);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const todayKey = new Date().toDateString();

  useEffect(() => {
    const cached = localStorage.getItem("prayerTimes");

    if (cached) {
      const parsed = JSON.parse(cached);

      if (parsed.date === todayKey) {
        setFajr(parsed.fajr);
        setMaghrib(parsed.maghrib);
        startCountdown(parsed.maghrib);
        setLoading(false);
        return;
      }
    }

    fetchPrayerTimes();
  }, []);

  async function fetchPrayerTimes() {
    if (!navigator.geolocation) {
      fetchFallbackCity();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2&timezonestring=${timezone}`
          );

          const data = await res.json();

          const fajrTime = data.data.timings.Fajr;
          const maghribTime = data.data.timings.Maghrib;

          storeAndSetTimes(fajrTime, maghribTime);
        } catch {
          fetchFallbackCity();
        }
      },
      () => {
        fetchFallbackCity();
      }
    );
  }

  async function fetchFallbackCity() {
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=New York&country=US&method=2`
      );

      const data = await res.json();

      const fajrTime = data.data.timings.Fajr;
      const maghribTime = data.data.timings.Maghrib;

      storeAndSetTimes(fajrTime, maghribTime);
    } catch (error) {
      setLoading(false);
      setCountdown("Unable to load prayer times.");
    }
  }

  function storeAndSetTimes(fajrTime, maghribTime) {
    localStorage.setItem(
      "prayerTimes",
      JSON.stringify({
        date: todayKey,
        fajr: fajrTime,
        maghrib: maghribTime,
      })
    );

    setFajr(fajrTime);
    setMaghrib(maghribTime);
    startCountdown(maghribTime);
    setLoading(false);
  }

  function startCountdown(maghribTime) {
    function updateCountdown() {
      const now = new Date();
      const [hours, minutes] = maghribTime.split(":");

      const maghribDate = new Date();
      maghribDate.setHours(hours);
      maghribDate.setMinutes(minutes);
      maghribDate.setSeconds(0);

      if (now > maghribDate) {
        maghribDate.setDate(maghribDate.getDate() + 1);
      }

      const diff = maghribDate - now;

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setCountdown(`${h}h ${m}m ${s}s`);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }

  return (
    <div className="space-y-6">

      {loading && (
        <div className="flex justify-center py-10">
          <div className="w-8 h-8 border-4 border-emerald-300 border-t-emerald-600 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && (
        <>
          <div className="flex items-start gap-4">
            <span className="mt-2 w-3 h-3 bg-emerald-600 rounded-full"></span>
            <div>
              <h2 className="font-semibold text-emerald-800 text-lg">
                Suhoor Ends (Fajr)
              </h2>
              <p className="text-gray-600">{fajr}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-2 w-3 h-3 bg-emerald-600 rounded-full"></span>
            <div>
              <h2 className="font-semibold text-emerald-800 text-lg">
                Iftar (Maghrib)
              </h2>
              <p className="text-gray-600">{maghrib}</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
            <h3 className="text-emerald-900 font-semibold text-lg mb-3">
              Countdown to Iftar
            </h3>
            <p className="text-2xl font-bold text-emerald-800">
              {countdown}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
