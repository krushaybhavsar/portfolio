import React from "react";
import { ProjectCarouselCard } from "../../types";
import "./Carousel.css";

type CarouselCard = {
  key?: any;
  cardData: ProjectCarouselCard;
};

const CarouselCard = (props: CarouselCard) => {
  return (
    <div className="carousel-card glass">
      {/* <div className="carousel-card__image">
        <img src={props.cardData.image} alt={props.cardData.title} />
      </div>
      <p className="carousel-card__title">{props.cardData.title}</p>
      <p className="carousel-card__description">{props.cardData.description}</p> */}
    </div>
  );
};

export default CarouselCard;
