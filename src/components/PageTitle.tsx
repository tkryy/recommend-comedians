

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-7">
      <h1 className="text-3xl font-bold">{title}</h1>
      <hr className="h-px my-8 text-[#F25C05]" />
    </div>
  );
}

export default PageTitle;
