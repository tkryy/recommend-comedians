
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
    // <div className="rounded">
    //   <input className="text-gray-400 input input-bordered w-96" value={value} ></input>
    // </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お問合せ内容</label>
      <textarea id="message" className="block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={value}></textarea>

    </div>

  );
};