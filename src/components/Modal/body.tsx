import * as React from 'react'
import styled from '~/modules/theme'

import * as Icon from '~/components/Icon'
import * as Button from '~/components/Button'

import * as IconFiles from '~/lib/iconFiles'

type Props = {
    title: string
    buttons?: (Button.Props & { text: string })[]
    onClose: () => void
}

export const Component: React.FC<Props> = props => {
    return (
        <Background>
            <Wrap>
                <Head>
                    <Title>{props.title}</Title>
                    <IconWrap onClick={props.onClose} data-test="closeIcon">
                        <Icon.Component svg={IconFiles.icons.Close} size="24" />
                    </IconWrap>
                </Head>
                <Body>{props.children}</Body>
                {props.buttons && (
                    <Footer>
                        {props.buttons.map((buttonProps, index) => (
                            <StyledButton
                                key={index}
                                data-test={`button${index}`}
                                {...buttonProps}
                            >
                                {buttonProps.text}
                            </StyledButton>
                        ))}
                    </Footer>
                )}
            </Wrap>
        </Background>
    )
}

const Background = styled.div`
    position: fixed;
    z-index: 600;
    overflow: scroll;
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

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const IconWrap = styled.div`
    cursor: pointer;
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
    min-width: 158px;
    & + & {
        margin-left: 16px;
    }
`
