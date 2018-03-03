import { transit } from "react-css-transition";

export const landing = {
  defaultStyle: {
    opacity: "0",

  },
  enterStyle: {
    opacity: transit(".8", 1500, "ease-out"),

  },
  leaveStyle: {
    opacity: transit("0", 475, "ease-in"),
    transform: transit("translate(200px, 0)", 500, "ease-in")

  },
  activeStyle: {
    opacity: ".8",

  }
};
