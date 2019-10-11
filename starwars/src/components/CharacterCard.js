import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width: 225px;
margin: 40px 20px;
padding:20px;
border-radius: 20px;
background: black;
box-shadow: 2px 4px #161616
display: flex;
flex-direction: column;
justify-content: center;
align-items; center;
`;
const CardImg = styled.img`
width: 225px;
margin-top: 25px;
display: flex;
justify-content: center;
align-items: flex-start;
opacity: 0.7;
`;
const CardImgOverlay = styled.div`
`;
const CardHeading = styled.h1`
font-family: 'Fjalla One', sans-serif;
color: #8c0000;
text-shadow: 1px 1px #720000;
letter-spacing: 8px;
text-align: center;
`;
const CardTitle = styled.h2`
font-family: 'Cantarell', sans-serif;
color: white;
text-align: left;
`;
const CardSubtitle = styled.h3`
font-family: 'Cantarell', sans-serif;
color: white;
text-align: left;
`;
const CardText = styled.p`
font-family: 'Cantarell', sans-serif;
color: white;
text-align: left;
`;
const Enjoy = styled.span`
font-family: 'Cantarell', sans-serif;
color: white;
text-align: center;
font-style: italic;
color: #8c0000;
text-shadow: 1px 1px #720000;


`;
// const Title = styled.h2``;
// const Title = styled.h2``;
// const Title = styled.h2``;
// const Title = styled.h2``;

const CharacterCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg width="100%" src="https://www.sideshow.com/storage/product-images/905045/death-star-silver-coin_star-wars_silo.png" alt="Card image cap" />
        <CardImgOverlay>
          <CardHeading>VISITOR</CardHeading>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Date Valid: 13-09-.1BBY</CardSubtitle>
          <CardText>{props.gender}</CardText>
          <CardText>Born: {props.birth_year}</CardText>
          <CardText>Eyes: {props.eye_color}</CardText>
          <CardText>Hair: {props.hair_color}</CardText>
          <CardText>ID #: {props.edited}</CardText>
          <Enjoy>Enjoy your Stay!</Enjoy>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CharacterCard;