import React from "react";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";

const Container = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  ${mobile({ "grid-template-columns": "auto auto" })}
  grid-template-columns: auto auto auto;
  width: 100%;
`;

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Name",
      phone: "Phone Number",
    },
  ]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://kisan-net.herokuapp.com/user/all")
        .then((response) => {
          console.log(response.data);
          setContacts(response.data);
        });
    };
    getData();
    console.log(contacts);
  }, []);
  return (
    <Container>
      {contacts.map((contact) => (
        <Contact name={contact.name} phone={contact.phone} key={contact._id} />
      ))}
    </Container>
  );
};

export default Contacts;
