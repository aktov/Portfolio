import React from 'react';
import { Link } from 'react-router-dom';

import {entries, getEntryProperty} from './WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

import SectionTitle from './SectionTitle.js';
import img_arrow from '../images/arrow.svg';
import img_clouds from '../images/cloudCover.svg';



// From ChatGPT
function getRandomInteger(min, max) {
  // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
  const randomDecimal = Math.random();

  // Map the random decimal to the desired range
  const randomInteger = Math.floor(randomDecimal * (max - min + 1)) + min;

  return randomInteger;
}

// Gets 3 random work entries that are from the same group, also ensures that the page the user is on is not selected
const getRandomEntries = function(amount, currentPageKey) {
  const chosenNumbers = [];   // This table is filled first with random indexes of group
  const randomEntriesTable = [];  // 
  let numberToAvoid;    // When randomly selecting indexes, do not select this one
  let group;    // Will be a string, either 'casestudies' or 'designs'

  // Is this page a case study?
  entries['casestudies'].forEach((entry, index) => {
    if (entry.key === currentPageKey) {
      numberToAvoid = index;
      group = 'casestudies';
      return;
    }
  });

  // Or is this page a design?
  if (!numberToAvoid) {
    entries['designs'].forEach((entry, index) => {
      if (entry.key === currentPageKey) {
        numberToAvoid = index;
        group = 'designs';
        return;
      }
    });
  }

  // console.log(numberToAvoid, group, entries[group][numberToAvoid].title);
  // Choose 3 random numbers, and make sure none of them are the same number as this page's array index
  while (chosenNumbers.length < amount) {
    // Select a random integer
    const selectedInt = getRandomInteger(0, entries[group].length - 1);

    // If this number hasn't been selected before, remember it
    if (selectedInt != numberToAvoid && !chosenNumbers.includes(selectedInt)) {
      chosenNumbers.push(selectedInt);
    } 
  }

  // For amount times, get the entry associated with its parallel table index
  for (let i = 0; i < amount; i++) {
    randomEntriesTable.push(entries[group][chosenNumbers[i]]);
  }

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
  constructor(props) {
    super(props);

    this.state = {
      chosenEntries: []
    };
  }

  componentDidMount() {
    const chosenEntries = getRandomEntries(3, this.props.page);
    this.setState({chosenEntries});
  }

  render() {
    return (
      <div className='footerSeeAlso'>
        <img className='clouds' src={img_clouds} alt='Read' />
        <div className='container' style={this.props.width}>
          <SectionTitle title='Discover more'/>

          {/* This function call passes in the page we're on and grabs 3 other pages to advertise */}
          {this.state.chosenEntries.map((entry) => 
            <Link to={entry.link} rel="noopener noreferrer" key={entry.title}>
              <div>
                <h4 className='subheading'> {entry.title} </h4>
                <div className='imageHolder'>
                  <img src={img_arrow} alt='Read' />
                  {/* <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 6.5H16.5M16.5 6.5L11 1M16.5 6.5L11 12" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="blue"/>
                  </svg> */}
                </div>
              </div>
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