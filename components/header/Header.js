import styled from "styled-components";
import Image from "next/image";
import appLogo from "../../assets/disney-wbackground.svg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 90px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      margin-left: 10px;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HomeIcon = styled(HomeOutlinedIcon)`
  color: white;
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: white;
`;

const AddIcon = styled(AddOutlinedIcon)`
  color: white;
`;

const GradeIcon = styled(GradeOutlinedIcon)`
  color: white;
`;

const MovieIcon = styled(MovieFilterOutlinedIcon)`
  color: white;
`;
const RadioIcon = styled(RadioOutlinedIcon)`
  color: white;
`;

const Header = () => {
  const userName = null;

  return (
    <Nav>
      <Logo>
        <Image src={appLogo} height={90} width={100} objectFit="contain" />
      </Logo>
      {!userName ? (
        <Login>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <HomeIcon fontSize="large" />
              <span>HOME</span>
            </a>
            <a>
              <SearchIcon fontSize="large" />
              <span>SEARCH</span>
            </a>
            <a>
              <AddIcon fontSize="large" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <GradeIcon fontSize="large" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <MovieIcon fontSize="large" />
              <span>MOVIES</span>
            </a>
            <a>
              <RadioIcon fontSize="large" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Login>Logout</Login>
        </>
      )}
    </Nav>
  );
};

export default Header;
