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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お問合せ内容</label>
      <textarea id="message" 
        className={`block rounded-lg 
                    p-2.5 
                    md:w-96 w-80 
                    text-sm text-gray-900 dark:text-white
                    bg-gray-50 dark:bg-gray-700 
                    border border-gray-300 dark:border-gray-600
                    focus:ring-blue-500    dark:focus:ring-blue-500 
                    focus:border-blue-500  dark:focus:border-blue-500
                    dark:placeholder-gray-400 `}
        placeholder={value}
      ></textarea>
    </div>
  );
};