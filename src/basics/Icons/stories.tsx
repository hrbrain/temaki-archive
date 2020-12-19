import * as Knobs from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '../../lib/iconFiles'

Storybook.storiesOf('basics|Icons', module).add('index', () => {
    const iconElements = Object.keys(IconFiles.icons).map(
        compose(
            renderIcon(Knobs.color('カラー', '#888')),
            toSvgRawWithName(IconFiles.icons)
        )
    )

    return <div className="flex flex-wrap w-64">{iconElements}</div>
})

const compose = (...functions: ((arg: any) => any)[]) => (arg: any) =>
    functions.reduceRight((p, f) => f(p), arg)

const toSvgRawWithName = (iconMap: { [key: string]: string }) => (
    key: string
) => ({
    html: iconMap[key],
    name: key
})

const renderIcon = (fill?: string) => (arg: {
    html: string
    name: string
}): React.ReactElement => (
    <Wrapper>
        <Icon dangerouslySetInnerHTML={{ __html: arg.html }} fill={fill} />
        <Name>{arg.name}</Name>
    </Wrapper>
)

type IconProps = {
    fill?: string
}
const Wrapper = styled.div`
    margin-top: 12px;
    margin-left: 4px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Icon = styled.div<IconProps>`
    & #fill {
        fill: ${props => props.fill};
    }
`
const Name = styled.p`
    font-size: 9px;
`
