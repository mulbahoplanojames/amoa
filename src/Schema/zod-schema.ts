import { z } from "zod";

export const newsLetterSchema = z.object({
  email: z.string().email(),
});

export const surveyFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 16, {
    message: "Age must be at least 16.",
  }),
  phone: z.string().optional(),
  department: z.string({
    required_error: "Please select a department.",
  }),
  educationLevel: z.string({
    required_error: "Please select your education level.",
  }),
  coursesInterested: z.array(z.string()).min(1, {
    message: "Please select at least one course.",
  }),
  experienceLevel: z.string({
    required_error: "Please select your experience level.",
  }),
  learningStyle: z.string({
    required_error: "Please select your preferred learning style.",
  }),
  reasonForJoining: z.string().min(10, {
    message: "Please provide a reason with at least 10 characters.",
  }),
  goals: z.string().min(10, {
    message: "Please describe your goals with at least 10 characters.",
  }),
  heardFrom: z.string({
    required_error: "Please tell us how you heard about us.",
  }),
  additionalComments: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});
