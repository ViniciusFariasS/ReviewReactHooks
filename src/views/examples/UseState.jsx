import React from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0) //destructuring, quando você coloca um par de colchetes ao lado esquerdo da expressão voce está lendo os elementos de um array
    const [name, setName] = useState("")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount(count - 1)} className="btn">- 1</button>
                    <button onClick={() => setCount(count + 1)} className="btn">+ 1</button>
                    <button onClick={() => setCount(current => current + 1000)} className="btn">+ 1000</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <input type="text" className="input"
                value={name} onChange={e => setName(e.target.value)}
            />
            <span className="text">
                {name}
            </span>
        </div>
    )
}

export default UseState
