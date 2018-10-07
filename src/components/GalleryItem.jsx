import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

import { changeActive } from '../modules/overview';

const clicked = (active, index, dispatch) => {
  const scrollPos = document.getElementById('scrollDiv').scrollLeft;
  dispatch(changeActive(index)).then(() => {
    window.setTimeout(() => {
      if (document.getElementsByClassName('galleryItems active')[0] !== undefined) {
        document.getElementById('scrollDiv').scrollTo({
          top: 0,
          left: document.getElementsByClassName('galleryItems active')[0].offsetLeft - 400 + 25,
          behavior: 'smooth'
        });
      } else {
        document.getElementById('scrollDiv').scrollTo({
          top: 0,
          left: scrollPos - 400 + 10,
          behavior: 'smooth'
        });
      }
    }, 500);
  });
};

const GalleryItem = props => (
  props.blank ?
    <>
      <div className={'galleryItems blank'} />
    </>
    :
        <>
      <div className={`galleryItems ${props.active === props.index && 'active'}`} onClick={() => clicked(props.active, props.index, props.dispatch) }>
        {!props.blank && (
          <Item data={props.data} />
        )}
      </div>
    </>
);

const mapStateToProps = state => ({
  active: state.overview.active,
});

export default connect(mapStateToProps)(GalleryItem);