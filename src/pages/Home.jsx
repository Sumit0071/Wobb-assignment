import { useContext, useState, useEffect } from "react";
import { Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../Theme";
import "../App.css";
import CardComponent from "../components/CardComponent";
import SkeletonCard from "../components/SkeletonCard";
import SortComponent from "../components/SortComponent";
import FloatMenu from "../components/FloatMenu";
import FilterComponent from "../components/FilterComponent";
import ozivaLogo from "../assets/OZiva_logo_svg.svg";
import himalaya_logo from "../assets/himalaya_logo.png";
import gnc_logo from "../assets/gnc_logo.png";
import gnc_whey from "../assets/gnc_whey.webp";
import boat_logo from "../assets/boat_logo.jpeg";
import boat_watch from "../assets/boat_watch.webp";
const products = [
    {
        title: "Ozivia",
        description: "Get ₹500 cash + barter worth ₹449 for 2 Reels and 1 Story",
        logo: ozivaLogo,
        heroImage: "src/assets/download.jpeg",
        cash: "500 INR",
        barterWorth: "449 INR",
        hired: 20,
        slotsAvailable: 100,
        buttonText: "Profile Pending",
        status: "Applied",
        payout: "Barter",
        campaignCategory: "Budget lifestyle",
        vouchersAvailable: 2,
    },
    {
        title: "Himalaya",
        description: "Your most trusted toothpaste",
        logo: himalaya_logo,
        heroImage: "src/assets/Complete-Care.webp",
        cash: "300 INR",
        barterWorth: "150 INR",
        hired: 35,
        slotsAvailable: 200,
        buttonText: "Apply Now",
        status: "Hired",
        payout: "Fixed Payout",
        campaignCategory: "Budget lifestyle",
        vouchersAvailable: 4,
    },
    {
        title: "Protein Shake",
        description: "Delicious protein shake for muscle growth and recovery",
        logo: gnc_logo,
        heroImage: gnc_whey,
        cash: "1000 INR",
        barterWorth: "750 INR",
        hired: 35,
        slotsAvailable: 200,
        buttonText: "Apply Now",
        status: "Hired",
        payout: "Flexi Payout",
        campaignCategory: "Luxury Lifestyle",
        vouchersAvailable: 1,
    },
    {
        title: " Boat Calorie Tracker",
        description: "Count your daily calories",
        logo: boat_logo,
        heroImage: boat_watch,
        cash: "1000 INR",
        barterWorth: "500 INR",
        hired: 110,
        slotsAvailable: 200,
        buttonText: "Apply Now",
        status: "Closed",
        payout: "Flexi Payout",
        campaignCategory: "Budget lifestyle",
        vouchersAvailable:3
    },
];


function Home() {
    const { theme } = useContext( ThemeContext );
    const [loading, setLoading] = useState( true );
    const [filteredCategory, setFilteredCategory] = useState( "All" );
    const [filters, setFilters] = useState( {} );
    const [filteredProducts, setFilteredProducts] = useState( [] );
    const [showFilters, setShowFilters] = useState( false );

    useEffect( () => {
        setTimeout( () => setLoading( false ), 2000 );
    }, [] );

    useEffect( () => {
        let updatedProducts = [...products];
        if ( filteredCategory !== "All" ) {
            updatedProducts = updatedProducts.filter( ( p ) => p.status === filteredCategory );
        }
        updatedProducts = updatedProducts.filter( ( product ) => (
            ( !filters.payout || product.payout === filters.payout ) &&
            ( !filters.campaignCategory || product.campaignCategory === filters.campaignCategory )
        ) );
        setFilteredProducts( updatedProducts );
    }, [filteredCategory, filters] );

    return (
        <div className={`App ${theme} min-h-screen bg-gray-100 text-gray-900`}>
            <Navbar />


            <div className="fixed top-16 left-1/2 transform -translate-x-1/2 md:left-[calc(50%+8rem)] w-[90%] max-w-xs sm:max-w-sm z-10 p-2 sm:p-4 rounded-md flex flex-wrap justify-center items-center gap-2">
                <SortComponent
                    categories={{
                        All: products.length,
                        Applied: products.filter( ( p ) => p.status === "Applied" ).length,
                        Hired: products.filter( ( p ) => p.status === "Hired" ).length,
                        Closed: products.filter( ( p ) => p.status === "Closed" ).length,
                    }}
                    onCategoryChange={setFilteredCategory}
                />
                <div className="relative">
                    <Filter
                        className="cursor-pointer bg-slate-200 hover:text-blue-800 p-2 size-8 rounded  ml-4"
                        onClick={() => setShowFilters( ( prev ) => !prev )}
                    />

                    {showFilters && (
                        <div className="relative top-full mt-2  bg-white shadow-md p-4 rounded-md w-64 z-20">
                            <FilterComponent filters={filters} setFilters={setFilters} />
                        </div>
                    )}
                </div>
            </div>




            <div className="pt-28 px-4 md:px-8 lg:px-12 mt-20">
                <h2 className="font-semibold text-2xl mt-10 ">Trending Campaigns</h2>
                <div className="container mx-auto py-10 flex flex-wrap justify-center gap-8">
                    {loading
                        ? filteredProducts.map( ( _, i ) => <SkeletonCard key={i} /> )
                        : filteredProducts.map( ( product, i ) => <CardComponent key={i} {...product} /> )}
                </div>
            </div>

            <FloatMenu />
        </div>
    );
}
export default Home;

