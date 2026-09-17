import { Progress } from "./Progress";

const Skills = () => {
  return (
    <div>
      <h1 className="text-xl pb-2">Skills</h1>
      <Progress topic="React" value={100} />
      <Progress topic="Typescript" value={90} />
      <Progress topic="Rust" value={80} />
      <Progress topic="Aws" value={80} />
      <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
    </div>
  );
};

export default Skills;

