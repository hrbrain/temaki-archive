import { text } from '@storybook/addon-knobs'
import * as Storybook from '@storybook/react'
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

Storybook.storiesOf('Components/Illustration', module)
    .add('SVG as string', () => (
        <Illustration.Component
            svg={IllustrationFiles.illustrations.Sample}
            size={{
                width: text('Size Width', '401px'),
                height: text('Size Height', '276px')
            }}
        />
    ))
    .add('SVG as Element', () => (
        <Illustration.Component
            svg={<SVGComponent />}
            size={{
                width: text('Size Width', '401px'),
                height: text('Size Height', '276px')
            }}
        />
    ))
