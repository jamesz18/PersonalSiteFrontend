/* 
    animMgmt handles signaling enter or exit times for page animations.
*/

let enter = [];
let exit = [];

// subscribe(enterCallback, exitCallback) takes two optional callbacks which are 
// called, possibly with a time, when triggerEnter or triggerExit are called.

export function subscribe(enterCallback, exitCallback) {
  if (enterCallback) {
    console.log("animMgmt: new enter subscriber");
    enter.push(enterCallback);
  }
  if (exitCallback) {
    console.log("animMgmt: new exit subscriber");
    exit.push(exitCallback);
  }
}

// triggerEnter(time) calls each function stored in the enter array, passing 
// the time along with it
// NOTE: On first glance, it may seem the conditional is pointless, and that
// enter[i](time) could be called regardless.  This is not the case, as the
// callback has its own default value for time which we don't want to overwrite
// with our test variable "time".  
export function triggerEnter(time = -1) {
  console.log("animMgmt: triggering enter");
  if (time !== -1) {
    for (let i = 0; i < enter.length; i++) {
      enter[i](time);
    }
  } else {
    for (let i = 0; i < enter.length; i++) {
      enter[i]();
    }
  }
}

// triggerExit(time) calls each function stored in the exit array, passing 
// the time along with it
// NOTE: On first glance, it may seem the conditional is pointless, and that
// enter[i](time) could be called regardless.  This is not the case, as the
// callback has its own default value for time which we don't want to overwrite
// with our test variable "time". 
export function triggerExit(time = -1) {
  console.log("animMgmt: triggering exit");
  if (time !== -1) {
    for (let i = 0; i < exit.length; i++) {
      exit[i](time);
    }
  } else {
    for (let i = 0; i < exit.length; i++) {
      exit[i]();
    }
  }

  clear();
}

// clear() removes all the subscribers from both events
export function clear() {
  console.log("animMgmt: clearing subscribers")
  enter = [];
  exit = [];
}