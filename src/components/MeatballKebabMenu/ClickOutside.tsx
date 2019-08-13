import * as React from 'react'

type Props = {
    onClickOutside: () => void
    inactive: boolean
    className?: string
}

export const Component = React.memo<Props>(({ className }) => {
    return <div className={className}></div>
})
