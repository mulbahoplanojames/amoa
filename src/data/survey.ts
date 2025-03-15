export const courses = [
  { id: "web-dev", label: "Advanced Web Development" },
  { id: "Backend Dev", label: "Backend Development" },
  { id: "Python Dev", label: "Python Development" },
  { id: "mobile-dev", label: "Mobile App Development" },
  { id: "blockchain", label: "Blockchain Development" },
  { id: "ui-ux", label: "UI/UX Design Principles" },
];

export const steps = [
  {
    id: "personal",
    name: "Personal Information",
    fields: ["name", "email", "age", "phone"],
  },
  {
    id: "education",
    name: "Educational Background",
    fields: ["department", "educationLevel"],
  },
  {
    id: "courses",
    name: "Course Interests",
    fields: ["coursesInterested"],
  },
  {
    id: "experience",
    name: "Experience & Preferences",
    fields: ["experienceLevel", "learningStyle"],
  },
  {
    id: "goals",
    name: "Goals & Motivations",
    fields: ["reasonForJoining", "goals"],
  },
  {
    id: "additional",
    name: "Additional Information",
    fields: ["heardFrom", "additionalComments", "termsAccepted"],
  },
];
