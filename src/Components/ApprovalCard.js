import Buttons from "./Buttons";

export default (props) => {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.content || props.children}</div>
        <Buttons />
      </div>
    </div>
  );
};
