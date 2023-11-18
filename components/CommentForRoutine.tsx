import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


const CommentForRoutine = ({ routine }: { routine: string }) => {
    return (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className='font-medium text-lg'>📝 Your note for {routine}</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    )
}

export default CommentForRoutine