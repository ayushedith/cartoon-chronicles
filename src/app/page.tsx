import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/capturecraft404.png"
          alt="Cartoon Chronicles Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to Cartoon Chronicles</h1>
        <p className="text-lg">Your one-stop destination for all things cartoons!</p>
      </div>
    </div>
  );
}
