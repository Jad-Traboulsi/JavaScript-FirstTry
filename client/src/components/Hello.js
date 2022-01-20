import React from 'react'

const Hello = ({name}) => {
    const fileName = name || "World"
    return (
        <h1>Hello {fileName}</h1>
    )
}

export default Hello
