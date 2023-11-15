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


const ProductCard = () => {
    return (
        <div>
            <div className="flex justify-center">
                {/* <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-semibold">1</span>
            </div> */}
                <div className="px-3 py-2 inline-block rounded-lg mb-2 bg-pink-200 shadow-sm">
                    <span className="font-semibold">Step 1</span>
                </div>
            </div>

            <Card>
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
                    <Badge>Serum</Badge>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCard