import * as React from 'react'

type Props = {
    onClickOutside: (e: React.MouseEvent<unknown>) => void
    inactive?: boolean
}
export const Component: React.FC<Props> = props => {
    const divRef = React.useRef<HTMLDivElement>(null)

    const handle = (evt: React.MouseEvent<unknown>) => {
        if (!divRef.current) return
        if (
            !divRef.current.contains(evt.target as Node) &&
            !!props.onClickOutside
        ) {
            props.onClickOutside(evt)
        }
    }

    React.useEffect(() => {
        document.removeEventListener('click', handle as any, true)

        if (props.inactive) return
        document.addEventListener('click', handle as any, true)

        return () => {
            document.removeEventListener('click', handle as any, true)
        }
    }, [props.inactive])

    return <div ref={divRef}>{props.children}</div>
}
