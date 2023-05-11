const StudyProfile = ({ userData, daily, monthly, weekly }) => {
  return (
    <aside className="work study">
      <div className="icon-study">
        <img src="./images/icon-study.svg" alt="" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6> {userData[2].title} </h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1> {userData[2].timeframes.weekly.current}hrs</h1>
            <p>Previous - {userData[2].timeframes.weekly.previous}hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[2].timeframes.daily.current}hrs</h1>
            <p>Previous - {userData[2].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[2].timeframes.monthly.current}hrs</h1>
            <p>Previous - {userData[2].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default StudyProfile;
