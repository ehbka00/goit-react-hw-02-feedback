import { toUpperCase } from "./functions";

import "../css/feedbackOptions.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="btns">
      {options.map((value) => (
        <button
          className="btn"
          key={value}
          type="submit"
          id={value.toString()}
          data-value={value.toString()}
          onClick={onLeaveFeedback}
        >
          {toUpperCase(value)}
        </button>
      ))}
    </div>
  );
};
