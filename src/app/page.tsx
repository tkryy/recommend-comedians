import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <div>
      <PageTitle title="ホーム"/>
    <div className="container flex flex-col items-center">
      <div className="my-12 flex">
        <Image
          src={"/images/graph_circle01.png"}
          alt='test画像'
          width="200"
          height="100" />
          <Image
          src={"/images/graph_bou01.png"}
          alt='test画像'
          width="200"
          height="100" />
      </div>
    
      <Link href="/recommend_comedians">
      <button className="btn btn-wide btn-lg text-white hover:opacity-75 mx-80 mb-4">おすすめ芸人診断</button>
      </Link>
      <Link href="/add_data">
      <button className="btn btn-wide btn-lg text-white hover:opacity-75 mx-80 mb-4">芸人データを追加する</button>
      </Link>
      <Link href="/explanation">
      <button className="btn btn-wide btn-lg text-white hover:opacity-75 mx-80 mb-4">芸人診断の使い方</button>
      </Link>

    </div>
    </div>
  );
}
