import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
  // const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* // category is the prop */}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
