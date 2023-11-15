import ProductCard from "@/components/ProductCard";

const RoutineCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default RoutineCard