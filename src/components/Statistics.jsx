import { toUpperCase } from "./functions.js";
import { Notification } from "./Notification.jsx";
import "../css/statistics.css";

export const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div className="statistics">
        <Notification title="There is no feedback" />
      </div>
    );
  }
  return (
    <div className="statistics">
      <ul>
        {Object.entries(props).map(([key, value]) => (
          <li key={key}>
            <span>
              {toUpperCase(key)} : {value}{" "}
              {key === "positivePercentage" ? "%" : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
