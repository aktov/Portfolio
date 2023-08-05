import React from 'react';

import Card from './Card.js';
import {entries} from './WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

// groupName is passed in from Work; Make sure string names match
const Cards = (props) => {
  const groupName = props.group;
  let selectedGroup = entries[groupName]

  // Returns only one group
  return (
    <div className={props.screenWidth > 768 ? 'cardsDesktop' : 'cardsMobile'}>
      {selectedGroup.map((card) => 
        <Card
          title={card.title}
          key={card.title.toString()}
          desc={card.descr}
          image={card.image} 
          imageM={card.imageM}
          tags={card.tags}
          color={card.color}
          color2={card.color2}
          github={card.github}
          figmaD={card.figmaD}
          figmaM={card.figmaM}
          // figmaA={card.figmaA}
          // figmaB={card.figmaB}
          figma={card.figma}
          default={card.default}
          link={card.link}
          screenWidth={props.screenWidth}
        />
      )}
      
      {(props.screenWidth <= 768) && <div className='cardLast'> </div>}
    </div>
  );
}

export default Cards