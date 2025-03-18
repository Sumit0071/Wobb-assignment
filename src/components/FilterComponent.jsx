import { Filter } from "lucide-react";

const PayoutOptions = ["Barter", "Fixed Payout", "Flexi Payout", "Product Refund", "Affiliate"];
const CampaignCategories = ["Any", "Humor & Funny", "Stand up Comedians", "Sketch Comedy", "Budget lifestyle", "Luxury Lifestyle"];
const cashAmount=["under 500 INR","500-1000 INR","1000-1500 INR","1500-2000 INR","2000-2500 INR","more than 2500 INR"]
const FilterComponent = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const clearFilters = () => {
        setFilters({});
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
                <Filter size={20} />
                <span>Filters</span>
            </div>
            <select name="payout" className="border p-2 rounded-md" onChange={handleChange} value={filters.payout || ""}>
                <option value="">Choose Payout</option>
                {PayoutOptions.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <select name="campaignCategory" className="border p-2 rounded-md" onChange={handleChange} value={filters.campaignCategory || ""}>
                <option value="">Choose Category</option>
                {CampaignCategories.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
          
            
            <div className="flex flex-row space-x-2">
                <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={clearFilters}>
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default FilterComponent;
