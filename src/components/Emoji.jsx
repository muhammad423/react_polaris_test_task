import {
  InlineGrid,
} from "@shopify/polaris";
import TopButtonGroup from "./TopButtonGroup";
import { useSelector } from "react-redux";
import React from "react";

const data = [
  {
    imageUrl:
      "https://i.pinimg.com/originals/f3/b3/d3/f3b3d3e5dd3ca82f9f127bfb041cedef.png",
    title: "Any Question ?",
    des: "Don't be shy. Contact Us Now.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/f3/b3/d3/f3b3d3e5dd3ca82f9f127bfb041cedef.png",
    title: "100% Guaranteed",
    des: "Love it or get your money back.",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-with-medical-mask.png",
    title: "Buyer Protection included",
    des: "3 months Warranty.",
  },
  {
    imageUrl:
      "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-horns.png",
    title: "Make your friends Jealous",
    des: "With our unique products.",
  },
];

const Emoji = () => {
  const {
    iconSizeValue,
    titleColor,
    backgroundColor,
    IconColor,
    subTitleColor,
    titleFontSize,
    titleFontStyle,
    subTitleFontSize,
    subTitleFontStyle,
    blockSpace,
    bgTransparent,
    blockSize,
    goesUp,
    goesDown,
  } = useSelector((state) => state.polaris);
  console.log(goesDown, "hahahah");

  return (
    <div
      style={{
        backgroundColor: `${bgTransparent === true ? "transparent" : "white"}`,
        padding: "20px",
      }}
    >
      <div style={{ paddingBottom: "30px" }}>
        <TopButtonGroup />
      </div>
      <div
        style={{
          border: "10px solid gray",
          padding: `${blockSize}px`,
          backgroundColor: `${backgroundColor}`,
          marginTop: `${goesDown}px`,
          marginBottom: `${goesUp}px`,
        }}
      >
        <InlineGrid columns={4} alignItems="start" gap={blockSpace}>
          {data.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              <img src={item.imageUrl} alt="abc" width={iconSizeValue} />
              <h2
                style={{
                  color: `${titleColor}`,
                  fontWeight: "bold",
                  fontSize: `${titleFontSize}px`,
                  fontStyle: `${titleFontStyle}`,
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: `${subTitleColor}`,
                  fontSize: `${subTitleFontSize}px`,
                  fontStyle: `${subTitleFontStyle}`,
                }}
              >
                {item.des}
              </p>
            </div>
          ))}
        </InlineGrid>
      </div>
    </div>
  );
};

export default Emoji;
