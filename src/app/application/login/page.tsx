import { GoogleLogInButton as ClientLoginPage } from "../../../components/auth/LoginButtons";
import Image from "next/image";

export default function Login() {
  return (
    <div className="card w-full bg-base-100 shadow-xl px-2">
      <figure>
        <Image
          src="/images/landing_bg.webp"
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">ログイン</h2>
      </div>
      <div className="card-actions justify-center mb-4">
        <ClientLoginPage />
      </div>
    </div>
  );
}
