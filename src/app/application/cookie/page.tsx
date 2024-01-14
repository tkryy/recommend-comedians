import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/shared/PageTitle";

export default function Cookie() {
  return (
    <div>
      <PageTitle title="クッキーに関する情報" />
      <div className="p-8">
        <p>
          このウェブサイト（以下、当サイト）では、クッキーを使用してユーザーエクスペリエンスを向上させ、ウェブサイトの効果的な運用を支援しています。クッキーに関する詳細情報と、クッキーの管理方法について以下で説明します。
        </p>

        <p className="font-bold mt-2">1. クッキーとは？</p>
        <p>
          クッキーは、ウェブサイトがユーザーのブラウジングデータを保存し、後で再アクセス時に識別するための小さなテキストファイルです。これにより、ユーザーエクスペリエンスのカスタマイズ、ウェブサイトのトラフィック分析、広告の配信などが可能になります。
        </p>

        <p className="font-bold mt-2">2. 当サイトで使用するクッキー</p>
        <p>当サイトでは、以下のタイプのクッキーを使用しています。</p>

        <p className="font-bold mt-2">2.1 必須クッキー</p>
        <p>
          ウェブサイトの正常な動作に必要なクッキーです。これらのクッキーは、セッション管理、セキュリティ、言語設定などの基本的な機能を提供します。
        </p>
        <p className="font-bold mt-2">2.2 パフォーマンスクッキー</p>
        <p>
          ウェブサイトの利用状況を追跡し、ウェブサイトの改善に役立つ情報を収集します。これにはGoogle
          Analyticsなどのアナリティクスツールを使用することが含まれます。
        </p>
        <p className="font-bold mt-2">2.3 ターゲティングクッキー</p>
        <p>
          ターゲティング広告やパーソナライズドコンテンツの提供に使用されるクッキーです。ユーザーの関心に合わせて広告を表示し、コンテンツを提供します。
        </p>

        <p className="font-bold mt-2">3. クッキーの管理</p>
        <p>
          ユーザーは、ブラウザの設定を変更してクッキーの受け入れまたは拒否を管理できます。ただし、一部の必須クッキーを無効にすると、ウェブサイトの一部またはすべての機能が正常に動作しない場合があります。
          <br></br>
          クッキーの管理方法は、通常、ブラウザの「設定」または「オプション」メニューから行います。詳細な手順については、ご利用のブラウザのヘルプドキュメントをご参照ください。
        </p>

        <p className="font-bold mt-2">4. クッキーの同意</p>
        <p>
          当サイトを利用することで、ユーザーはクッキーの使用に同意したものとみなされます。ユーザーがクッキーの使用に同意しない場合、ブラウザの設定を変更してクッキーを無効にできます。
        </p>

        <p className="font-bold mt-2">5. お問い合わせ先</p>
        <p>
          クッキーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします。
          <br></br>yomoyomo1294@gmail.com 木戸俊平
        </p>

        <p className="mt-4">最終更新日：2023.9.22</p>
      </div>
    </div>
  );
}
