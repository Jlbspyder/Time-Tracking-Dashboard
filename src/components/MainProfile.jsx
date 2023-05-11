import { useState } from "react";

const MainProfile = ({
  setDaily,
  setWeekly,
  setMonthly,
  dayActive,
  setDayActive,
  weekActive,
  setWeekActive,
  monthActive,
  setMonthActive,
}) => {
  const dayView = (e) => {
    e.preventDefault();
    setDaily(true);
    setWeekly(false);
    setMonthly(false);
    setDayActive(true);
    setMonthActive(false);
    setWeekActive(false);
  };
  const weekView = (e) => {
    e.preventDefault();
    setDaily(false);
    setWeekly(true);
    setMonthly(false);
    setDayActive(false);
    setWeekActive(true);
    setMonthActive(false);
  };
  const monthView = (e) => {
    e.preventDefault();
    setDaily(false);
    setWeekly(false);
    setMonthly(true);
    setDayActive(false);
    setWeekActive(false);
    setMonthActive(true);
  };
  return (
    <article className="description">
      <div className="container">
        <div className="main">
          <div className="details">
            <img
              src="./images/image-jeremy.png"
              alt="image"
              className="avatar"
            />
            <div className="report">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="information">
            <h6>
              <a
                href=""
                onClick={dayView}
                className={`link ${dayActive ? "active" : ""}`}
              >
                Daily
              </a>
            </h6>
            <h6>
              <a
                href=""
                onClick={weekView}
                className={`link ${weekActive ? "active" : ""}`}
              >
                Weekly
              </a>
            </h6>
            <h6>
              <a
                href=""
                onClick={monthView}
                className={`link ${monthActive ? "active" : ""}`}
              >
                Monthly
              </a>
            </h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MainProfile;
