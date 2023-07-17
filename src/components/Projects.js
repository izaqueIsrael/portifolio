import ReactTypingEffect from 'react-typing-effect';
import card1 from '../images/cards/COSMIC.png'
import Card from './Card';
import { cardList } from '../utils/constants';

function Projects() {
  return (
    <section className='projects'>
      <div className='project'>
        <div className='cards'>
          <h2 className='title'>
            Principais Projetos
          </h2>
          <div className='cards__container'>
            {cardList.map((card) =>
              <Card
                key={''}
                cardImage={card.image}
                title={card.title}
                description={card.description}
                text={card.text}
                link={card.link}
              />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;