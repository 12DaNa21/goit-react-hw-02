
export default function Feedback({ feedbackTypes }) {
    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  
    return totalFeedback > 0 ? (
      <>
        
        <p>Good: {feedbackTypes.good}</p>
        <p>Neutral: {feedbackTypes.neutral}</p>
        <p>Bad: {feedbackTypes.bad}</p>
        <p>Total: {totalFeedback}</p>
      </>
    ) : null;
  }