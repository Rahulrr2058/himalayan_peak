import { useState } from "react";
import { Checkbox, Slider, Select, Button } from "@mantine/core";
import { ShoppingCart } from "lucide-react";

const Marketplace = () => {
    const marketplaceData = {
        categories: [
            "Thangka Art",
            "Handicrafts",
            "Pashmina Shawls",
            "Himalayan Jewelry",
            "Singing Bowls",
            "Tea & Spices",
        ],
        availability: ["In Stock", "Out of Stock"],
        products: [
            { id: 1, name: "Traditional Thangka Painting", price: 159.99, image: "https://via.placeholder.com/200" },
            { id: 2, name: "Himalayan Singing Bowl", price: 89.99, image: "https://via.placeholder.com/200" },
            { id: 3, name: "Pashmina Shawl", price: 49.99, image: "https://via.placeholder.com/200" },
            { id: 4, name: "Himalayan Handmade Bag", price: 34.99, image: "https://via.placeholder.com/200" },
            { id: 5, name: "Handcrafted Paper Diary", price: 19.99, image: "https://via.placeholder.com/200" },
            { id: 6, name: "Nepali Prayer Flags", price: 9.99, image: "https://via.placeholder.com/200" },
            { id: 7, name: "Himalayan Organic Outline", price: 29.99, image: "https://via.placeholder.com/200" },
            { id: 8, name: "Himalayan Prayer Flags", price: 9.99, image: "https://via.placeholder.com/200" },
            { id: 9, name: "Himalayan Prayer Flags", price: 9.99, image: "https://via.placeholder.com/200" },
        ],
    };

    // Filter states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [availability, setAvailability] = useState([]);
    const [sortOption, setSortOption] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter products
    const filteredProducts = marketplaceData.products
        .filter((product) => {
            const inCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.name.split(" ")[0]); // Simplified category matching
            const inPriceRange =
                product.price >= priceRange[0] && product.price <= priceRange[1];
            return inCategory && inPriceRange;
        })
        .sort((a, b) => {
            if (sortOption === "Price: Low to High") return a.price - b.price;
            if (sortOption === "Price: High to Low") return b.price - a.price;
            return 0; // Default to "Newest" (no sorting for simplicity)
        });

    // Pagination
    const productsPerPage = 9;
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // Handlers
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleAvailabilityChange = (option) => {
        setAvailability((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    const handleApplyFilters = () => {
        console.log("Filters applied:", { selectedCategories, priceRange, availability });
    };

    return (
        <div className="font-lexend py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Sidebar - Filters */}
                <aside className="lg:w-64 bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-bold uppercase mb-4">Categories</h2>
                    <div className="space-y-2">
                        {marketplaceData.categories.map((category) => (
                            <Checkbox
                                key={category}
                                label={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                                className="text-sm"
                            />
                        ))}
                    </div>

                    <h2 className="text-lg font-bold uppercase mt-6 mb-4">Price Range</h2>
                    <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={priceRange}
                        onChange={setPriceRange}
                        label={(value) => `$${value}`}
                        className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>

                    <h2 className="text-lg font-bold uppercase mt-6 mb-4">Availability</h2>
                    <div className="space-y-2">
                        {marketplaceData.availability.map((option) => (
                            <Checkbox
                                key={option}
                                label={option}
                                checked={availability.includes(option)}
                                onChange={() => handleAvailabilityChange(option)}
                                className="text-sm"
                            />
                        ))}
                    </div>

                    <Button
                        onClick={handleApplyFilters}
                        color="black"
                        radius="md"
                        className="w-full mt-6"
                    >
                        Apply Filter
                    </Button>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Featured</h2>
                        <Select
                            value={sortOption}
                            onChange={setSortOption}
                            data={["Newest", "Price: Low to High", "Price: High to Low"]}
                            defaultValue="Newest"
                            className="w-48"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paginatedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-md font-bold">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <button className="mt-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                        <ShoppingCart size={16} className="text-gray-700" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8 space-x-2">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                            &lt;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded ${
                                    currentPage === page ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;