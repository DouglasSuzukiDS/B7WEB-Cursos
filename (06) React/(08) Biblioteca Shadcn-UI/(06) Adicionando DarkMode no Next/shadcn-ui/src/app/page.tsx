import { ErrorMessage } from "@/components/ErrorMessage";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <ThemeToggle />

        <ErrorMessage error="Mensagem de erro personalizada" />
      </div>
    </div>
  );
}
