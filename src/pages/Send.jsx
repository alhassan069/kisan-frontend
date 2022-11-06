import React from "react";
import { useState } from "react";
import Contacts from "../components/Contacts";
import CreateContacts from "../components/CreateContacts";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";

const WholeContainer = styled.div`
  display: flex;
  ${mobile({ display: "block" })}
  width: 100%;
`;

const ContainerLeft = styled.div`
  height: 300px;
  width: 100px;
  flex: left;
  margin-top: 50px;
  margin-left: 50px;
  /* background-color: teal; */
  ${mobile({
    height: "100px",
    flex: "none",
    "margin-top": "10px",
    "margin-left": "5px",
  })}
`;
const ContainerRight = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 50px;
  margin-left: 50px;
  ${mobile({ margin: "5px 5px" })}
`;
const Button = styled.button`
  border: none;
  margin: 5px;
  border-radius: 5px;
  background-color: #e8e8e8;
  color: #228b22;
  ${({ active }) =>
    active &&
    `
     background-color:  #228b22;
     color: #fff;
  `}
`;

const Send = () => {
  const [view, setView] = useState(true);
  const toggleView = (view) => {
    if (view) setView(false);
    else setView(true);
  };
  return (
    <WholeContainer>
      <ContainerLeft>
        <Button active={view} onClick={() => toggleView(view)}>
          Create Contact
        </Button>
        <Button active={!view} onClick={() => toggleView(view)}>
          View Contacts
        </Button>
      </ContainerLeft>
      <ContainerRight>
        {view && <CreateContacts />}
        {!view && <Contacts />}
      </ContainerRight>
    </WholeContainer>
  );
};

export default Send;
