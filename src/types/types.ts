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
