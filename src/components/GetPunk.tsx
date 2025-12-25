import Image from "next/image";
import CircleNumber from "./circle/CircleCard";

export default function GetPunk() {
  return (
    <section className="bg-black text-white py-24 pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-24 md:grid-cols-2">

        <h1 className="text-4xl font-medium">
          How do I get a punk?
        </h1>

        <div className="max-w-md">
          <div className="flex items-center gap-4">
            <CircleNumber value={1} size={56} />
            <Image
              src="/assets/images/metamusk.png"
              width={56}
              height={56}
              alt="meta-mask"
            />
          </div>

          <h2 className="mt-6 text-lg font-medium">
            Download and install MetaMask
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Download and install a Chrome browser plugin called MetaMask.
            This will allow websites (that you authorise) access to your
            Ethereum account.
          </p>

          <div className="flex items-center gap-4 mt-11">
            <CircleNumber value={2} size={56} />
            <Image
              src="/assets/images/ethereum.png"
              width={56}
              height={56}
              alt="meta-mask"
            />
          </div>

          <h2 className="mt-6 text-lg font-medium">
            Buy some Ethereum
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/80">
            If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.
          </p>

           <div className="flex items-center gap-4 mt-11">
            <CircleNumber value={3} size={56} />
          </div>

          <h2 className="mt-6 text-lg font-medium">
            Start bidding, buying and selling
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/80">
            Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.
          </p>

        </div>
      </div>
    </section>
  );
}
