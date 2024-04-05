
export default function Feedback ({ feedbackTypes, totalReviews, positivePercentage }) {
  return totalReviews > 0 ? (
    <>
      <p>Good: {feedbackTypes.good}</p>
      <p>Neutral: {feedbackTypes.neutral}</p>
      <p>Bad: {feedbackTypes.bad}</p>
      <p>Total: {totalReviews}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </>
  ) : null;
};