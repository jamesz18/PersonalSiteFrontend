import { LandingPage } from '../Pages/LandingPage/LandingPage';
import { ProfessionalPage } from '../Pages/ProfessionalPage/ProfessionalPage';
import { PersonalPage } from '../Pages/PersonalPage/PersonalPage';
import * as news from "../News/News.js"

let _selectedPage = LandingPage;

let pages = {
  professionalPage: ProfessionalPage,
  landingPage: LandingPage,
  personalPage: PersonalPage
};

let callbacks = [];

export function setPage(newPage, time = 0) {
  
  if (time > 0) {
    news.publish("router", "Test Message");
    setTimeout(() => setPage(newPage, 0), time);
  }
  else
  {
    
    console.log("router: switching page!");
    switch(newPage) {
      case "professionalPage": _selectedPage = pages[newPage]
        break;
      case "landingPage": _selectedPage = pages[newPage]
        break;
      case "personalPage": _selectedPage = pages[newPage]
        break;
      default: console.log("router: Page DNE");
        break;
    }
    // No error handling for default case yet, just calling callbacks
    // Not even looping through callbacks, because I'm lazy and there's only one app    
    callbacks[0]();
  }
}

export function getPage() {
  return _selectedPage;
}

export const availableMessage = "Router module available";

export function listen(callback) {
  console.log("router: adding callback!");
  callbacks.push(callback);
}