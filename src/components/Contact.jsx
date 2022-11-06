import React, { useState } from "react";
import axios from "axios";
import CreateMessage from "./CreateMessage";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Contact.css";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
} from "../styledC/cards";

const Container = styled.div`
  column-gap: 1%;
  width: 90%;
  border: 1px dashed gray;

  overflow: hidden;
  padding: 0 0 1%;
  margin: 48px auto 0;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 1%;
`;
const Text = styled.p`
  text-align: left;
  font-size: 14px;
  padding: 10px;
  margin: 10px;
  background: #d8e8d8;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  border: none;
  margin: 5px;
  height: 30px;
  border-radius: 5px;
  background-color: #228b22;
  color: #fff;
`;
const DivCont = styled.div`
  margin-top: 10px;
`;
const Input = styled.textarea`
  padding: 7px 0;
  width: 100%;
  height: 20vh;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #228b22;
    outline: 0;
  }
`;
const InputFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  height: 25vh;

  & + & {
    margin-top: 10px;
  }

  &:nth-last-of-type(2) {
    margin-top: 10px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const Contact = ({ name, phone }) => {
  const [random, setRandom] = useState(("" + Math.random()).substring(2, 8));
  const changeInput = () => {
    setRandom("" + Math.random()).substring(2, 8);
  };
  const [input, setInput] = useState(
    `Hi ${name} Your OTP for Kisan Network is ${("" + Math.random()).substring(
      2,
      8
    )}`
  );
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    setInput(updatedKeyword);
  };
  const handleSubmit = async (name, phone, message) => {
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
        alert(`Message is sent to ${name}`);
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Container>
      <DivCont>
        <Text>Name: {name}</Text>
        <Text>Phone: {phone}</Text>
        <Popup
          trigger={
            <Button className="button" onClick={() => changeInput()}>
              {" "}
              Send Messsage{" "}
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>

              <div className="content">
                <CardWrapper>
                  <CardHeader>
                    <CardHeading>Send Message to {name}</CardHeading>
                  </CardHeader>
                  <CardBody>
                    <InputFieldset>
                      <Input
                        type="textarea"
                        value={input}
                        onChange={(event) => inputChangedHandler(event)}
                        required
                      />
                    </InputFieldset>
                  </CardBody>
                </CardWrapper>
              </div>
              <div className="actions">
                <CardButton
                  type="button"
                  onClick={() => {
                    handleSubmit(name, phone, input);
                    close();
                  }}
                >
                  Send
                </CardButton>
              </div>
            </div>
          )}
        </Popup>
      </DivCont>
    </Container>
  );
};

export default Contact;
