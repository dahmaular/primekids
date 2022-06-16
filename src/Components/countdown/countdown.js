import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./countdown.css";

import {ContestantContext} from "../../services/contestants-service"

export const CountdownTimer = () => {
  const {settings} = useContext(ContestantContext);
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const countdown = () => {
    const endDate = new Date('June 17, 2023 21:00:00').getTime();
    const today = new Date().getTime();

    const timeDiff = endDate - today;
    // console.log(timeDiff);

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);

    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setIsLoading(false);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <section className="containers">
          <h2>Stage 1 voting ends in: </h2>
          <div className="countdown">
           <article>
               <p>{days}</p>
               {/* <p>0</p> */}
               <h3>Days</h3>
           </article>
           <article>
               <p>{hours}</p>
               {/* <p>0</p> */}
               <h3>Hours</h3>
           </article>
           <article>
               <p>{minutes}</p>
               {/* <p>0</p> */}
               <h3>Minutes</h3>
           </article>
           <article>
               <p>{seconds}</p>
               {/* <p>0</p> */}
               <h3>Seconds</h3>
           </article>
       </div>
      
        </section>
      )}
    </>
  );
};
