import { Area } from "@/components/area";

export default async function Page() {
    return (
        <div className="flex flex-col gap-5 w-full h-screen items-center">
            <h1 className="mt-5 text-3xl font-bold">Projeto Docker</h1>
            <Area />
        </div>
    );
}