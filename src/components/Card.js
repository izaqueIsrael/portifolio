const Card = ({ cardImage, title, description, text, link }) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <img className='card__image' src={cardImage} alt={title} />
      </div>
      <div className='card__texts'>
        <h2 className='title card__title'>{title}</h2>
        <div className='card__line' />
        <h3 className='title card__subtitle'>{description}</h3>
        <p className='text card__text'>
          {text}
        </p>
        <button className='card__button button '>
          <a href={link} target='_blank' rel='noreferrer'>Saiba Mais</a>
        </button>
      </div>
    </div>
  );
};

export default Card;