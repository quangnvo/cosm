import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import CosmeticsType from "./CosmeticsType";

const ProductCard = () => {
    return (
        <div>


            <Card className=" relative">
                {/* <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center mb-2">
                    <span className="font-semibold">1</span>
                </div> */}
                {/* Step number */}
                <div className="absolute top-0 transform translate-x-4 -translate-y-5 bg-gray-200 px-4 py-2 rounded-md shadow-sm">
                    <span className="font-semibold">Step 1</span>
                </div>

                <CardHeader>
                    <Image
                        src="https://picsum.photos/200"
                        alt="Product Image"
                        width={200}
                        height={150}
                    />
                </CardHeader>

                <CardContent>
                    <p>The Ordinary Hyaluronic Acid 2% + B5</p>
                </CardContent>

                <CardFooter>
                    <CosmeticsType />
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCard