import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { surveyTypes } from "@/types/types";

const getStudentSurveyResponses = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/survey`
  );
  const data = await response.data;
  return data;
};

const StudentSurveyResponse = async () => {
  const surveyResult = await getStudentSurveyResponses();
  //   console.log("result ", surveyResult);
  return (
    <>
      <section className="container mx-auto px-2 pb-12 md:pt-32 pt-24">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Survey Responses{" "}
        </h1>

        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of Student Surveys</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Education Level</TableHead>
                <TableHead>Heard From</TableHead>
                <TableHead>Courses Interested</TableHead>
                <TableHead>Experience Level</TableHead>
                <TableHead>Learning Style</TableHead>
                <TableHead>Reason For Joining</TableHead>
                <TableHead>Goals</TableHead>
                <TableHead>Additional Comments</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {surveyResult?.surveys?.map((survey: surveyTypes) => (
                <TableRow key={survey._id} className="text-wrap">
                  <TableCell className="font-medium">{survey?.name}</TableCell>
                  <TableCell>{survey?.email}</TableCell>
                  <TableCell>{survey?.phone}</TableCell>
                  <TableCell>{survey?.age || "N/A"}</TableCell>
                  <TableCell>{survey.department}</TableCell>
                  <TableCell>{survey?.educationLevel}</TableCell>
                  <TableCell>{survey?.heardFrom}</TableCell>
                  <TableCell>{survey?.coursesInterested.join(", ")}</TableCell>
                  <TableCell>{survey?.experienceLevel}</TableCell>
                  <TableCell>{survey?.learningStyle}</TableCell>
                  <TableCell>{survey?.reasonForJoining}</TableCell>
                  <TableCell>{survey?.goals}</TableCell>
                  <TableCell>{survey?.additionalComments}</TableCell>
                  <TableCell>{survey?.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default StudentSurveyResponse;
