"use client"

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";

export default function Navbar() {
  const { disconnect } = useDisconnect();

  const truncateAddress = (address: string) => {
    return address.slice(0, 6) + "…" + address.slice(-4);
  };

  return (
    <nav className="w-full bg-black text-white">
      <div className="mx-auto max-w-275 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/assets/images/Frame.png"
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex gap-8">
            <li><Link href="#punks">About</Link></li>
            <li><Link href="/">Collection</Link></li>
            <li><Link href="#FAQ">FAQs</Link></li>
          </ul>

          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              if (!mounted) return null;

              if (!account || !chain) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="bg-[rgba(196,235,255,0.15)] text-[#C4EBFF]
                               border border-[#C4EBFF]/30
                               rounded-full px-5 py-2 text-sm"
                    aria-label="Connect Wallet"
                  >
                    Connect Wallet
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-4">
                  <button
                    onClick={openAccountModal}
                    className="bg-[rgba(196,235,255,0.15)] text-[#C4EBFF]
                               border border-[#C4EBFF]/30
                               rounded-full px-5 py-2 text-sm"
                  >
                    {truncateAddress(account.address)}
                  </button>
                  <button
                    onClick={() => disconnect()}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 text-sm"
                    aria-label="Disconnect"
                  >
                    Disconnect
                  </button>
                </div>
              );
            }}
          </ConnectButton.Custom>

          <Image
            src="/assets/images/twitter.png"
            width={40}
            height={40}
            alt="twitter"
            className="cursor-pointer"
          />
          <Image
            src="/assets/images/discord.png"
            width={40}
            height={40}
            alt="discord"
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
