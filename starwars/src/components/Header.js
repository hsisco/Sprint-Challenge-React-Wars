import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 80vw;
  background: #232323
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const DS = styled.img`
  border-radius: 500rem;
  height: 100px;
  width: 100px
  margin: 20px;
  animation: App-logo-spin infinite 20s linear;
  pointer-events: none;

  @keyframes {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const APoD = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
`;

const Heading = styled.h1`
  text-align: left;
  margin: 0;
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 2px;
`;  
  
const Subheading = styled.h3`
  text-align: left;
  margin: 0;
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 1.8px;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <DS src="https://www.sideshow.com/storage/product-images/905045/death-star-silver-coin_star-wars_silo.png" alt="Card image cap" />
/>
      <APoD>
        <Heading>DEATH STAR VISITORS: Badges Issued</Heading>
        <Subheading>For the Date of: 13-09-.1BBY</Subheading>
      </APoD>
    </HeaderContainer>
  );
};

export default Header;