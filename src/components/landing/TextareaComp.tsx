
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
    <div>
      <textarea value={value} ></textarea>
    </div>
  );
};