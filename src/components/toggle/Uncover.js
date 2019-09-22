import React, { useState } from 'react'
import { Wrapper, Key, Status } from '../../ui/styled';


const Uncover = ({ inners, keyName, isArray }) => {
    const [isOpenInners, setOpenInners] = useState(false);

    const setStatus = (status) => ( isArray ? <Status>{ `[ ${status} ]` }</Status> : <Status>{`{ ${status} }`}</Status> );

    return (
        <>
            <Wrapper onClick={() => setOpenInners(!isOpenInners)}>
                <Key>{keyName}{keyName && ":"}</Key> { isOpenInners ? setStatus('-') : setStatus('+')}
            </Wrapper>
            {isOpenInners && inners}
        </>
    );
};


export default Uncover;