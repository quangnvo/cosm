import ProductCard from "@/components/ProductCard";
import DatePickerCard from "@/components/DatePickerCard";
import SkinType from "./SkinType";
import CommentForRoutine from "./CommentForRoutine";
import LocationCard from "./LocationCard";

const RoutineCard = () => {
    return (
        <div className="p-7 bg-routinecard shadow-md rounded-lg border border-gray-200 flex flex-col gap-6">

            {/* Date Picker */}
            <DatePickerCard />

            {/* Location */}
            <LocationCard />

            {/* Skin type */}
            <SkinType />

            <hr />

            {/* Morning routine */}
            <div>
                <h3>☀️ Morning</h3>
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

            {/* Comment for routine morning */}
            <CommentForRoutine />

            <hr />

            {/* Night routine */}
            <div>
                <h3>🌙 Night</h3>
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

            {/* Comment for routine night */}
            <CommentForRoutine />

        </div>
    )
}

export default RoutineCard