import React, { useContext, useEffect, useState } from 'react'
import Header from './Header';
import { CounterContext } from '../context/CounterProvider';
import { useCountStore } from '../store/useCounterStore';

const Layout = () => {
    const { count, setCount } = useCountStore();

    // const count = useCountStore((state) => state.count)
    // const setCount = useCountStore((state) => state.setCount)

    return (
        <>
            {count}
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(0)}>reset</button>
            {/* <Header /> */}
        </>

    )
}

export default Layout