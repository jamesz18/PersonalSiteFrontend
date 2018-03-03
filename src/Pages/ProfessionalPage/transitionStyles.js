import { transit } from "react-css-transition";

export const landing = {
  defaultStyle: {
    opacity: "0",

  },
  enterStyle: {
    opacity: transit(".8", 200, "ease-out"),

  },
  leaveStyle: {
    opacity: transit("0", 475, "ease-in"),
  },
  activeStyle: {
    opacity: ".8",

  }
};
