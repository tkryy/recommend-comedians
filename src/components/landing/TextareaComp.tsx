
interface Props {
  name: string;
  value: string;
  // onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextareaComp = ({
  name,
  value,
}: Props) => {

  return (
    <div className="outline rounded">
      <textarea className="text-gray-400 " value={value} ></textarea>
    </div>
  );
};