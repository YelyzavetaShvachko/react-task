import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { genreFiltering } from '../../store/actions/actionCreators';
import { genre } from '../../store/selectors';

import Category from '../Category';
import { CategoriesWrapper } from '../styled.js';

const categories = [
  {
    title: 'ALL',
    styleName: 'category active',
    id: '1'
  },
  {
    title: 'DOCUMENTARY',
    styleName: 'category',
    id: '2'
  },
  {
    title: 'COMEDY',
    styleName: 'category',
    id: '3'
  },
  {
    title: 'HORROR',
    styleName: 'category',
    id: '4'
  },
  {
    title: 'CRIME',
    styleName: 'category',
    id: '5'
  }
];

const categoriesList = [
  'ALL',
  'ADVENTURE',
  'FAMILY',
  'DOCUMENTARY',
  'COMEDY',
  'HORROR',
  'CRIME',
  'FANTASY',
  'SCIENCE FICTION'
];

const CategoriesSection = () => {
  const dispatch = useDispatch();
  dispatch(genreFiltering());
  // const activeGenre = useSelector(state => state.activeGenre);
  const activeGenre = useSelector(genre);

  const itemHandleClick = useCallback(() => {

    if (event.target.innerText === 'ALL') {
      dispatch(genreFiltering({ activeGenre: undefined }));
    } else {
      dispatch(genreFiltering({ activeGenre: event.target.innerText }));
    }
    console.log('activeGenre', activeGenre);

  },[event]); 
    // if ((event.target).innerText !== activeEl) {
    //     setActiveEl(event.target.innerText);
    // }

  return (
    <CategoriesWrapper>
      {categories.map((category) =>
        <Category
          title={category.title}
          styleName={category.styleName}
          key={category.id}
          onClick={itemHandleClick}
        />
      )}
    </CategoriesWrapper>
  );
};

function mapStateToProps(state) {
  return {
    activeGenre: state.activeGenre
  };
}

// export default CategoriesSection;
export default connect(mapStateToProps)(CategoriesSection); 