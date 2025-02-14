export interface ServiceDataType {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TestimonialType {
  content: string;
  author: string;
  role: string;
  image: string;
}

export interface FaqListType {
  isActive: boolean;
  question: string;
  answer: string;
}
