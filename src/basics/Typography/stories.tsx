import { storiesOf } from '@storybook/react'
import * as React from 'react'
import {
    defaultTheme,
    RequiredThemeTextSizePC,
    RequiredThemeTextSizeSP
} from '~/modules/theme'

storiesOf('Basics|Typography', module).add('Body', () => {
    return (
        <>
            <DeviceSection name="PC" theme={defaultTheme.typography.pc} />
            <DeviceSection
                name="SP"
                theme={defaultTheme.typography.sp}
                className="mt-12"
            />
        </>
    )
})

const DeviceSection: React.FC<{
    name: string
    theme: RequiredThemeTextSizePC | RequiredThemeTextSizeSP
    className?: string
}> = ({ name, theme, className }) => (
    <section className={`container p-4 ${className}`}>
        <h1 className="text-4xl">{name}</h1>
        <div className="flex">
            <div className="mt-8 w-64">
                <h2 className="text-xl">Heading</h2>
                <TypoList className="mt-4" sizes={theme.heading} />
            </div>
            <div className="mt-8 w-64">
                <h2 className="text-xl">Body</h2>
                <TypoList className="mt-4" sizes={theme.body} />
            </div>
        </div>
    </section>
)

const TypoList: React.FC<{
    sizes: { [key: string]: string }
    className?: string
}> = ({ sizes, className }) => {
    const keyList = Object.keys(sizes)
    return (
        <ul className={`list-reset ${className}`}>
            {keyList.map(typoListItem(sizes))}
        </ul>
    )
}

const typoListItem = (sizes: { [key: string]: string }) => (key: string) => (
    <li className="mt-2" style={{ fontSize: sizes[key] }}>
        {key} - {sizes[key]}
    </li>
)
