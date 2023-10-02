

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-7">
      <h1 className="md:text-4xl text-xl md:pl-0 pl-3 font-bold text-[#732C02]">{title}</h1>
      <hr className="h-px my-8 " />
    </div>
  );
}

export default PageTitle;
