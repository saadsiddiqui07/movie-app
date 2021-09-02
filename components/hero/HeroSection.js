import styled from "styled-components";
import Image from "next/image";
import LoginBackground from "../../images/login-background.jpg";
import FirstImage from "../../images/cta-logo-one.svg";
import SecondImage from "../../images/cta-logo-two.png";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled(Image)`
  position: relative;
`;

const Button = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    padding: 10px;
    margin-top: 10px;
  }
`;

const Content = styled.div`
  width: 50%;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  margin: auto;
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const HeroSection = () => {
  return (
    <Container>
      <BackgroundImage src={LoginBackground} layout="fill" objectFit="cover" />
      <Content>
        <Image
          src={FirstImage}
          objectFit="contain"
          height={200}
          width={1000}
          layout="intrinsic"
        />
        <Button>GET ALL HERE</Button>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <Image src={SecondImage} objectFit="contain" layout="intrinsic" />
      </Content>
    </Container>
  );
};

export default HeroSection;
