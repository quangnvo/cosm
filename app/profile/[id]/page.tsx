import React from 'react'

const Profile = ({ params }: { params: { id: string } }) => {
    return (
        <div>My profile: {params.id}</div>

    )
}

export default Profile