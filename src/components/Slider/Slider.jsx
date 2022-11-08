import { useEffect, useState } from 'react';
import { ContainerSlide, SimpleSlide } from './slider.styled';

const MINIMUM_CURRENT_SLIDE = 0;

export const Slider = ({ sliders, nameProject }) => {
  const [currentSlide, setCurrentSlide] = useState(MINIMUM_CURRENT_SLIDE);
  const isNextDisabled = currentSlide === sliders.length - 1 ? 'arrow-disabled' : '';
  const isPrevDisabled = currentSlide === MINIMUM_CURRENT_SLIDE ? 'arrow-disabled' : ''; 
  const [image, setImage] = useState("");

  useEffect(() => {
    try {
      import(`../../assets/images/gallery/${nameProject}/${sliders[currentSlide]}`).then((img) => 
        setImage(img.default));
    } catch (e) {
      throw Error(e);
    }
  },[currentSlide, sliders, nameProject]);

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  }

  return (
    <ContainerSlide>
      <button className={`left-arrow ${isPrevDisabled}`} onClick={() => handlePrev()} /> 
      <button className={`right-arrow ${isNextDisabled}`} onClick={() => handleNext()} />
      {image ? ( <SimpleSlide imgSelected={image} /> ) : null}
    </ContainerSlide>
  )
}