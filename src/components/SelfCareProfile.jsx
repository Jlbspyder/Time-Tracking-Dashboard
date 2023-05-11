const SelfCareProfile = ({ userData, daily, monthly, weekly }) => {
  return (
    <aside className=" work self-care">
      <div className="icon-care">
        <img src="./images/icon-self-care.svg" alt="" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6>{userData[5].title}</h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1>{userData[5].timeframes.weekly.current}hrs</h1>
            <p>Previous - {userData[5].timeframes.weekly.previous}hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[5].timeframes.daily.current}hrs</h1>
            <p>Previous -{userData[5].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[5].timeframes.monthly.current}hrs</h1>
            <p>Previous -{userData[5].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SelfCareProfile;
