import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../styledC/responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  font-weight: bold;
  max-height: 60px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo src="https://kisannetwork.com/static/media/KNLogoFull.673d51f3.png" />
          </Left>
          <Center></Center>
          <Right>
            <MenuItem>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#000",
                        "text-decoration": "none",
                        "border-bottom": "2px solid #228b22",
                      }
                    : {
                        color: "#888888",
                        "text-decoration": "none",
                      }
                }
              >
                Send Message
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/history"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#000",
                        "text-decoration": "none",
                        "border-bottom": "2px solid #228b22",
                      }
                    : {
                        color: "#888888",
                        "text-decoration": "none",
                      }
                }
              >
                Message History
              </NavLink>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
