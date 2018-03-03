// Holds a topic, info, and subscribers (callback functions)
let topics = {
 // "routing": [],
 // "animations": []
};
export function subscribe(topic, callback) {
  if(!topics[topic]) {
    topics[topic] = [];
  }
  var index = topics[topic].push(callback) - 1;
  console.log(topics)
  // Return a module with a deletion handler
  return {
    remove: function() {
      delete topics[topic][index];
    }
  }
}
export function publish(topic, info) {
  console.log(topics)
  if(topics[topic]) {
    for (let i = 0; i < topics[topic].length; i++) {
      topics[topic][i](info);
    }
  }
}

