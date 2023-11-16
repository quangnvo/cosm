import ProductCard from "@/components/ProductCard";

const RoutineCard = () => {
    return (
        <div className="p-7 bg-routinecard shadow-md rounded-lg border border-gray-200 flex flex-col gap-6">
            <div>
                <p>Date picker here</p>
                <div className="px-3 py-2 inline-block rounded-lg mb-2 bg-black shadow-sm">
                    <span className="font-medium text-white">Start</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 rounded-md">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default RoutineCard