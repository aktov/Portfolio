// Mobile images
import imgM_veu from '../images/Thumbnails/Mobile/cardImageM_veu.png';
import imgM_ace from '../images/Thumbnails/Mobile/cardImageM_ace.png';
import imgM_alike from '../images/Thumbnails/Mobile/cardImageM_alike.png';
import imgM_okizeme from '../images/Thumbnails/Mobile/cardImageM_okizeme.png';
import imgM_hon from '../images/Thumbnails/Mobile/cardImageM_hon.png';
import imgM_csa from '../images/Thumbnails/Mobile/cardImageM_csa.png';

import imgM_stacker from '../images/Thumbnails/Mobile/cardImageM_stacker.png';
import imgM_boba from '../images/Thumbnails/Mobile/cardImageM_boba.png';
import imgM_flowers from '../images/Thumbnails/Mobile/cardImageM_flowers.png';
import imgM_edushare from '../images/Thumbnails/Mobile/cardImageM_edushare.png';

// Desktop images
import img_veu from '../images/Thumbnails/Desktop/cardImage_veu.png';
import img_ace from '../images/Thumbnails/Desktop/cardImage_ace.png';
import img_alike from '../images/Thumbnails/Desktop/cardImage_alike.png';
import img_okizeme from '../images/Thumbnails/Desktop/cardImage_okizeme.png';
import img_hon from '../images/Thumbnails/Desktop/cardImage_hon.png';
import img_csa from '../images/Thumbnails/Desktop/cardImage_csa.png';

import img_stacker from '../images/Thumbnails/Desktop/cardImage_stacker.png';
import img_boba from '../images/Thumbnails/Desktop/cardImage_boba.png';
import img_flowers from '../images/Thumbnails/Desktop/cardImage_flowers.png';
import img_edushare from '../images/Thumbnails/Desktop/cardImage_edushare.png';

// Desktop Banners
import banner_veu from '../images/Banners/banner_veu.png';
import banner_ace from '../images/Banners/banner_ace.png';
import banner_alike from '../images/Banners/banner_alike.png';
import banner_okizeme from '../images/Banners/banner_okizeme.png';
import banner_hon from '../images/Banners/banner_hon.png';
import banner_csa from '../images/Banners/banner_csa.png';

import banner_stacker from '../images/Banners/banner_stacker.png';
import banner_boba from '../images/Banners/banner_boba.png';
import banner_flowers from '../images/Banners/banner_flowers.png';
import banner_edushare from '../images/Banners/banner_edushare.png';

// Mobile
import bannerM_veu from '../images/Thumbnails/Mobile/cardImageM_veu.png';
import bannerM_ace from '../images/Thumbnails/Mobile/cardImageM_ace.png';
import bannerM_alike from '../images/Thumbnails/Mobile/cardImageM_alike.png';
import bannerM_okizeme from '../images/Thumbnails/Mobile/cardImageM_okizeme.png';
import bannerM_hon from '../images/Thumbnails/Mobile/cardImageM_hon.png';
import bannerM_csa from '../images/Thumbnails/Mobile/cardImageM_csa.png';

import bannerM_stacker from '../images/Thumbnails/Mobile/cardImageM_stacker.png';
import bannerM_boba from '../images/Thumbnails/Mobile/cardImageM_boba.png';
import bannerM_flowers from '../images/Thumbnails/Mobile/cardImageM_flowers.png';
import bannerM_edushare from '../images/Thumbnails/Mobile/cardImageM_edushare.png';


// Used to grab a property of an entry
const getEntryProperty = function(group, key, value) {
  for (const entry of entries[group]) {
    if (entry.key === key) {
      return entry[value];
    }
  };

  return false;
}

// Here's how you would use this
// getEntryProperty('casestudies', 'alike', 'color');



// Table of casestudies and designs
const entries = {
  featured: [
    {
      title: 'Artist Crowdfund Exchange',
      descr: 'Improving the discoverability of empowering features for our creators.',
      image: img_ace,
      imageM: imgM_ace,
      banner: banner_ace,
      bannerM: bannerM_ace,
      tags: ['web3', 'blockchain', 'crowdfunding', 'social networking'],
      color: '#FBE7E7',
      color2: '#EAA4C1',
      website: 'https://www.ace.fan/',
      link: '/ace',
      key: 'ace'
    },
    {
      title: 'Stacker',
      descr: 'A minigame built entirely with Figma\'s variables feature.',
      image: img_stacker,
      imageM: imgM_stacker,
      banner: banner_stacker,
      bannerM: bannerM_stacker,
      tags: ['variables', 'components', 'variants', 'minigame'],
      color: '#F8EEEE',
      color2: '#F5C0B9',
      figma: 'https://www.figma.com/proto/Sobk5FvyGSjzB6KM7Rfrm7/Stacker?page-id=0%3A1&type=design&node-id=146-692&viewport=-2952%2C-1585%2C0.18&t=SngxUk9oa4V2el6S-1&scaling=min-zoom&starting-point-node-id=146%3A692&mode=design',
      // default: 'https://www.figma.com/proto/Sobk5FvyGSjzB6KM7Rfrm7/Stacker?page-id=0%3A1&type=design&node-id=146-692&viewport=-2952%2C-1585%2C0.18&t=SngxUk9oa4V2el6S-1&scaling=min-zoom&starting-point-node-id=146%3A692&mode=design',
      // link: 'https://www.linkedin.com/feed/update/urn:li:activity:7082475571913363456/'
      link: '/stacker',
      key: 'stacker'
    },
  ],
  casestudies: [
    {
      title: 'Enterlink',
      descr: 'Streamlining event creation and community engagement for online spaces.',
      image: img_veu,
      imageM: imgM_veu,
      banner: banner_veu,
      bannerM: bannerM_veu,
      tags: ['virtual events', 'VR', 'social networking', 'community'],
      color: '#2C2D36',
      color2: '#349CB9',
      website: 'https://enterverse.com/',
      link: '/veu',
      key: 'veu'
    },
    {
      title: 'Artist Crowdfund Exchange',
      descr: 'Improving the discoverability of empowering features for our creators.',
      image: img_ace,
      imageM: imgM_ace,
      banner: banner_ace,
      bannerM: bannerM_ace,
      tags: ['web3', 'blockchain', 'crowdfunding', 'social networking'],
      color: '#FBE7E7',
      color2: '#EAA4C1',
      // website: 'https://www.ace.fan/',
      link: '/ace',
      key: 'ace'
    },
    {
      title: 'Alike',
      descr: 'Expanding our community by streamlining our sign up experience.',
      image: img_alike,
      imageM: imgM_alike,
      banner: banner_alike,
      bannerM: bannerM_alike,
      tags: ['social networking', 'dating', 'community'],
      color: '#688CD0',
      // website: 'https://www.alike.dating/',
      link: '/alike',
      key: 'alike'
    },
    {
      title: 'Okizeme',
      descr: 'Designing a modern look to elevate Okizeme\'s brand and identity.',
      // descr: 'A modern redesign that better incorporates my client\'s company branding.',
      image: img_okizeme,
      imageM: imgM_okizeme,
      banner: banner_okizeme,
      bannerM: bannerM_okizeme,
      tags: ['prototyping', 'branding', 'gaming'],
      color: '#F5C0B9',
      figmaM: 'https://www.figma.com/proto/MgWQKucfltlZVzvE0cxUhQ/Okizeme-Design?page-id=106%3A81&node-id=106%3A82&viewport=366%2C-150%2C0.25410154461860657&scaling=scale-down',
      figmaD: 'https://www.figma.com/proto/MgWQKucfltlZVzvE0cxUhQ/Okizeme-Design?page-id=0%3A1&node-id=1%3A2&viewport=411%2C660%2C0.10949171334505081&scaling=scale-down-width',
      website: 'https://okizeme.com/',
      link: '/okizeme',
      key: 'okizeme'
    },
    {
      title: 'Hon-Media',
      descr: 'Building an attractive blogsite to promote Hon-Media\'s mission.',
      // descr: 'A desktop design for Hon-Media\'s upcoming blog website.',
      image: img_hon,
      imageM: imgM_hon,
      banner: banner_hon,
      bannerM: bannerM_hon,
      tags: ['blog', 'design consulting'],
      color: '#9F9FDF',
      figma: 'https://www.figma.com/proto/4IWvFVdQfykksXa7kEZE95/blog.hon-media?node-id=266%3A5650&viewport=8238%2C659%2C0.7337678074836731&scaling=scale-down-width',
      link: '/hon',
      key: 'hon'
    },
    {
      title: 'CSA Website Design',
      descr: 'Designing a virtual hub to foster community engagement for Cambodian Student Association @UCSD.',
      image: img_csa,
      imageM: imgM_csa,
      banner: banner_csa,
      bannerM: bannerM_csa,
      tags: ['collaboration', 'culture', 'branding'],
      color: '#DA8484',
      figmaD: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=236%3A2&viewport=147%2C303%2C0.03458884358406067&scaling=scale-down-width',
      figmaM: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=241%3A0&viewport=176%2C217%2C0.07083262503147125&scaling=scale-down',
      link: '/csa',
      key: 'csa'
    },
    // {
    //   title: 'yahoo mobile redesign',
    //   descr: 'The creative process behind redesigning mobile to improve user experience & satisfaction.',
    //   image: img_yahoo,
    //   imageM: imgM_yahoo,
    //   tags: ['user testing', 'wireframing', 'prototyping'],
    //   color: '#C19FF7',
    //   figma1: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=2%3A3&viewport=177%2C180%2C0.07531154155731201&scaling=scale-down',
    //   figma2:'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=21%3A175&viewport=368%2C198%2C0.09464660286903381&scaling=scale-down',
    //   link: '/yahoo'
    // },
    // {
    //   title: 'parking fine',
    //   descr: 'A potential remedy to the parking frustrations of various users on UCSD\'s campus.',
    //   image: img_parking,
    //   imageM: imgM_parking,
    //   tags: ['storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    //   color: '#536D90',
    //   figma: 'https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain',
    //   link: '/parking'
    // },
  ],
  designs: [
    {
      title: 'Stacker',
      descr: 'A minigame built entirely with Figma\'s variables feature.',
      image: img_stacker,
      imageM: imgM_stacker,
      banner: banner_stacker,
      bannerM: bannerM_stacker,
      tags: ['variables', 'variants', 'components', 'minigame'],
      color: '#F8EEEE',
      color2: '#F5C0B9',
      figma: 'https://www.figma.com/proto/Sobk5FvyGSjzB6KM7Rfrm7/Stacker?page-id=0%3A1&type=design&node-id=146-692&viewport=-2952%2C-1585%2C0.18&t=SngxUk9oa4V2el6S-1&scaling=min-zoom&starting-point-node-id=146%3A692&mode=design',
      // default: 'https://www.figma.com/proto/Sobk5FvyGSjzB6KM7Rfrm7/Stacker?page-id=0%3A1&type=design&node-id=146-692&viewport=-2952%2C-1585%2C0.18&t=SngxUk9oa4V2el6S-1&scaling=min-zoom&starting-point-node-id=146%3A692&mode=design',
      link: '/stacker',
      key: 'stacker'
    },
    {
      title: 'Boba Tracker',
      descr: 'An app design for boba tea enthusiasts to record and track their purchases and spending.',
      image: img_boba,
      imageM: imgM_boba,
      banner: banner_boba,
      bannerM: bannerM_boba,
      tags: ['self-care', 'budgeting'],
      color: '#E0F1F3',
      color2: '#BEE3E8',
      figma: 'https://www.figma.com/proto/A4YCf5Qx8THEGF7iDGfwJa/Boba-Buddy?node-id=6%3A755&viewport=589%2C191%2C0.09667579084634781&scaling=scale-down',
      link: '/boba',
      key: 'boba'
    },
    {
      title: 'Flowers',
      descr: 'A simple check-out flow for a website where you can buy, gift, and send flowers to other people of your choice.',
      image: img_flowers,
      imageM: imgM_flowers,
      banner: banner_flowers,
      bannerM: bannerM_flowers,
      tags: ['checkout'],
      color: '#92C999',
      figma: 'https://www.figma.com/proto/5gbXEMOUCFgvECx3gFsD4Q/Pretty-Nice-Flowers?page-id=205%3A1662&node-id=227%3A4386&viewport=205%2C372%2C0.08&scaling=min-zoom&starting-point-node-id=227%3A4386&hide-ui=1',
      link: '/flowers',
      key: 'flowers'
    },
    {
      title: 'Edushare',
      descr: 'An onboarding flow for an app where teachers can socialize and share ideas in one community.',
      image: img_edushare,
      imageM: imgM_edushare,
      banner: banner_edushare,
      bannerM: bannerM_edushare,
      tags: ['onboarding', 'signup'],
      color: '#BBE2F2',
      figma: 'https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down',
      link: '/edushare',
      key: 'edushare'
    },
    // {
    //   title: 'memos',
    //   descr: 'A partial prototype of a quick and simple to-do list app to keep track of your personal tasks.',
    //   image: img_memo,
    //   imageM: imgM_memo,
    //   tags: ['prototyping'],
    //   color: '#BFDFCC',
    //   figma: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down',
    //   default: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down'
    // },
    // {
    //   title: 'chrispyroll',
    //   descr: 'A mockup mimicry of the desktop version of twist.moe, with two different versions A & B',
    //   image: img_chrispy,
    //   imageM: imgM_chrispy,
    //   tags: ['mockup'],
    //   color: '#E1B4D5',
    //   figmaA: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
    //   figmaB: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A1135&viewport=293%2C331%2C0.18345798552036285&scaling=scale-down-width&hide-ui=1',
    //   default: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
    // },
    // {
    //   title: 'portfolio prototype',
    //   descr: 'Check out the mobile & desktop prototypes of the first iteration of this current portfolio',
    //   image: img_portfolio,
    //   imageM: imgM_portfolio,
    //   tags: ['Figma', 'prototyping'],
    //   color: '#93B0E9',
    //   figmaD: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=1%3A2&scaling=scale-down-width&hide-ui=1',
    //   figmaM: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=82%3A0&viewport=243%2C287%2C0.09107169508934021&scaling=scale-down',
    //   link: undefined
    // },
  ],
}

export {entries, getEntryProperty};