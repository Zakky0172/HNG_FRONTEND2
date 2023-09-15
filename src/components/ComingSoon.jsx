import React, { useState, useEffect } from "react";

function ComingSoon() {
  const targetDate = new Date("2023-10-06T00:00:00").getTime();

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen min-w-[300px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-4">
          We are working hard to bring this page to live.
        </p>
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          Check back in
        </div>
        <div className="text-3xl font-bold text-blue-600">
          {remainingTime.days}d {remainingTime.hours}h {remainingTime.minutes}m{" "}
          {remainingTime.seconds}s
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
