import React, { useEffect } from 'react'; 
import './Body.css';
import Burger_image_1 from '../../assets/Burger-image-1.png';
import Burger_word from '../../assets/Burger-word.png';
import Price from '../../assets/price.png';
import Comming_Soon2 from '../../assets/coming-soon2.png';

const Body = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://unpkg.com/scrollreveal";
    script.async = true;
    script.onload = () => {
      console.log("ScrollReveal loaded");

      
        ScrollReveal({
          reset: true,
          distance: '100px',
          duration: 1500,
          delay: 400,
        });

       
        ScrollReveal().reveal('.burger-image-1', { delay: 200, origin: 'bottom' });
        ScrollReveal().reveal('.burger_price', { delay: 300, origin: 'left' });
        ScrollReveal().reveal('.comming-soon2', { delay: 400, origin: 'right' });
      
    };
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="burger_1">
        <div className="frane_burger_word">
          <img className='Burger_word' src={Burger_word} alt="" />
        </div>
        <img className='burger-image-1' src={Burger_image_1} alt="" />
      </div>
      <div className="price_frame">
        <img className='burger_price' src={Price} alt="" />
      </div>
      <div className="commingsoonr">
        <div></div>
        <img className='comming-soon2' src={Comming_Soon2} alt="" />
      </div>
    </div>
  );
};

export default Body;
