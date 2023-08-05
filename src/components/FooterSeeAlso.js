import React from 'react';
import { Link } from 'react-router-dom';

import {entries, getEntryProperty} from './WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

import SectionTitle from './SectionTitle.js';



// From ChatGPT
function getRandomInteger(min, max) {
  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Map the random decimal to the desired range
  const randomInteger = Math.floor(randomDecimal * (max - min + 1)) + min;

  return randomInteger;
}

const getRandomEntries = function(amount, currentPageKey) {
  const chosenNumbers = [];   // This table is filled first with random indexes of group
  const randomEntriesTable = [];  // 
  let numberToAvoid;
  let group;

  // for (const entry of entries['casestudies']) {
  //   if (entry.key === currentPageKey) {
  //     return entry;
  //   }
  // };

  entries['casestudies'].forEach((entry, index) => {
    if (entry.key === currentPageKey) {
      numberToAvoid = index;
      group = 'casestudies';
      return;
    }
  });

  if (!numberToAvoid) {
    entries['designs'].forEach((entry, index) => {
      if (entry.key === currentPageKey) {
        numberToAvoid = index;
        group = 'designs';
        return;
      }
    });
  }

  console.log(numberToAvoid, group, entries[group][numberToAvoid].title);
  
  while (chosenNumbers.length < amount) {
    // Select a random integer
    const selectedInt = getRandomInteger(0, entries[group].length - 1);

    // If this number hasn't been selected before, remember it
    if (selectedInt != numberToAvoid && !chosenNumbers.includes(selectedInt)) {
      chosenNumbers.push(selectedInt);
    } 
  }

  // For amount times, get the entry associated with its parallel table
  for (let i = 0; i < amount; i++) {
    randomEntriesTable.push(entries[group][chosenNumbers[i]]);
  }
  // entries[group].map((entry) => {
  //   return entry;
  // });

  return randomEntriesTable;
}

// Check out this alternate function that ChatGPT came up with:
// const indices = Array.from({ length: entries[group].length }, (_, index) => index);
// shuffleArray(indices);

// for (let i = 0; i < amount; i++) {
//   const index = indices[i];
//   randomEntriesTable[i] = entries[group][index];
// }

class FooterSeeAlso extends React.Component { 
  componentDidMount() {
    
  }

  render() {
    return (
      <div className='footerSeeAlso'>
        <div className='container' style={this.props.width}>
          <SectionTitle title='More work'/>

          {/* This function call passes in the page we're on and grabs 3 other pages to advertise */}
          {getRandomEntries(3, this.props.page).map((entry) => 
            <Link to={entry.link} rel="noopener noreferrer">
              <h4 className='subheading'> {entry.title} </h4>
              <h4 className='heading'> {entry.descr} </h4>
            </Link>
          )}

          {/* <Link to={'/ace'} rel="noopener noreferrer">
            <h4 className='subheading'> Artist Crowdfund Exchange </h4>
            <h4 className='heading'> Improving the discoverability of empowering features for our creators. </h4>
          </Link>

          <Link to={'/alike'} rel="noopener noreferrer">
            <h4 className='subheading'> Alike </h4>
            <h4 className='heading'> Expanding our community by streamlining our sign up experience. </h4>
          </Link>

          <Link to={'/okizeme'} rel="noopener noreferrer">
            <h4 className='subheading'> Okizeme </h4>
            <h4 className='heading'> Designing a modern look to elevate Okizeme's brand and identity. </h4>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default FooterSeeAlso;