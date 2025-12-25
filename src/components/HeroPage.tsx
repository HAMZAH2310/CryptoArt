import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="w-full bg-black text-white px-[165.5px] py-[152.5px]">

      <h1 className="text-4xl font-medium text-center mb-[37.5px]">
        The project that inspired the modern{" "}
        <span className="font-bold">CryptoArt movement</span>
      </h1>

      <p className="text-center mb-[38.5px] text-gray-300">
        10000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
      </p>

      <div className="flex justify-center">
         <Link
          href="/"
          className="bg-white text-black font-bold rounded-full px-8 py-3"
        >
          Mint now
        </Link>
      </div>

    </section>
  );
}
