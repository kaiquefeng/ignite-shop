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
  position: "relative",
  width: 48,
  height: 48,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "0.375rem",

  cursor: "pointer",

  "&:hover": {},
});

export const BulletQuantity = styled("div", {
  position: "absolute",
  top: "-0.5rem",
  right: "-0.5rem",
  backgroundColor: "$green500",
  border: "3px solid $gray800",

  width: 26,
  height: 26,
  borderRadius: "50%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,

  fontSize: "10px",
});
