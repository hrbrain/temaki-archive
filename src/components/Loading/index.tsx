import * as React from 'react'
import styled from '~/modules/theme'

import LoadingGif from 'images/loading-sping.gif'

type Props = {
    visible?: boolean
    text?: string
    className?: string
}
export const Component = React.memo<Props>(props => {
    return (
        <Wrap visible={props.visible} className={props.className}>
            <Loading src={LoadingGif} alt="Loading" />
            <Text>{props.text ? props.text : '読み込み中…'}</Text>
        </Wrap>
    )
})

const Wrap = styled.div<{ visible?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
    background-color: ${props => props.theme.colors.grayScale.S0};
    color: ${props => props.theme.colors.primary.default};

    ${props =>
        props.visible &&
        `
            visibility: visible;
            opacity: 1;
            `}
`

const Loading = styled.img`
    width: 100px;
`

const Text = styled.div`
    margin-top: 12px;
`
