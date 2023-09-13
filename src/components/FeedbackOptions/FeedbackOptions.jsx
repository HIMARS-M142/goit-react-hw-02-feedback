export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return onLeaveFeedback.map(key => {
    return (
      <button onClick={() => options(key)} key={key}>
        {key}
      </button>
    );
  });
};
