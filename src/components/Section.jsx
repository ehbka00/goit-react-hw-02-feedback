import "../css/main.css";

export const Section = (props) => (
  <div className="main">
    <h1>{props.title}</h1>
    {props.children}
  </div>
);
