export default function DetailsandFAQ(){
  return(
    <section id="FAQ" className="bg-black text-white pb-32">
      <h1 className="text-4xl font-bold text-left pl-75 mb-12">Details and FAQ</h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-24 md:grid-cols-2">
        <h1 className="text-xl font-medium">
          Where are the images for the punks stored?
        </h1>

        <div>
          <p>
            When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the <span className="font-bold">composite image</span> of all the punks and <span className="font-bold">embeded it into the contract</span>. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the <span className="underline decoration-white">announcement blog post</span>.
          </p>
        </div>

        <h1 className="text-xl font-medium">
          Are the punks an ERC-721 token?
        </h1>

        <div>
          <p>
            No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn&apos;t comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you&apos;re not transferring a simple balance, but need to reference which specific Punk you want to work with.

          </p>
        </div>

        <h1 className="text-xl font-medium">
          Where does the market data on this site come from?
        </h1>

        <div>
          <p>
            The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.
          </p>
        </div>

        <h1 className="text-xl font-medium">
          Do you charge any fees for transactions?
        </h1>

        <div>
          <p>
            No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available on Github.
          </p>
        </div>
      </div>
    </section>
  )
}