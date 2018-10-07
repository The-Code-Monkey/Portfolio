import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changeActive } from '../../modules/overview';

import GalleryItem from '../../components/GalleryItem';

import './index.scss';

class Homepage extends Component {
  state = {
    ltr: true,
    items: [
      {
        middlePanel: {
          title: null,
          subtitle: null,
          content: null
        },
      },
      {
        middlePanel: {
          title: 'Viva Holidays',
          titleColor: '#5cb85c',
          subtitle: 'A bespoke travel website for creating your holiday',
          content: null
        },
      },
      {
        active: true,
        leftPanel: {
        
        },
        middlePanel: {
          title: 'Welcome to my Portfolio',
          titleColor: 'rgba(0,0,0,0.7)',
          subtitle: 'I\'m Andy I am a web developer, musician, and exotic animal keeper.',
          content: 'If you want to read more about what I have done click the cards to the left and to the right to explore more!'
        },
        rightPanel: {
        
        }
      },
      {
        middlePanel: {
          title: 'SkreenFan',
          titleColor: '#3B5998',
          subtitle: 'An online content creation / fan content management website',
          content: null
        },
      },
      {
        middlePanel: {
          title: null,
          subtitle: null,
          content: null
        },
      }
    ]
  };
  
  componentDidMount() {
    const scrollEl = document.getElementById('scrollDiv');
    scrollEl.scrollLeft = (scrollEl.scrollWidth - scrollEl.clientWidth) / 2;
  };
  
  render() {
    return (
      <>
        <div className={"homepage mx-auto"}>
          <div className={"galleryWrapper1"}>
            <div id={"scrollDiv"} className={`galleryWrapper2`}>
              <GalleryItem blank/>
              <GalleryItem blank/>
              <GalleryItem blank/>
              <GalleryItem blank/>
              {this.state.items.map((item, index) => (
                item.active && this.props.dispatch(changeActive(index + 1)),
                <GalleryItem index={index + 1} data={item} />
              ))}
              <GalleryItem blank/>
              <GalleryItem blank/>
              <GalleryItem blank/>
              <GalleryItem blank/>
            </div>
          </div>
        </div>
      </>
    );
  };
}

export default connect()(Homepage);