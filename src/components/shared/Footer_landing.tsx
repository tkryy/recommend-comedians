import Link from "next/link";

function Footer_landing({ }) {
  return (
    <footer className="footer w-screen p-4 bg-[#D2691e] text-white mt-4">
      <div className="justify-self-end">
        <div className="text-end justify-self-end">
          <p className="text-2xl font-bold">Tendon</p>
        </div>

        <div className="mt-4 md:mt-8">
          <div className="footer text-sm md:text-base">
            <div className="justify-self-end flex">
              <p>©company 2023</p>
              <p className="hover:opacity-75">
                <Link href="/application/policy">プライバシーポリシー</Link>
              </p>
              <p className=" hover:opacity-75">
                <Link href="/application/cookie">クッキー</Link>
              </p>
              <p className=" hover:opacity-75">
                <Link href="/application/terms_of_use">Terms of use</Link>
              </p>

            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer_landing;
