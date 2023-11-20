"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import CosmeticsType from "./CosmeticsType";
import { MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Popover, ConfigProvider } from 'antd';
import { Button } from "./ui/button";
import { Button as ButtonAntd, message, Popconfirm } from 'antd';
import { Trash, Edit } from "lucide-react";


const confirm = (e: React.MouseEvent<HTMLElement> | undefined) => {
	console.log(e);
	message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement> | undefined) => {
	console.log(e);
	message.error('Click on No');
};

const content = (
	<div className="flex gap-2">

		{/* Button Edit */}
		<Button variant="outline">
			<Edit size={17} />
		</Button>

		{/* Button Delete */}
		<Popconfirm
			title="Are you sure to delete this item?"
			onConfirm={confirm}
			onCancel={cancel}
			okText="Yes"
			cancelText="No"
			placement="bottomLeft"
		>
			<Button variant="destructive">
				<Trash size={17} />
			</Button>
		</Popconfirm>
	</div>
);


const ProductCard = () => {
	return (
		<div>
			<Card className="flex flex-col gap-4 border-none shadow-none">

				{/* Step number */}
				<div className="flex gap-1 items-center">
					<Popover placement="bottomLeft" content={content}>
						<Button variant="outline">
							Step 1
						</Button>
					</Popover>
				</div>

				{/* Image of the product */}
				<CardHeader className="p-0">
					<Image
						src="https://picsum.photos/200"
						alt="Product Image"
						width={200}
						height={150}
						className="w-full h-full object-cover rounded-md"
					/>
				</CardHeader>

				<CardContent className="p-0">
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