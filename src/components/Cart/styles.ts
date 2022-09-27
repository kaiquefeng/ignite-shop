import { styled } from "@stitches/react";

export const CartContainer = styled("div", {
  backgroundColor: "$gray800",
  height: "100vh",
  position: "absolute",
  right: 0,
  bottom: 0,
  width: 480,
  zIndex: "99",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  padding: "2rem 3rem",

  display: "flex",
  flexDirection: "column",

  header: {
    position: "relative",
    minHeight: 40,
  },

  main: {
    strong: {
      fontSize: "$lg",
    },
  },

  footer: {
    marginTop: "auto",
  },
});

export const ItemsCart = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "2rem 0",
  gap: "1.5rem",
  overflowY: "scroll",
  maxHeight: 500,
});

export const IconClose = styled("div", {
  fontSize: "$2xl",
  cursor: "pointer",
  transform: "rotate(-45deg)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  right: 0,

  width: 30,
  height: 30,

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    transform: "rotate(-135deg)",
    color: "$green300",
  },
});

export const TotalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "2rem",
});

export const LineTotal = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  p: {
    fontSize: "$sm",
    color: "$gray100",
  },
  span: {
    fontSize: "$md",
  },
});

export const ValueTotal = styled("strong", {
  fontSize: "$xl",
  fontWeight: "bold",
});
