import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function checkNo(number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  function nextR() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNo(newIndex);
    });
  }
  function prevR() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNo(newIndex);
    });
  }
  function suprise() {
    setIndex((index) => {
      let randomno = Math.random() * people.length;
      randomno = Math.floor(randomno);
      return randomno;
    });
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="idk" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevR}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextR}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={suprise}>
        Surprise me
      </button>
    </article>
  );
}

export default Review;
