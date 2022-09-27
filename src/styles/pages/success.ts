import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("span", {
  width: "100%",
  minWidth: 140,
  height: 140,
  borderRadius: "50%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  padding: "0.25rem",
  marginBottom: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ContainerImages = styled("div", {
  display: "flex",

  span: {
    "&:not(:first-child)": {
      marginLeft: "-3.5rem",
    },
  },
});
