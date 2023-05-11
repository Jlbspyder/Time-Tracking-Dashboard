const ExerciseProfile = ({ userData, daily, monthly, weekly }) => {
  return (
    <aside className="work exercise">
      <div className="icon-exercise">
        <img src="./images/icon-exercise.svg" alt="" className="gym" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6>Exercise</h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1>{userData[3].timeframes.weekly.current}hrs</h1>
            <p>Previous - {userData[3].timeframes.weekly.previous}hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[3].timeframes.daily.current}hrs</h1>
            <p>Previous -{userData[3].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[3].timeframes.monthly.current}hrs</h1>
            <p>Previous -{userData[3].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ExerciseProfile;
