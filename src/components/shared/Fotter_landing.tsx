import Link from "next/link";

function Fotter_landing({}) {
  return (
    <footer className="fotter p-4 bg-[#D2691e] text-white mt-4">
      <div>
        <p className="text-2xl font-bold">Tendon</p>
      </div>

      <div className="mt-4 md:mt-8">
        <div className="flex text-sm md:text-base ">
          <p>©company 2023</p>
          <p className="ml-2 md:ml-4 hover:opacity-75">
            <Link href="/application/policy">プライバシーポリシー</Link>
          </p>
          <p className="ml-2 md:ml-4 hover:opacity-75">
            <Link href="/application/cookie">クッキー</Link>
          </p>
          <p className="ml-2 md:ml-4 hover:opacity-75">
            <Link href="/application/terms_of_use">Terms of use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Fotter_landing;
