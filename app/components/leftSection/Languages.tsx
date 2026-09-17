import { Progress } from "./Progress";

const Languages = () => {
  return (
    <div>
      <h1 className="text-xl pb-2">Languages</h1>
      <Progress topic="English" value={100} />
      <Progress topic="Nepali" value={100} />
      <Progress topic="Japanese" value={90} />
      <Progress topic="Hindi" value={90} />
      <hr className="my-4 text-gray-200 drop-shadow-2xl"></hr>
    </div>
  );
};

export default Languages;
