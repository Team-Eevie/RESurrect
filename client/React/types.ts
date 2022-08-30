
// User inner data
export type userData = {
  experience: {};
  bulletpoints: {};
  template: string;
  }; 

// Full user response
export type user = {
  _id: string;
  name: string;
  data: userData;
};
