import ContentDisplay from "./contentDisplay";

// fetch the data
const aboutMeContentData = {
  introduction: "introduction ",
  overallExpercience: "My Overall Experience",
  summary: "my overall Summary",
};

export default function ContentDisplaySection() {
  const { introduction, overallExpercience, summary } = aboutMeContentData;
  //change to the the map format to edit nicely with out manually;

  return (
    <section className="flex flex-col items-start justify-center gap-2 ">
      <ContentDisplay shortDescription={introduction} />
      <ContentDisplay shortDescription={overallExpercience} />
      <ContentDisplay shortDescription={summary} />
    </section>
  );
}
