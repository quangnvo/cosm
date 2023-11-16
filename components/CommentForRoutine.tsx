import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


const CommentForRoutine = () => {
    return (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">📝 Your note</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    )
}

export default CommentForRoutine