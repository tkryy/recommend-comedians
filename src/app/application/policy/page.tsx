import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/shared/PageTitle";

export default function Privacy_policy() {
  return (
    <div>
      <PageTitle title="プライバシーポリシー" />
      <div className="p-8">
        <p>
          このウェブサイト（以下、当サイト）は、訪問者（以下、ユーザー）のプライバシーを尊重し、ユーザーの個人情報の収集、使用、保護に関する方針を示しています。
          <br></br>
          本プライバシーポリシーに従って、ユーザーが当サイトを利用することを前提としています。以下に、当サイトで収集される情報とその使用に関する詳細を説明します。
        </p>

        <p className="font-bold mt-2">1. 収集する情報</p>
        <p>当サイトでは、次の種類の情報を収集する場合があります。</p>
        <p className="font-bold mt-2">1.1 ユーザー提供情報</p>
        <p>
          ユーザー名、メールアドレス、その他の連絡先情報など、ユーザーが自発的に提供した情報。
        </p>
        <p className="font-bold mt-2">1.2 自動的に収集される情報</p>
        <p>
          IPアドレス、ブラウザタイプ、利用環境、クッキー、ウェブビーコン（ウェブページ内のトラッキングピクセル）など、ブラウジングとウェブサイトの利用に関連する情報。
        </p>

        <p className="font-bold mt-2">2. 収集した情報の使用</p>
        <p>当サイトは、以下の目的で収集した情報を使用します。</p>
        <p className="font-bold mt-2">2.1 サービス提供</p>
        <p>
          ・ユーザーアカウントの作成、管理、カスタマイズ<br></br>
          ・サービス提供、問題の解決、カスタマーサポートの提供
        </p>
        <p className="font-bold mt-2">2.2 ウェブサイトの改善</p>
        <p>
          ・ウェブサイトの機能、コンテンツ、ユーザーエクスペリエンスの向上
          <br></br>・利用データの分析と統計情報の生成
        </p>
        <p className="font-bold mt-2">2.3 コミュニケーション</p>
        <p>ユーザーとの連絡、お知らせ、ウェブサイトの更新情報の提供</p>

        <p className="font-bold mt-2">3. 情報の共有</p>
        <p>
          当サイトは、ユーザーの個人情報を次の場合に限り第三者と共有することがあります。
          <br></br>・ユーザーの明示的な同意がある場合<br></br>
          ・法的要求に従う必要がある場合<br></br>
          ・ウェブサイトの運営、技術サポート、外部サービスプロバイダーへの情報提供が必要な場合
        </p>

        <p className="font-bold mt-2">4. クッキーとトラッキング</p>
        <p>
          当サイトはクッキーとウェブビーコンを使用して、ユーザーエクスペリエンスの向上、トラフィック分析、広告配信などの目的で情報を収集することがあります。
        </p>

        <p className="font-bold mt-2">5. プライバシーの権利</p>
        <p>
          ユーザーは、自身の個人情報にアクセスし、修正、削除、制限を要求する権利を有します。これに関する詳細については、当サイトのカスタマーサポートにお問い合わせください。
        </p>

        <p className="font-bold mt-2">6. 変更と更新</p>
        <p>
          当サイトは、本プライバシーポリシーを変更する場合があります。変更がある場合、新しいポリシーが発効する前にユーザーに通知します。
        </p>

        <p className="font-bold mt-2">7. お問い合わせ先</p>
        <p>
          プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします。
          <br></br>yomoyomo1294@gmail.com 木戸俊平
        </p>

        <p className="mt-4">最終更新日：2023.9.22</p>
      </div>
    </div>
  );
}
