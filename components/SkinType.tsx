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


const SkinType = () => {

    const renderSkinType = () => {
        return SKIN_TYPES.map((skintype) => {
            return <SelectItem value={skintype.name}>{skintype.name}</SelectItem>
        })
    }


    return (
        <>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Skin type" />
                </SelectTrigger>
                <SelectContent>
                    {renderSkinType()}
                </SelectContent>
            </Select>
        </>
    )
}

export default SkinType