import Link from 'next/link';

function Fotter({ }) {
  return (
    <footer className="fotter p-4 bg-[#D2691e] text-white block lg:hidden">
      <div>
        <p className="text-2xl font-bold">Tendon</p>
      </div>

      <div className="mt-4 md:mt-8">
        <div className="flex text-sm md:text-base ">
          <p>©company 2023</p>
          <p className="ml-2 md:ml-4 hover:opacity-75"><Link href="/policy">プライバシーポリシー</Link></p>
          <p className="ml-2 md:ml-4 hover:opacity-75"><Link href="/cookie">クッキー</Link></p>
          <p className="ml-2 md:ml-4 hover:opacity-75"><Link href="/terms_of_use">Terms of use</Link></p>
        </div>
      </div>
      
    </footer>
  )

}

export default Fotter;

