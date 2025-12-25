import Image from "next/image";
import Link from "next/link";

export default function Punks() {
  return (
    <section className="bg-black text-white py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-24 md:grid-cols-2">
        <h1 className="text-4xl font-bold">Meet the Punks</h1>

        <div className="grid grid-rows-[auto_auto] gap-6">
          <p className="leading-relaxed text-white/80">
            The CryptoPunks are 24x24 pixel art images, generated algorithmically.
            Most are punky-looking guys and girls, but there are a few rarer types
            mixed in: Apes, Zombies and even the odd Alien. Every punk has their own
            profile page that shows their attributes as well as their ownership
            and for-sale status.
          </p>

          <div className="flex gap-4">
            <Link 
            href="#transaction_nft"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold hover:cursor-pointer">
              <p className="text-black">Buy a Punk</p>
            </Link>

            <Link
            href="#largest_sales" 
            className="rounded-full border border-white/30 px-5 py-2 text-sm hover:cursor-pointer">
              <p>View full collection</p>
            </Link>
          </div>
        </div>

        <div className="mt-32">
          <div className="w-full rounded-full border-none bg-transparent transition-all duration-300 ease-out hover:bg-[#638596] hover:scale-[1.05]">
            <h1 className="px-8 py-4 text-2xl">
              Punks with a blue background are not for sale and have no current bids
            </h1>
          </div>

          <div className="mt-5 w-full rounded-full border-none bg-transparent transition-all duration-300 ease-out hover:bg-[#638596] hover:scale-[1.05]">
            <h1 className="px-8 py-4 text-2xl">
              Punk with red background are available for sale by their owner
            </h1>
          </div>

          <div className="mt-5 w-full rounded-full border-none bg-transparent transition-all duration-300 ease-out hover:bg-[#638596] hover:scale-[1.05]">
            <h1 className="px-8 py-4 text-2xl">
              Punk with a purple background have an active bid on them
            </h1>
          </div>
        </div>

        <div className="grid grid-rows-[auto_auto] gap-6">
          <Image
            src="/assets/images/big-nft.png"
            width={634}
            height={634}
            alt="big-nft"
          />
        </div>
      </div>
    </section>
  );
}