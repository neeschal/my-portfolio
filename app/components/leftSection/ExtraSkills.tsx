import ExtraSkill from "./ExtraSkill";
import { RiDownload2Fill } from "react-icons/ri";

export default function ExtraSkills() {
  return (
    <div className="mb-8">
      <h1 className="text-xl mb-2">Extra Skills</h1>
      <ExtraSkill skills="Nodejs, Docker, Git" />
      <ExtraSkill skills="Java, C#, Kotlin" />
      <ExtraSkill skills="HTML, CSS, Javascript" />
      <ExtraSkill skills="Postgres, Mongodb" />
      <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
      <a href="/resume.docx" download="resume.docx">
        <button className="w-full flex items-center justify-center gap-4 bg-primary p-2 hover:text-white hover:cursor-pointer">
          DOWNLOAD CV <RiDownload2Fill />
        </button>
      </a>
    </div>
  );
}
