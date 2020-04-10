import React from 'react'
import Person from './Person'

export default function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kelly',
            age: 35,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Clark',
            age: 24,
            skill: 'Spring Boot'
        },
        {
            id: 4,
            name: 'Tom',
            age: 12,
            skill: '.net'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}
