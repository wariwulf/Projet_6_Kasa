import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../composant/collapse/collapse';
import "../cards-details/cards-details.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Slideshow from '../composant/slideshow/slideshow';

const CardDetails = ({ data }) => {
  const { id } = useParams(); 
  const card = data.find(item => item.id === id); 

  if (!card) {
    return <div>Carte non trouvé</div>;
  }

  const renderRatingStars = () => {
    const filledStars = Math.floor(card.rating);
    const hasHalfStar = card.rating % 1 !== 0;
  
    const stars = [];
  
    for (let i = 0; i < filledStars; i++) {
      stars.push(<AiFillStar key={`filled-star-${i}`} className="star-filled" />);
    }
  
    if (hasHalfStar) {
      stars.push(<AiOutlineStar key="half-star" className="star-half" />);
    }
  
    while (stars.length < 5) {
      stars.push(<AiOutlineStar key={`empty-star-${stars.length}`} className="star-empty" />);
    }
  
    return stars;
  };

  return (
    <div className='cards-details'>
        <div className='caroussel'>
            <Slideshow
                images={card.pictures}
                imageClassName="slideshow-image"
                prevArrowClassName="slideshow-arrow prev-arrow"
                nextArrowClassName="slideshow-arrow next-arrow"
            />
        </div>
        <div className='header-cd'>
            <div className='loc'>
                <h2>{card.title}</h2>
                <p>{card.location}</p>
            </div>
            <div className='host'>
                <img src={card.host.picture} alt={card.host.name} className='host-image'/>
                <span>{card.host.name}</span>
            </div>
        </div>
        <div className='tag-rat'>
            <div className='tag'>
                {card.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <div className="rating">
                {renderRatingStars()}
            </div>
        </div>
        <div className='coll'>
            <Collapse 
                title="Description"     
                content={card.description} 
                titleClassName="collapse-title"
                contentClassName="collapse-content"
            />
            <Collapse 
                title="Équipements" 
                content={
                    <ul>
                        {card.equipments.map(equipment => (
                        <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                } 
                titleClassName="collapse-title"
                contentClassName="collapse-content"
            />
        </div>
    </div>
  );
};

export default CardDetails;
