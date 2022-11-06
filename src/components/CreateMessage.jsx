import { useState, useEffect } from "react";
import axios from "axios";

const random = ("" + Math.random()).substring(2, 8);

const CreateMessage = ({ name, phone, handleShowInputBox, showInputBox }) => {
  const [input, setInput] = useState(`Your OTP for Kisan Network is ${random}`);
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    setInput(updatedKeyword);
  };
  const handleSubmit = async (
    name,
    phone,
    message,
    handleShowInputBox,
    showInputBox
  ) => {
    const inputData = {
      name: name,
      phone: phone,
      message: message,
    };
    let outputData;

    await axios
      .post("https://kisan-net.herokuapp.com/message/send", inputData)
      .then((response) => {
        outputData = response.data.user;
        alert(`Message is sent`);
        console.log(response, handleShowInputBox, showInputBox);
        handleShowInputBox(showInputBox);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => inputChangedHandler(event)}
      />
      <button
        onClick={() =>
          handleSubmit(name, phone, input, handleShowInputBox, showInputBox)
        }
      >
        Send
      </button>
    </div>
  );
};

export default CreateMessage;
