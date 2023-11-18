"use client"

import React from 'react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { SKIN_TYPES } from '@/constants'


const LocationCard = () => {

	const renderSkinType = () => {
		return SKIN_TYPES.map((skintype) => {
			return <SelectItem value={skintype.name}>{skintype.name}</SelectItem>
		})
	}


	return (
		<div className='flex gap-3 items-center'>
			<div>
				<p>📌 You stay at: </p>
			</div>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="..." />
				</SelectTrigger>
				<SelectContent>
					{renderSkinType()}
				</SelectContent>
			</Select>
		</div>
	)
}

export default LocationCard