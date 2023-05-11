import { useState } from "react";

const WorkReport = ({ userData, daily, monthly, weekly }) => {
  return (
    <aside className="work">
      <div className="icon-work">
        <img src="./images/icon-work.svg" alt="work" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6>{userData[0].title}</h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1>{userData[0].timeframes.weekly.current}hrs</h1>
            <p>Previous -{userData[0].timeframes.weekly.previous}hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[0].timeframes.daily.current}hrs</h1>
            <p>Previous -{userData[0].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[0].timeframes.monthly.current}hrs</h1>
            <p>Previous -{userData[0].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default WorkReport;
