import { useContext, useState, useEffect } from "react";
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
        campaignCategory: "Luxury Lifestyle",
    },
    {
        title: "Protein Shake",
        description: "Delicious protein shake for muscle growth and recovery",
        logo: "src/assets/shake_logo.svg",
        heroImage: "src/assets/shake.jpeg",
        cash: "300 INR",
        barterWorth: "150 INR",
        hired: 35,
        slotsAvailable: 200,
        buttonText: "Apply Now",
        status: "Hired",
        payout: "Flexi Payout",
        campaignCategory: "Budget lifestyle",
    },
    {
        title: "Protein Shake",
        description: "Delicious protein shake for muscle growth and recovery",
        logo: "src/assets/shake_logo.svg",
        heroImage: "src/assets/shake.jpeg",
        cash: "300 INR",
        barterWorth: "150 INR",
        hired: 35,
        slotsAvailable: 200,
        buttonText: "Apply Now",
        status: "Hired",
        payout: "Flexi Payout",
        campaignCategory: "Budget lifestyle",
    },
];
function Home() {
    const { theme } = useContext( ThemeContext );
    const [loading, setLoading] = useState( true );
    const [filteredCategory, setFilteredCategory] = useState( "All" );
    const [filters, setFilters] = useState( {} );
    const [filteredProducts, setFilteredProducts] = useState( [] );
    const [showFilters, setShowFilters] = useState( false ); // State for toggling filter component



    useEffect( () => {
        setTimeout( () => setLoading( false ), 2000 );
    }, [] );

    useEffect( () => {
        let updatedProducts = [...products];

        // Filter by category
        if ( filteredCategory !== "All" ) {
            updatedProducts = updatedProducts.filter( ( p ) => p.status === filteredCategory );
        }

        // Apply additional filters
        updatedProducts = updatedProducts.filter( ( product ) => {
            return (
                ( !filters.payout || product.payout === filters.payout ) &&
                ( !filters.campaignCategory || product.campaignCategory === filters.campaignCategory )
            );
        } );

        setFilteredProducts( updatedProducts );
    }, [filteredCategory, filters] );

    return (
        <div className={`App ${theme} min-h-screen bg-gray-100 text-gray-900`}>
            <Navbar />
            <div className="fixed top-16 left-0 w-full py-3 px-4 z-10">
                <SortComponent
                    categories={{
                        All: products.length,
                        Applied: products.filter( ( p ) => p.status === "Applied" ).length,
                        Hired: products.filter( ( p ) => p.status === "Hired" ).length,
                    }}
                    onCategoryChange={setFilteredCategory}
                    onFilterIconClick={() => setShowFilters( ( prev ) => !prev )} // Toggle filter visibility
                />
            </div>

            {/* Filter Component */}
            {showFilters && (
                <div className="fixed bg-white border border-blue-500 shadow-lg rounded-md p-4 w-64 z-20">
                    <FilterComponent filters={filters} setFilters={setFilters} />
                </div>
            )}

            <div className="pt-32 px-4 md:px-8 lg:px-12">
                <h2 className="font-semibold text-2xl mt-10">Trending Campaigns</h2>

                <div className="container mx-auto py-10 flex flex-wrap justify-center gap-8">
                    {loading
                        ? [1, 2].map( ( _, i ) => <SkeletonCard key={i} /> )
                        : filteredProducts.map( ( product, i ) => <CardComponent key={i} {...product} /> )}
                </div>
            </div>
            <FloatMenu />
        </div>
    );
}

export default Home;
