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
		<Button variant="outline">Edit</Button>
		<Popconfirm
			title="Delete this cosmetic item"
			description="Are you sure to delete this item?"
			onConfirm={confirm}
			onCancel={cancel}
			okText="Yes"
			cancelText="No"
			placement="bottomRight"
		>
			<Button variant="destructive">
				Delete
			</Button>
		</Popconfirm>
	</div>
);


const ProductCard = () => {
	return (
		<div>
			<Card>
				{/* Step number */}
				<div className="flex justify-between pt-3 px-6">
					<div className="flex gap-1 items-center">
						<div className=" bg-gray-200 px-4 py-2 rounded-md shadow-sm">
							<p className="font-medium">Step 1</p>
						</div>
					</div>
					<div>
						<ConfigProvider>
							<div className="demo">
								<div>
									<Popover placement="bottomRight" content={content}>
										<MoreHorizontal size={20} />
									</Popover>
								</div>
							</div>
						</ConfigProvider>
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