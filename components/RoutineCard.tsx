import ProductCard from "@/components/ProductCard";

const RoutineCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 rounded-md p-6 bg-[#F6F5F6]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default RoutineCard