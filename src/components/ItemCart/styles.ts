import { styled } from "@stitches/react";

export const ItemCartContainer = styled("div", {
  display: "flex",
});

export const ImageContainer = styled("div", {
  width: "100%",
  position: "relative",
  maxWidth: 101.94,
  height: 93,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginRight: "1.5rem",

  img: {
    objectFit: "cover",
  },
});

export const DetailProduct = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  span: {
    color: "$gray300",
    fontSize: "$md",
    lineHeight: "28.8px",
  },
  strong: {
    color: "$gray100",
    fontSize: "$md",
    lineHeight: "28.8px",
  },
  p: {
    fontSize: "$sm",
    fontWeight: "bold",
    color: "$green500",
    cursor: "pointer",
    transition: "all 0.5s ease-in-out",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const BulletQuantity = styled("div", {
  position: "absolute",
  top: "-1rem",
  right: "-1rem",
  backgroundColor: "$green500",
  border: "3px solid $gray800",

  width: 34,
  height: 34,
  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
});
