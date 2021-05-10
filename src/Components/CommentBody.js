import Faker from "faker";

export default (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">Today</span>
        </div>
        <div className="text">{props.coms}</div>
      </div>
    </div>
  );
};
