import CK from "../assets/PastSponsors/CK.png";
import CodeChef from "../assets/PastSponsors/CodeChef.png";
import DainikBhaskar from "../assets/PastSponsors/Dainik_Bhaskar.png";
import DigitalOcean from "../assets/PastSponsors/Digital_Ocean.png";
import FabHotels from "../assets/PastSponsors/fabHotels.jpg";
import FestPav from "../assets/PastSponsors/FestPav.png";
import HackSociety from "../assets/PastSponsors/Hack_Society.png";
import HackerEarth from '../assets/PastSponsors/HackerEarth.png';
import InkMonk from "../assets/PastSponsors/InkMonk.png";
import KnowAFest from "../assets/PastSponsors/KnowAFest.png";
import MyFM from "../assets/PastSponsors/MyFM.png";
import PayTM from "../assets/PastSponsors/PayTM.png";
import Swiggy from "../assets/PastSponsors/Swiggy.png";
import TCF from "../assets/PastSponsors/The_College_Fever.png";
import swiggy from "../assets/SponsorPage/swiggy.png";
import myfm from "../assets/SponsorPage/myfm.png";
import inkmonk from "../assets/SponsorPage/inkmonk.png";
import hackerearth from "../assets/SponsorPage/hackerearth.png";
import collegefever from "../assets/SponsorPage/collegefever.png";
import digitalocean from "../assets/SponsorPage/digitalocean.png";
import db from "../assets/SponsorPage/db.png";
import ck from "../assets/SponsorPage/ck.png";
import paytm from "../assets/SponsorPage/paytm.png";
import festpav from "../assets/SponsorPage/festpav.png";
import hacksociety from "../assets/SponsorPage/hacksociety.png";
import knowafest from "../assets/SponsorPage/knowafest.png";
import wolfram from "../assets/SponsorPage/wolfram.png";
import codechef from "../assets/SponsorPage/codechef.png";

export interface Sponsor {
    name: string;
    src: string;
}

export const pastSponsors1: Sponsor[] = [
    { name: "CK", src: CK },
    { name: "CodeChef", src: CodeChef },
    { name: "Dainik Bhaskar", src: DainikBhaskar },
    { name: "Digital Ocean", src: DigitalOcean },
    { name: "FabHotels", src: FabHotels },
    { name: "FestPav", src: FestPav },
    { name: "Hack Society", src: HackSociety }
];

export const pastSponsors2: Sponsor[] = [
    { name: "HackerEarth", src: HackerEarth },
    { name: "InkMonk", src: InkMonk },
    { name: "KnowAFest", src: KnowAFest },
    { name: "MyFM", src: MyFM },
    { name: "PayTM", src: PayTM },
    { name: "Swiggy", src: Swiggy },
    { name: "The College Fever", src: TCF }
];

export const sponsorPage: Sponsor[] = [
    { name: "swiggy", src: swiggy },
    { name: "myfm", src: myfm },
    { name: "db", src: db },
    { name: "digitalocean", src: digitalocean },
    { name: "collegefever", src: collegefever },
    { name: "hackerearth", src: hackerearth },
    { name: "inkmonk", src: inkmonk },
    { name: "ck", src: ck },
    { name: "paytm", src: paytm },
    { name: "festpav", src: festpav },
    { name: "hacksociety", src: hacksociety },
    { name: "knowafest", src: knowafest },
    { name: "wolfram", src: wolfram },
    { name: "codechef", src: codechef }
];
