const PlayReport = ({ userData, daily, monthly, weekly }) => {
  console.log(PlayReport.userData);
  return (
    <aside className="work play">
      <div className="icon-play">
        <img src="./images/icon-play.svg" alt="play" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6>{userData[1].title}</h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1>{userData[1].timeframes.weekly.current}hrs</h1>
            <p>Previous - {userData[1].timeframes.weekly.previous}hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[1].timeframes.daily.current}hrs</h1>
            <p>Previous -{userData[1].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[1].timeframes.monthly.current}hrs</h1>
            <p>Previous -{userData[1].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default PlayReport;
