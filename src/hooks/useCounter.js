import React, { useState } from "react";

export const useCounter = initialValue => {
    const [count, setCount] = useState(initialValue = 100)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}