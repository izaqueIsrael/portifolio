import img from '../images/404.png';

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <img className='error-page__image' alt='404' src={img} />
    </section>
  );
};

export default ErrorPage