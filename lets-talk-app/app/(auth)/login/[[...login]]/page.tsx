import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
      <section>
        <Image src={"/assets/logo.svg"} width={100} height={100} alt="logo" />
        <h1 className="text-lg font-extrabold text-sky-1 lg:text-2xl">
          Connect, Communicate, Collaborate in Real-Time
        </h1>
      </section>
      <div className="mt-3">
        <SignIn appearance={{ baseTheme: neobrutalism }} />
      </div>
    </main>
  );
};
export default LoginPage;
