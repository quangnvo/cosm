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
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"


const ProductCard = () => {
	return (
		<div>
			<Card>
				{/* Step number */}
				<div className="flex justify-between pt-3 px-6">
					<div className="flex gap-1 items-center">
						<div className=" bg-gray-200 px-4 py-2 rounded-md shadow-sm">
							<span className="font-semibold">Step 1</span>
						</div>
					</div>
					<div>
						<button>
							<MoreHorizontal />
						</button>
					</div>
				</div>
				<CardHeader>
					<Image
						src="https://picsum.photos/200"
						alt="Product Image"
						width={200}
						height={150}
						className="w-full h-full object-cover rounded-md"
					/>
				</CardHeader>

				<CardContent>
					<div className="flex flex-col gap-3">
						<div className="flex gap-2 items-center">
							<div>
								<p>Name: </p>
							</div>
							<Input type="email" placeholder="..." />
						</div>

						<div className="flex gap-2 items-center">
							<div>
								<p>Type: </p>
							</div>
							<CosmeticsType />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ProductCard