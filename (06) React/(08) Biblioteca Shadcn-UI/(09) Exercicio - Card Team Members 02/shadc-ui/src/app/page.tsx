import { TeamArea } from "@/components/team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <ThemeToggle />

        <TeamArea />
      </div>
    </div>
  );
}
