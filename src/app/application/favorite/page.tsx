
import { ServerAuthProvider } from "@/lib/firebase/server-auth-provider";
import FavoritesTable from "@/components/favorites/FavoritesTable";
import { LottiePlayer } from "@/lib/lottie/LottiePlayer";
import PageTitle from "@/components/shared/PageTitle";
export default function Favorite() {
  // 依存関係配列に `user?.uid` を追加

  return (
    <div className="w-full content-start">
      <PageTitle title="お気に入り" />
      <div className="flex flex-col items-center">
        <ServerAuthProvider>
          <FavoritesTable />
        </ServerAuthProvider>
      </div>
    </div>
  );
}
