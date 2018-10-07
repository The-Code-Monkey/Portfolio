import React from 'react';

const Item = props => (
  <>
    <div className={"galleryItem"}>
      Test 1
    </div>
    <div className={"galleryItem"}>
      <div className={"col-12"}>
      <div className={"row"}>
        <div className={"col-12 text-center"}>
          <h2 style={{ color: `${props.data.middlePanel.titleColor}` }}>{props.data.middlePanel.title}</h2>
        </div>
        <div className={"col-12 mt-5 text-center"}>
          <h5 className={"mt-4"}>{props.data.middlePanel.subtitle}</h5>
          <p className={"mt-3"}>{props.data.middlePanel.content}</p>
        </div>
      </div>
      </div>
    </div>
    <div className={"galleryItem"}>
      Test 3
    </div>
  </>
);

export default Item;