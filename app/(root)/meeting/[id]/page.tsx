import React from 'react'

// Here in the props, you can only name the params as what you have named the [folderName]. 
const Meeting = ({ params }: { params: { id: string } }) => {
    return (
        <div>The meeting id is: {params.id}</div>
    )
}

export default Meeting