import { useState, useEffect } from 'react';
import Description from "./Description";
import Options from "./Options";
import Notification from "./Notification";

export default function App() {

  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbackTypes');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  });

  
  useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const handleReset = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

 
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedbackTypes.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <>
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
          <p>Total: {totalFeedback}</p>
          
          <p>Positive: {positiveFeedbackPercentage}%</p>
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
}