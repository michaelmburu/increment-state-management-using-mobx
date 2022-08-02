import {useState} from 'react';
import {observer} from 'mobx-react-lite';
export const CounterButton = observer(({counter}) => {

    const[incrementBy, setIncrementBy] = useState(1);

    return (
        <>
            <p>You have clicked the button {counter.numberOfClicks} times</p>
            <label>Increment By</label>
            <input value={incrementBy} type="number" onChange={e => setIncrementBy(Number(e.target.value))}/>
            <button onClick={() => counter.increment(incrementBy)}>Increment</button>
        </>
    )

})