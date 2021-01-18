import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { defaultTheme } from '~/modules/theme'

type SquareProps = {
    color: string
    name: string
}
const Square: React.FC<SquareProps> = ({ name, color }) => (
    <div className="ml-4">
        <div className="h-16 w-16" style={{ backgroundColor: color }} />
        <p className="text-center text-xs mt-2">{name}</p>
    </div>
)

const renderColorsEachKeys = (obj: { [key: string]: string }) => {
    return Object.keys(obj)
        .sort((a, b) => (a > b ? -1 : 1))
        .map((key, index) => <Square key={index} color={obj[key]} name={key} />)
}

storiesOf('Basics/Colors', module).add('all', () => (
    <div className="container p-4">
        <h1 className="text-xl mt-8">Main</h1>
        <h2 className="text-l mt-4">Gray Scale</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.main.grayScale)}
        </div>
        <h2 className="text-l mt-4">Primary</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.main.primary)}
        </div>
        <h1 className="text-xl mt-8">Utility</h1>
        <h2 className="text-l mt-4">Red</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.utility.red)}
        </div>
        <h2 className="text-l mt-4">Highlight Green</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.utility.highlightGreen)}
        </div>
        <h1 className="text-xl mt-8">Main Colors (deprecated)</h1>
        <h2 className="text-l mt-4">Gray Scale</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.grayScale)}
        </div>
        <h2 className="text-l mt-4">Primary</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.primary)}
        </div>
        <h1 className="text-xl mt-8">Utility (deprecated)</h1>
        <h2 className="text-l mt-4">Red</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.utilities.red)}
        </div>
        <h2 className="text-l mt-4">Highlight Green</h2>
        <div className="flex mt-4">
            {renderColorsEachKeys(defaultTheme.colors.utilities.highlightGreen)}
        </div>
    </div>
))
