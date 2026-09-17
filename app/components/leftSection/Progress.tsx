interface ProgressValue {
  value: number;
  topic: string;
}
export const Progress = ({ value, topic }: ProgressValue) => {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <p className="text-paragraph">{topic}</p>
        <p className="text-paragraph">{value}%</p>
      </div>
      <progress
        max="100"
        value={value}
        className="w-full h-0.5 block outline mb-2 outline-offset-1 outline-primary bg-white rounded [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-white"
      >
        {value}%
      </progress>
    </div>
  );
};
