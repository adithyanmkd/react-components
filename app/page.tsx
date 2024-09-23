import Image from "next/image";
import CustomNavbar from "./components/CustomNavbar";
import Header from "./components/ResNavbar/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  );
}
