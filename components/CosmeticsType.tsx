"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { COSMETICS_TYPES } from "@/constants"


const CosmeticsType = () => {

    const renderCosmeticsType = () => {
        return COSMETICS_TYPES.map((cosmeticstype) => {
            return <SelectItem value={cosmeticstype.name}>
                {cosmeticstype.name}
            </SelectItem>
        })
    }

    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="..." />
            </SelectTrigger>
            <SelectContent>
                {renderCosmeticsType()}
            </SelectContent>
        </Select>
    )
}

export default CosmeticsType