import downloadIcon from '../images/header/download-removebg-preview.png';

const AnimatedText = () => {
  return (
    <div className="circle">
      <div className='circle__container'>
        <a
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          target='_blank'
          download='resume.pdf'
          className='text circle__text'
          rel='noreferrer'
        >
          Currículo
          <img
            className='icon header__icon'
            alt='download'
            src={downloadIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default AnimatedText;