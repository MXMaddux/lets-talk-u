import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const LoginPage = () => {
  return (
    <main>
      <div>
        <SignIn appearance={{ baseTheme: neobrutalism }} />
      </div>
    </main>
  );
};
export default LoginPage;
