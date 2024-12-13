import { Form } from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold">
        Processo de Upload
      </h1>

      <Form />
    </div>
  );
}
