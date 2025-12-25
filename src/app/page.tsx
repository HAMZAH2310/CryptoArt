import DetailsandFAQ from "../components/DetailsandFAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetPunk from "../components/GetPunk";
import HeroPage from "../components/HeroPage";
import LargestSales from "../components/LargestSales";
import Navbar from "../components/Navbar";
import NftImage from "../components/NftImage";
import Punks from "../components/Punks";
import TransactionNft from "../components/TransactionNft";

export default function Home(){
  return(
    <>
      <Navbar/>
      <HeroPage/>
      <NftImage/>
      <Features/>
      <Punks/>
      <LargestSales/>
      <TransactionNft/>
      <GetPunk/>
      <DetailsandFAQ/>
      <Footer/>
    </>
  )
}