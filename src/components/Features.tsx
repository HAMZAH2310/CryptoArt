import FeaturedCard from "./card/FeaturedCard";

export default function Features(){
  return(
      <section className="bg-black py-24">
      <h2 className="text-center text-lg mb-12 text-white/80">
        Featured in
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <FeaturedCard
          source="Mashable"
          title="This ethereum-based project could change how we think about digital art"
        />

        <FeaturedCard
          source="Mashable"
          title="CryptoKitties, CryptoPunks and the birth of a cottage industry"
        />

        <FeaturedCard
          source="Mashable"
          title="‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT"
        />
      </div>
    </section>
  )
}