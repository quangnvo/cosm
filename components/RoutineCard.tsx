import ProductCard from "@/components/ProductCard";
import DatePickerCard from "@/components/DatePickerCard";
import SkinType from "./SkinType";
import CommentForRoutine from "./CommentForRoutine";
import LocationCard from "./LocationCard";

const RoutineCard = () => {
    return (
        <div className="md:container">
            <div className="p-7 bg-routinecard shadow-md lg:rounded-lg border border-gray-200 flex flex-col gap-6">

                {/* Date Picker */}
                <DatePickerCard />

                {/* Location */}
                <LocationCard />

                {/* Skin type */}
                <SkinType />

                <hr />

                {/* Morning routine */}
                <div className="flex flex-col gap-10">
                    <h3>Morning</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10  rounded-md">
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
                <CommentForRoutine routine="Morning routine" />

                <hr />

                {/* Night routine */}
                <div className="flex flex-col gap-10">
                    <h3>Night</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 rounded-md">
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
                <CommentForRoutine routine="Night routine" />

            </div>
        </div>
    )
}

export default RoutineCard