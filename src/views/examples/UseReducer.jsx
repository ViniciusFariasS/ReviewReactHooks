import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { reducer, initialState } from '../../store';
import {numberAdd2, login} from '../../store/actions'

//uma pra multiplicar por 7, dividir 25, parse pra inteiro, adicionar numero n

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [number1, setNumber1] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>}

                <span className="text">{state.number}</span>
                <input type="number" className="input" value={number1} onChange={e => setNumber1(e.target.value)} />
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberMultiply7' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberDivision25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parseInt' })}>parseInt</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAddN', payload: parseInt(number1) })}>Somar Valor</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
