import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";
import {
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
} from "../styledC/cards";

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  ${mobile({ width: "70%", padding: "0 0 16px" })}
`;

const CreateContacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (name, phone) => {
    if (name && phone) {
      const inputData = {
        name: name,
        phone: phone,
      };
      let outputData;

      await axios
        .post("https://kisan-net.herokuapp.com/user/create", inputData)
        .then((response) => {
          if (response.status == 201) {
            outputData = response.data.user;
            alert(`Created user ${outputData.name}`);
            setName("");
            setPhone("");
          } else {
            console.log("Error occured", response.status);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      alert("Empty field");
    }
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>Create Contact</CardHeading>
      </CardHeader>

      <CardBody>
        <CardFieldset>
          <CardInput
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </CardFieldset>

        <CardFieldset>
          <CardInput
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            required
          />
        </CardFieldset>

        <CardFieldset>
          <CardButton type="button" onClick={() => handleSubmit(name, phone)}>
            Create
          </CardButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default CreateContacts;
