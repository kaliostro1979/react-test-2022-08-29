import React, {useEffect, useRef} from 'react';

const TestForRef = () => {
    const ref = useRef(null)

    useEffect(() => {
        console.log(ref.current);
    }, [])

    return (
        <div>
            <div className={"test"} ref={ref}>
            </div>
            <input type="text"/>
        </div>
    );
};

export default TestForRef;