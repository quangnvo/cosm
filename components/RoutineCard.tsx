import ProductCard from "@/components/ProductCard";
import DatePicker from "@/components/DatePicker";

const RoutineCard = () => {
    return (
        <div className="p-7 bg-routinecard shadow-md rounded-lg border border-gray-200 flex flex-col gap-6">

            {/* Date Picker */}
            <DatePicker />

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