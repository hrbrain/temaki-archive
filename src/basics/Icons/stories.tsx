import * as Knobs from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '../../lib/iconFiles'

Storybook.storiesOf('basics|Icons', module).add('index', () => {
    const iconElements = Object.keys(IconFiles.icons).map(
        compose(
            renderIcon(Knobs.color('カラー', '#888')),
            toSvgRaw(IconFiles.icons)
        )
    )

    return <div className="flex flex-wrap w-64">{iconElements}</div>
})

/* tslint:disable:no-any */
const compose = (...functions: ((arg: any) => any)[]) => (arg: any) =>
    functions.reduceRight((p, f) => f(p), arg)
/* tslint:enable:no-any */

const toSvgRaw = (iconMap: { [key: string]: string }) => (key: string) =>
    iconMap[key]

const renderIcon = (fill?: string) => (html: string): React.ReactElement => (
    <Icon dangerouslySetInnerHTML={{ __html: html }} fill={fill} />
)

type IconProps = {
    fill?: string
}
const Icon = styled.div<IconProps>`
    margin-top: 12px;
    margin-left: 12px;
    & #fill {
        fill: ${props => props.fill};
    }
`
