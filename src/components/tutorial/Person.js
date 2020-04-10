import React from 'react'

export default function Person({ person }) {
    return (
        <div>
            <h2> I am {person.name}, and I'm {person.age} years old. I know {person.skill}.  </h2>
        </div>
    )
}
