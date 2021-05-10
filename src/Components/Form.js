const getTime = () => {
  return new Date().toLocaleTimeString();
};

const Form = () => {
  const buttonText = { text: "click me!" };

  return (
    <div>
      <label className="labels" htmlFor="text">
        Enter Text
      </label>
      <input type="text" id="text" />

      {/* for style it is a javascript object */}
      {/* {} are used inside jsx for refering to var, obj and functions */}
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        {/* we can't use javascript objects for showing text fileds */}
        {buttonText.text}
      </button>

      <div>Time {getTime()}</div>
    </div>
  );
};

export default Form;
