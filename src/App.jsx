import { useState } from "react";
import data from "./data";
import WorkReport from "./components/WorkReport";
import PlayReport from "./components/PlayReport";
import StudyProfile from "./components/StudyProfile";
import ExerciseProfile from "./components/ExerciseProfile";
import SocialProfile from "./components/SocialProfile";
import SelfCareProfile from "./components/SelfCareProfile";
import MainProfile from "./components/MainProfile";
import Footer from "./components/Footer";

function App() {
  const [userData, setUserData] = useState(data);
  const [daily, setDaily] = useState(null);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(null);
  const [dayActive, setDayActive] = useState(false)
  const [weekActive, setWeekActive] = useState(true)
  const [monthActive, setMonthActive] = useState(false)
  

  return (
    <>
      <div className="grid">
        <MainProfile 
          userData={userData} 
          setWeekly={setWeekly}
          setDaily={setDaily}
          setMonthly={setMonthly}
          dayActive={dayActive}
          setDayActive={setDayActive}
          weekActive={weekActive}
          setWeekActive={setWeekActive}
          monthActive={monthActive}
          setMonthActive={setMonthActive}
          />
        <WorkReport
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <PlayReport
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <StudyProfile
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <ExerciseProfile
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <SocialProfile
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
        <SelfCareProfile
          userData={userData}
          daily={daily}
          setDaily={setDaily}
          weekly={weekly}
          setWeekly={setWeekly}
          monthly={monthly}
          setMonthly={setMonthly}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
