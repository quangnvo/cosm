import ProductCard from "@/components/ProductCard";
import DatePickerCard from "@/components/DatePickerCard";
import SkinType from "./SkinType";
import CommentForRoutine from "./CommentForRoutine";

const RoutineCard = () => {
    return (
        <div className="p-7 bg-routinecard shadow-md rounded-lg border border-gray-200 flex flex-col gap-6">

            {/* Date Picker */}
            <DatePickerCard />

            {/* Skin type */}
            <SkinType />

            {/* Morning routine */}
            <div>
                <h2 className="text-xl font-semibold">🌞 Morning</h2>
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

            {/* Night routine */}
            <div>
                <h2 className="text-xl font-semibold">🌛 Night</h2>
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