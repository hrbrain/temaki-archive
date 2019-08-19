import * as React from 'react'

type Props = {
    onClickOutside: (e: React.MouseEvent<unknown>) => void
}
export const Component: React.FC<Props> = ({ onClickOutside, children }) => {
    const divRef = React.useRef<HTMLDivElement>(null)

    const handle = (evt: React.MouseEvent<unknown>) => {
        if (!divRef.current) return
        if (!divRef.current.contains(evt.target as Node) && !!onClickOutside) {
            onClickOutside(evt)
        }
    }

    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        document.addEventListener('click', handle as any, true)
        return () => {
            // eslint-disable-next-line no-undef
            document.removeEventListener('click', handle as any, true)
        }
    }, [])

    return <div ref={divRef}>{children}</div>
}
