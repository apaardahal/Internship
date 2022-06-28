import React, { useRef, useState } from 'react'


interface Props {
    text: string;
    ok?: boolean;
    
}

export const TextField: React.FC<Props> = ({}) => {

    const [count, setCount] = useState<number | null>(5)
    const inputRef = useRef<number>();

    setCount(null)

    return(
        <div>
            <input ref = {}   />
        </div>
    )
}