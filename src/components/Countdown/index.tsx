import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
// @ts-ignore
import * as countdownStyles from './countdown.module.css'

const intervalsLocale = {
  rs: {
    days: "dana",
    hours: "sati",
    minutes: "minuta",
    seconds: "sekundi"
  },
  en: {
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds"
  }
}

const getYear = (today: Date, month: number, day: number) => {
  if ((today.getMonth() + 1) <= month && today.getDate() <= day) {
    return today.getFullYear()
  }

  return today.getFullYear() + 1
}

const Countdown = ({ month, day }) => {

  const calculateTimeLeft = () => {
    const today = new Date()
    let year = getYear(today, month, day)
    // NOTE this does not work on Safari for some reason
    // const targetDate = new Date(`${year}-${month}-${day}`)
    const targetDate = new Date(year, month - 1, day)
    
    const difference = +targetDate.getTime() - +today.getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [locale] = useState<"rs" | "en">("rs");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {intervalsLocale[locale][interval]}{" "}
      </span>
    );
  });
  return (
      <div className={countdownStyles.countdown}>
        {timerComponents.length ? timerComponents : <span><b>Srećan rođendan!!!</b></span>}
        {!timerComponents.length && <Confetti />}
      </div>
  );
}

export default Countdown