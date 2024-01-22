import React from "react";
import ratingGood from "../assets/rating_good.png";
import ratingGreat from "../assets/rating_great.png";
import ratingNormal from "../assets/rating_normal.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: ratingNormal, alt: "Normal" },
    4: { src: ratingGood, alt: "Good" },
    5: { src: ratingGreat, alt: "Great" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1}></Image>;
};

export default Emoji;
