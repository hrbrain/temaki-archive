import { text } from '@storybook/addon-knobs'
import * as React from 'react'

import * as IllustrationFiles from '~/lib/illustrationFiles'
import * as Illustration from './index'

const SVGComponent = () => (
    <div
        dangerouslySetInnerHTML={{
            __html: IllustrationFiles.illustrations.Sample
        }}
    ></div>
)

export const SvgAsString = () => (
    <Illustration.Component
        svg={IllustrationFiles.illustrations.Sample}
        size={{
            width: text('Size Width', '401px'),
            height: text('Size Height', '276px')
        }}
    />
)

SvgAsString.story = {
    name: 'SVG as string'
}

export const SvgAsElement = () => (
    <Illustration.Component
        svg={<SVGComponent />}
        size={{
            width: text('Size Width', '401px'),
            height: text('Size Height', '276px')
        }}
    />
)

SvgAsElement.story = {
    name: 'SVG as Element'
}
