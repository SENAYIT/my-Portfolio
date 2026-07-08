import ContentDisplay from "./contentDisplay";
import { aboutMe } from "@/data/aboutMe";
// // fetch the data
// const aboutMeContentData = {
//   introduction: "introduction ",
//   overallExpercience: "My Overall Experience",
//   summary: "my overall Summary",
// };

export default function ContentDisplaySection() {
  const { introduction, overallExpercience, summary } = aboutMe; // Destructure the aboutMe object to get the individual properties
  //change to the the map format to edit nicely with out manually;

  return (
    <section className="flex w-full flex-col items-start justify-center gap-4">
      <ContentDisplay shortDescription={introduction} />
      <ContentDisplay shortDescription={overallExpercience} />
      <ContentDisplay shortDescription={summary} />
    </section>
  );
}
