import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />
      <NavMenu>
        <div>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </div>
        <div>
          <img src="/images/search-icon.svg" alt="home" />
          <span>SEARCH</span>
        </div>
        <div>
          <img src="/images/watchlist-icon.svg" alt="home" />
          <span>WATCHLIST</span>
        </div>
        <div>
          <img src="/images/original-icon.svg" alt="home" />
          <span>ORIGINALS</span>
        </div>
        <div>
          <img src="/images/movie-icon.svg" alt="home" />
          <span>MOVIES</span>
        </div>
        <div>
          <img src="/images/series-icon.svg" alt="home" />
          <span>SERIES</span>
        </div>
      </NavMenu>
      <UserImg src="/images/afaqjpg.JPG" />
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  div {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0px;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
export default Header;

// I'm going to play as much as i can!
