import { styled } from "@stitches/react";

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    zIndex: "999",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const DetailSmall = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",

  strong: {
    fontSize: "$lg",
    color: "$gray100",
    lineHeight: "160%",
  },

  span: {
    fontSize: "$xl",
    fontWeight: "bold",
    color: "$green300",
  },
});

export const CartIconProduct = styled("div", {
  backgroundColor: "$green500",
  color: "$white",
  width: 48,
  height: 48,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "0.375rem",

  cursor: "pointer",
  zIndex: "9",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: "$green300",
  },
});
