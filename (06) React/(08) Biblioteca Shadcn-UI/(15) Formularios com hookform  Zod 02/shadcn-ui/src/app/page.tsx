import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className=" mx-auto w-full max-w-2xl min-h-screen">
      <ThemeToggle />

      <LoginForm />
    </div>

  );
}
