import React from 'react'
import styled from 'styled-components'

function LoadingComponent() {
    return (
        <Wrapper>
                <div className="loading">
                    <img src="../images/25.gif" alt="this slowpoke moves" />
                </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .loading{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
`
export default LoadingComponent
