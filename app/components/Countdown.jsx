"use client";

import { useEffect, useState } from "react";

export default function Countdown({ maghrib }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateCountdown() {
      if (!maghrib) return;

      const now = new Date();
      const [hours, minutes] = maghrib.split(":");

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

      setTimeLeft(`${h}h ${m}m ${s}s`);
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [maghrib]);

  return (
    <p className="text-2xl font-bold text-emerald-800">
      {timeLeft || "Loading..."}
    </p>
  );
}
