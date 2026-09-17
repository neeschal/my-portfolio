import { HiOutlineSquare2Stack } from "react-icons/hi2";
interface ExtraSkillProps {
  skills: string;
}
const ExtraSkill = ({ skills }: ExtraSkillProps) => {
  return (
    <div className="flex gap-2">
      <HiOutlineSquare2Stack className="text-primary text-xl" />
      <p>{skills}</p>
    </div>
  );
};

export default ExtraSkill;
