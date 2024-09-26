export interface NavlinksType {
  label: string;
  path: string;
}

// Service Data Type

export interface ServiceDataType {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Projects  Type

export interface ProjectsType {
  title: string;
  description: string;
  image: string;
  category?: string;
  link?: string;
}
