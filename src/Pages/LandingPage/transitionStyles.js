import { transit } from "react-css-transition";

export const professional = {
  defaultStyle: {
    opacity: "0",

  },
  enterStyle: {
    opacity: transit(".8", 1500, "ease-out"),

  },
  leaveStyle: {
    opacity: transit("0", 475, "ease-in"),
    transform: transit("translate(-200px, 0)", 500, "ease-in")

  },
  activeStyle: {
    opacity: ".8",

  }
};

export const personal = {
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

export const welcome = {
  defaultStyle: {
    opacity: "0",
    transform: "translate(-75px, 0) rotate(-0.025turn)"
  },
  enterStyle: {
    opacity: transit("1", 1000, "ease-out"),
    transform: transit("translate(0px, 0) rotate(-0.025turn)", 1000, "ease-out")
  },
  leaveStyle: {
    opacity: transit("0", 500, "ease-in"),
    transform: transit("translate(0px, 0) rotate(-0.025turn)", 505, "ease-in")
  },
  activeStyle: {
    opacity: "1",
    transform: "translate(0px, 0) rotate(-0.025turn)"
  }
};