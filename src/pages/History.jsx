import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";
const Container = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: auto auto auto;
  width: 100%;
  ${mobile({ "grid-template-columns": "auto auto" })}
`;
const Container2 = styled.div`
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

const DivCont = styled.div`
  margin: 10px;
`;

const History = () => {
  const [smsHistory, setSmsHistory] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://kisan-net.herokuapp.com/message/history")
        .then((response) => {
          response.data.map((el) => {
            var newDate = new Date(el.updatedAt).toLocaleString("en-us", {
              timeZone: "Asia/Kolkata",
            });
            el.updatedAt = newDate;
          });
          setSmsHistory(response.data);
        });
    };
    getData();
  }, []);
  return (
    <Container>
      {smsHistory.map((item) => (
        <Container2 key={item._id}>
          <DivCont>
            <Text>Name: {item.name}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Message: {item.message}</Text>
            <Text>Time: {item.updatedAt}</Text>
            <Text>Status: {item.status == "accepted" ? "Sent" : "Failed"}</Text>
          </DivCont>
        </Container2>
      ))}
    </Container>
  );
};

export default History;
