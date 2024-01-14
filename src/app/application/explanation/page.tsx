import ComedianCard from "@/components/shared/ComedianCard";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import { convertComedianCompanyToColor, convertComedianCompanyToString } from "@/models/Comedian";
import ComedianSkillBadge from "@/components/shared/ComedianSkillBadgeFavorite";
import { sample } from "@/models/Comedian";
import Image from "next/image";
import Link from "next/link";

export default function Explanation() {
  const titleCSS = 'text-lg md:text-xl font-bold';
  const textCSS = 'text-sm md:text-base lg:text-lg pb-4 p-3';
  return (
    <div className="p-2">
      <PageTitle title="使い方" />
      <div className="md:ml-12 md:px-20 pb-10">
        <p className={titleCSS}>1.メイン機能</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>それぞれの機能の使い方は以下のボタンを押したら見られます！</p>
          <div className="md:flex p-1">
            {/* ポップアップ 1  おすすめ機能 */}
            <div className="p-1">
              <label htmlFor="modal_recommend" className="btn w-[140px] bg-red-400 border-none text-white">おすすめ機能</label>
              <input type="checkbox" id="modal_recommend" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white mb-8">
                  <Link href={'/application/recommend_comedians'}>
                    <button className="hover:translate-y-0.5 transform transition">
                      <h3 className="text-lg font-bold">おすすめ機能</h3>
                    </button>
                  </Link>
                  <div className="py-6">
                    <p className="py-2">自分の好きな芸人さんを入力すると、それに似た芸風の芸人さんを教えてくれます！</p>
                    <div className="bg-red-100 rounded-lg p-2">
                      <p className="font-bold">※ 注意</p>
                      <p >R6年1月現在、漫才師のおすすめ機能しか実装されていません。コント師、ピン芸人については随時実装予定ですので少々お待ちください。</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">1.入力欄に芸人さんの名前を正確に入力しましょう！</p>
                    <div className="pb-4">
                      <Image
                        src={'/images/recommend_start.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className='border'
                      />
                    </div>
                    <p className="text-sm md:text-base">以下のように入力！</p>
                    <div className="pb-8">
                      <Image
                        src={'/images/recommend_input.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className="border"
                      />
                    </div>
                    <p className="font-bold">2.結果として以下のように芸人さんが表示されたら成功です！</p>
                    <div>
                      <Image
                        src={'/images/recommend_result.png'}
                        alt={'result'}
                        width={600}
                        height={600}
                        className="border"
                      />
                    </div>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="modal_recommend">Close</label>
              </div>
            </div>
            {/* ポップアップ 2  検索機能 */}
            <div className="p-1">
              <label htmlFor="modal_search" className="btn w-[140px] bg-red-400 border-none text-white">検索機能</label>
              <input type="checkbox" id="modal_search" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white mb-8">
                  <Link href={'/application/search_comedians'}>
                    <button className="hover:translate-y-0.5 transform transition">
                      <h3 className="text-lg font-bold">検索機能</h3>
                    </button>
                  </Link>
                  <div className="py-6">
                    <p className="py-4">気になった芸人さんを検索できます！</p>
                    <div className="flex flex-col justify-center items-center pb-4">
                      <p className="font-bold pb-1">1.入力欄に芸人名の一部を入れましょう！</p>
                      <div className="pb-4">
                        <Image
                          src={'/images/search_start.png'}
                          alt={'input'}
                          width={600}
                          height={600}
                          className='border'
                        />
                      </div>
                      <p className="text-sm md:text-base pb-1">以下のように入力！</p>
                      <div className="pb-8">
                        <Image
                          src={'/images/search_input.png'}
                          alt={'input'}
                          width={600}
                          height={600}
                          className='border'
                        />
                      </div>
                      <p className="font-bold pb-1">2.芸風を選択しましょう！指定しなければ全ての芸風から選ばれます。</p>
                      <div className="pb-4">
                        <Image
                          src={'/images/search_select.png'}
                          alt={'input'}
                          width={600}
                          height={600}
                          className='border'
                        />
                      </div>
                      <p className="font-bold pb-2">3.検索ボタンを押して以下のように芸人データが表示されれば成功です！</p>
                      <p className="text-sm md:text-base pb-1">入力文字列が日本語の場合ひらがなに変換して検索されます。英語の場合、結果は全て大文字で出力されます。</p>
                      <div className="pb-4">
                        <Image
                          src={'/images/search_result.png'}
                          alt={'input'}
                          width={600}
                          height={600}
                          className='border'
                        />
                      </div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-2">
                      <p className="font-bold">※ 注意</p>
                      <p >データベースの都合上、全ての芸人さんのデータをご用意できている訳ではございません。もし好きな芸人さんのデータがなかった場合、お問い合わせフォームから芸人さんの情報を送信していただけると幸いです。</p>
                      <div className="flex justify-center">
                        <Link href={'/'} className={`btn btn-lg btn-block btn-primary
                                                  text-base text-black text-center font-bold  
                                                  rounded-lg 
                                                  hover:translate-y-0.5 
                                                  transform 
                                                  transition
                                                  border-none
                                                  bg-gray-100
                                                  w-[210px]`}
                        >
                          <p>お問い合わせページへ</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="modal_search">Close</label>
              </div>
            </div>
            {/* ポップアップ 3  お気に入り機能 */}
            <div className="p-1">
              <label htmlFor="modal_favorite" className="btn w-[140px] bg-red-400 border-none text-white">お気に入り機能</label>
              <input type="checkbox" id="modal_favorite" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white mb-8">
                  <Link href={'/application/search_comedians'}>
                    <button className="hover:translate-y-0.5 transform transition">
                      <h3 className="text-lg font-bold">お気に入り機能</h3>
                    </button>
                  </Link>
                  <p className="py-4">自分の気に入った芸人さんだけを集めたリストを作ることができます！</p>
                  <div className="bg-red-100 rounded-lg p-2">
                    <p className="font-bold">※ 注意</p>
                    <p>この機能はGoogleアカウントをご登録済でログインしている人のみ使うことができます。</p>
                    <div className="flex justify-center">
                      <Link href={'/application/login'} className={`btn btn-lg btn-block btn-primary
                                                  text-base text-black text-center font-bold  
                                                  rounded-lg 
                                                  hover:translate-y-0.5 
                                                  transform 
                                                  transition
                                                  border-none
                                                  bg-gray-100
                                                  w-[210px]`}
                      >
                        <p>ログインページへ</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center py-10">
                    <p className="font-bold pb-1">1.おすすめ機能や検索機能のお気に入りボタンを押しましょう！</p>
                    <div className="py-5 pb-8">
                      <Image
                        src={'/images/favorite_start.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className='border'
                      />
                    </div>
                    <p className="text-sm md:text-base pb-1">以下のように黒くなったらお気に入りできています！</p>
                    <div className="py-2 pb-8">
                      <Image
                        src={'/images/favorite_choice.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className='border'
                      />
                    </div>
                    <p className="font-bold pb-1 pt-10">2.お気に入り画面へ行きましょう！</p>
                    <p className="text-sm md:text-base pb-1">自分がお気に入りした芸人さんがリスト化されているはずです！</p>
                    <div className="py-5 pb-8">
                      <Image
                        src={'/images/favorite_table.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className='border'
                      />
                    </div>
                    <p className="font-bold pb-2">3.芸人名を押すと個別ページへ進むことができます！</p>
                    <div className="pb-4">
                      <Image
                        src={'/images/favorite_individual.png'}
                        alt={'input'}
                        width={600}
                        height={600}
                        className='border'
                      />
                    </div>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="modal_favorite">Close</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10">
        <p className={titleCSS}>2.事務所について</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>各所属事務所は以下のように色分けされています。少数派の事務所は「その他」に分類されます。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {dummyData.map((comedian: Comedian) => (
              <div className="flex items-center md:p-1 px-1">
                <div
                  className="h-4 w-4 rounded-full mr-2"
                  style={{
                    backgroundColor: convertComedianCompanyToColor(comedian),
                  }}
                ></div>
                <p className="text-sm md:text-base">
                  {convertComedianCompanyToString(comedian)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10">
        <p className={titleCSS}>3.ジャンルアイコンについて</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>芸人さんの芸風やスキルを表すアイコンです。事務所ごとに色が変わります。</p>
          <div className="flex">
            <ComedianSkillBadge comedian={sample} />
            <div className="">
              <p>漫才に積極的に取り組んでいる</p>
              <p>コントに積極的に取り組んでいる</p>
              <p>ピン芸に積極的に取り組んでいる</p>
              <p>大喜利が得意である</p>
              <p>リズム・歌ネタが得意である</p>
              <p className="text-sm md:text-base py-1 md:py-0">フリートークやラジオで活躍している</p>
              <p>SNSで活躍している</p>
              <p>ものまねを得意としている</p>
              <p>ギャグを得意としている</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-12 pt-2 md:px-20 pb-10">
        <p className={titleCSS}>4.SNSボタンについて</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>芸人さんごとにSNSボタンが用意されています。このボタンを押すとその芸人さんのSNSへ飛ぶことができます。SNSをしていない、または、SNSデータが設定されていない芸人さんについては飛ぶことができません。</p>
          <table className=" border border-black p-2">
            <thead className="">
              <tr className="">
                <th className="text-sm md:text-base">アイコン</th>
                <th className="text-sm md:text-base">説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex justify-center">
                  <Image
                    src={'/icons/x_b.svg'}
                    alt={'X_black'}
                    width={30}
                    height={30}
                  />
                </td>
                <td className="pl-2 text-sm md:text-base">X(旧Twitter)のリンクがある場合のアイコン</td>
              </tr>
              <tr>
                <td className="flex justify-center py-1">
                  <Image
                    src={'/icons/instagram_b.svg'}
                    alt={'insta_black'}
                    width={30}
                    height={30}
                  />
                </td>
                <td className="pl-2 text-sm md:text-base">Instagramのリンクがある場合のアイコン</td>
              </tr>
              <tr>
                <td className="flex justify-center items-center">
                  <Image
                    src={'/icons/youtube_b.svg'}
                    alt={'youtube_black'}
                    width={30}
                    height={30}
                  />
                </td>
                <td className="pl-2 text-xs md:text-base">Youtubeチャンネルのリンクがある場合のアイコン</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:ml-12 pt-2 md:px-20">
        <p className={titleCSS}>5.画像について</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>このWebサイト上の芸人さんの画像は全て各事務所のWebサイトから拝借しております。リンクが切れてしまっている場合や、解散などの理由で画像が存在しない場合は以下の画像が表示されます。YouTubeなどのネタ動画についても同様です。</p>
          <div>
            <Image
              src={'/icons/tendonIcon.svg'}
              alt={'tendon_icon'}
              width={200}
              height={200}
            />
          </div>
          <p className='text-xs md:text-base lg:text-lg px-3 pt-3'>問題がある場合は即刻対応致しますので、お手数ですがご本人様もしくは事務所担当者様等からご連絡ください。</p>
        </div>
      </div>
    </div>
  );
}
