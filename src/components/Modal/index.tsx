import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '~/modules/theme'

import * as Icon from '~/components/Icon'
import * as Button from '~/components/Button'

import * as IconFiles from '~/lib/iconFiles'

type Props = {
    title: string
    buttons?: (Button.Props & { text: string })[]
}

const portalId = document.getElementById('modal') as HTMLDivElement

export const Component: React.FC<Props> = props => {
    return ReactDOM.createPortal(
        <Background>
            <Wrap>
                <Head>
                    <div>{props.title}</div>
                    <Icon.Component svg={IconFiles.icons.Close} size="24" />
                </Head>
                <Body>{props.children}</Body>
                {props.buttons && (
                    <Footer>
                        {props.buttons.map((buttonProps, index) => (
                            <StyledButton key={index} {...buttonProps}>
                                {buttonProps.text}
                            </StyledButton>
                        ))}
                    </Footer>
                )}
            </Wrap>
        </Background>,
        portalId
    )
}

const Background = styled.div`
    position: fixed;
    z-index: 600;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrap = styled.div`
    width: 678px;
    max-height: 678px;
    overflow: scroll;
    background-color: ${props => props.theme.colors.grayScale.S0};
    border-radius: 8px;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid ${props => props.theme.colors.grayScale.S20};
`

const Body = styled.div`
    padding: 24px;
`

const Footer = styled.div`
    padding: 24px;
    border-top: 1px solid ${props => props.theme.colors.grayScale.S20};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const StyledButton = styled(Button.Component)`
    & + & {
        margin-left: 16px;
    }
`
