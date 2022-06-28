import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps{
    people:Props['people'],
    setPeople:  React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps>= ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.img){
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                notes: input.note,
            }
        ])
        setInput(
            {
                name: '',
                age: '',
                img: '',
                note: ''
            }
        )
    }

    return(
        <div className="AddToList">
            <input type= "text" placeholder = "Name" value={input.name} onChange = {handleChange} name = 'name' className='AddToList-input' />
            <input type= "text" placeholder = "Age" value = {input.age} onChange = {handleChange} name = 'age' className='AddToList-input' />
            <input type= "text" placeholder = "Image" value={input.img} onChange = {handleChange} name = 'img' className='AddToList-input' />
            <textarea placeholder = "Notes" value={input.note}  onChange = {handleChange} name = 'note' className='AddToList--input' />
            <button className='AddToList-btn' onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddToList    