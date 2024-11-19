import React, { useEffect, useState } from 'react'

const Countdown = () => {

  const [countdown, setCountdown] = useState(
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  );

  useEffect( () => {
    // target launch date
    const targetDate = new Date('2024-11-31T23:59:59').getTime();

    // set interval
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if(timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown( {days, hours, minutes, seconds } )
      } else {
        clearInterval(interval)
      }
    }, 1000);

    return  () => clearInterval(interval);
  }, [])
  
  return (
    <div>
        <section className="launch">
            <p>We're launching soon</p>
            <div className="countdown">
              <p><span className="calendar-icon">{countdown.days}</span>days</p>
              <p><span className="calendar-icon">{countdown.hours}</span>hours</p>
              <p><span className="calendar-icon">{countdown.minutes}</span>minutes</p>
              <p><span className="calendar-icon">{countdown.seconds}</span>Seconds</p>
            </div>
        </section>
    </div>
  )
}

export default Countdown;