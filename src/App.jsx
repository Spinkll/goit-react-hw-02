import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const getInitialFeedback = () => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  };

  const [feedback, setFeedback] = useState(getInitialFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
