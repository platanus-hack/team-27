import Button from "@/components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-[#878787]">Hola</h1>
      <Button label="Anterior" variant="gray" icon={<FaArrowLeft />} />
      <Button label="Siguiente" variant="green" icon={<FaArrowRight />} />
      <Button label="Hint" variant="blue" />
    </div>
  );
}
