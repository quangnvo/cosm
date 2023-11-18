import RoutineCard from '@/components/RoutineCard'
import React from 'react'

const Routine = () => {
    return (
        <div className="py-20">
            <div>
                <h1 className="container mb-10">
                    Your routine
                </h1>

                <RoutineCard />
            </div>
        </div>
    )
}

export default Routine