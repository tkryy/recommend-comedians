

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-7">
      <h1 className="text-4xl font-bold text-[#732C02]">{title}</h1>
      <hr className="h-px my-8 " />
    </div>
  );
}

export default PageTitle;
