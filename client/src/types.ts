
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

export type ExperienceType = {
  _id: number;
  user_id: number;
  position: string;
  company: string;
  start_month: string;
  start_year: string;
  end_month: string;
  end_year: string;
  hide: boolean;
  experience_id: number;
  entry: BulletPointType;

}

export type BulletPointType = {
  id: string;
  description: string;
}

export type Skill = {
  id: string;
  description: string;
}

export type Education = {
  position: string;
  company: string;
  // location:string;
  // start_month: string;
  // start_year: string;
  // end_month: string;
  // end_year: string;

}
export type Interest = {
  position: string;
  company: string;
  // location:string;
  // start_month: string;
  // start_year: string;
  // end_month: string;
  // end_year: string;

}
export type OpenSource = {
  position: string;
  company: string;
  // location:string;
  // start_month: string;
  // start_year: string;
  // end_month: string;
  // end_year: string;

}
