import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CartIcon = styled("div", {
  backgroundColor: "$gray800",
  width: 48,
  height: 48,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "0.375rem",

  cursor: "pointer",

  "&:hover": {},
});
