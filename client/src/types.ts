
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

export type Experience = {
  position: string;
  company: string;
  // location:string;
  // start_month: string;
  // start_year: string;
  // end_month: string;
  // end_year: string;

}

export type BulletPointType = {
  id: string;
  description: string;
}

export type Skill = {
  id: string;
  description: string;
}
