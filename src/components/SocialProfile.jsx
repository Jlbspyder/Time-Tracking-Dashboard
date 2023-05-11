const SocialProfile = ({ userData, daily, monthly, weekly }) => {
  return (
    <aside className="work social">
      <div className="icon-social">
        <img src="./images/icon-social.svg" alt="" className="social" />
      </div>
      <div className="container">
        <div className="heading">
          <div className="data">
            <h6> {userData[4].title} </h6>
          </div>
          <div className="menu">
            <img src="./images/icon-ellipsis.svg" alt="" className="dot" />
          </div>
        </div>
        {weekly && (
          <div className="time">
            <h1>{userData[4].timeframes.weekly.current}hrs</h1>
            <p>Previous - {userData[4].timeframes.weekly.previous} hrs</p>
          </div>
        )}
        {daily && (
          <div className="time">
            <h1>{userData[4].timeframes.daily.current}hrs</h1>
            <p>Previous -{userData[4].timeframes.daily.previous}hrs</p>
          </div>
        )}
        {monthly && (
          <div className="time">
            <h1>{userData[4].timeframes.monthly.current}hrs</h1>
            <p>Previous -{userData[4].timeframes.monthly.previous}hrs</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SocialProfile;
