import React, { useEffect, useRef, useDebugValue } from 'react'


export const usePrevious = (value) => {
    const ref = useRef()

    useDebugValue("--- CUSTOM HOOK e USEDEBUGVALUE ---")
    useDebugValue("O número anterior é: " + ref)

    useEffect(() => {
        ref.current = value;
    })

    return ref.current
}