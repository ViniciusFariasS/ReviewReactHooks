import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])
    
    //useCallBack retorna uma função cacheada já o useMemo retorna um valor cacheado

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback