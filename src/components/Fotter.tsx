import Link from 'next/link';

function Fotter({}) {
  return (
  <footer className="fotter p-4 bg-[#D2691e] text-white block lg:hidden">
    <div>
      <p className="text-2xl">タイトル</p>
    </div>
  
  <div className="mt-8">
    <p>©company 2023<span className="ml-4 link link-hover"><Link href="/policy">プライバシーポリシー</Link></span><span className="ml-4 link link-hover"><Link href="/cookie">クッキー</Link></span><span className="ml-4 link link-hover"><Link href="/terms_of_use">Terms of use</Link></span></p>
 
  </div> 
  </footer>
  )
  
}

export default Fotter;

