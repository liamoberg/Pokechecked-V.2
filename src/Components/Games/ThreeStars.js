import React from "react";
import Star from "../SVG components/star";

function ThreeStars(stars) {
  // Maybe implement rendering of stars depending on what I recive in stars.stars.position
  // Now it's done with CSS

  // const [star] = useState(stars.stars.position);

  return (
    <div className="star">
      <img src={stars.stars.image} alt="test" />
      <div className="stars">
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}

export default ThreeStars;
