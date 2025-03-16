export interface ServiceDataType {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TestimonialType {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface FaqListType {
  isActive: boolean;
  question: string;
  answer: string;
}

export interface TamplatesType {
  title: string;
  description: string;
  image: string;
  category?: string;
  link?: string;
}

export type FAQItemType = {
  question: string;
  answer: string;
  category: string;
};

export interface Course {
  id: number;
  image: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  startDate: string;
  students: number;
  tags: string[];
  featured: boolean;
}

export type surveyTypes = {
  _id: "string";
  name: "string";
  email: "string";
  phone: "string";
  age: "number";
  department: "string";
  educationLevel: "string";
  coursesInterested: string[];
  experienceLevel: "string";
  learningStyle: "string";
  reasonForJoining: "string";
  goals: "string";
  heardFrom: "string";
  additionalComments: "string";
  termsAccepted: "boolean";
  createdAt?: "string";
};
