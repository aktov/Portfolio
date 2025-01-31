import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash"; // Install lodash if needed
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const ContentsTable = (props) => {
  const [headings, setHeadings] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);
  const tocRef = useRef(null);
  const [tocHeight, setTocHeight] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Fills in all table links with SectionTitle h3 headers
  useEffect(() => {
    // Select all sections (instead of just H3s)
    const sectionDivs = Array.from(document.querySelectorAll('.section'));
  
    // Extract IDs based on SectionTitle's h3 inside each section
    const extractedHeadings = sectionDivs.map((section, index) => {
      const h3 = section.querySelector('h3.contentsTableTitle');
      if (!h3) return null; // Skip if there's no h3 in this section
  
      if (!section.id) {
        section.id = `section-${index}`;
      }
  
      return {
        id: section.id,
        text: h3.innerText,
      };
    }).filter(Boolean); // Removes null values
  
    setHeadings(extractedHeadings);
  }, []);
  

  // Grabs table of content's final height to offset it correctly within page
  useEffect(() => {
    if (tocRef.current) {
      setTocHeight(tocRef.current.offsetHeight);
    }
  }, [headings]); // Update height when headings change


  // Resize listener to update height
  useEffect(() => {
    const updateTocHeight = debounce(() => {
      if (tocRef.current) {
        setTocHeight(tocRef.current.offsetHeight);
      }
    }, 200);  // 200ms
  
    updateTocHeight(); // Initial height set
    window.addEventListener("resize", updateTocHeight);
    
    return () => window.removeEventListener("resize", updateTocHeight);
  }, [headings]);


  // Detects if TOC is overflowing its parent
  useEffect(() => {
    let ticking = false;

    const checkOverflow = () => {
      if (!tocRef.current || !tocRef.current.parentElement) return;

      const parent = tocRef.current.parentElement; // Get parent div
      const tocRect = tocRef.current.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      setIsOverflowing(tocRect.bottom > parentRect.bottom);
    };

    const handleScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkOverflow();
          ticking = false;
        });
        ticking = true;
      }
    }

    checkOverflow();
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);


  // Handles smooth scroll to corresponding section when clicking table of contents link
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.history.pushState(null, null, `#${id}`); // Updates URL without jumping
      targetElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }


  // Handles highlighting of the current section the reader is on
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
          setCurrentSection(visibleEntry.target.id);
        }

      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0 } // Trigger when 50% of the section is visible
    );

    headings.forEach((heading) => {
      const section = document.getElementById(heading.id);
      if (section) {
        observer.observe(section);
      }
    });
    
    return () => {
      observer.disconnect()
    };
  }, [headings]);

  return (
    <div 
      ref={tocRef}  
      // className='contentsTable' 
      className={`contentsTable ${isOverflowing ? 'fade-out' : ''}`}
      style={{marginBottom: `-${tocHeight}px`,}}
    >
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a 
              href={`#${heading.id}`} 
              onClick={(e) => scrollToSection(e, heading.id)}
              className={currentSection === heading.id ? 'current' : ''}
              // style={currentSection === heading.id && props.color ? {backgroundColor: `${props.color}40`} : null}
            >
              <div className={currentSection === heading.id ? 'line current' : 'line'} style={{backgroundColor: props.color}}/>

              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentsTable;
