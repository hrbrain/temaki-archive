import * as React from 'react'

const eventListenerOption = {
    once: false,
    passive: true,
    capture: true
}

type Props = {
    onClickOutside?: (e: React.MouseEvent<unknown>) => void
    inactive?: boolean
    className?: string
}
export const Component: React.FC<Props> = ({
    onClickOutside,
    className,
    children
}) => {
    const divRef = React.useRef<HTMLDivElement>(null)

    const handle = (evt: React.MouseEvent<unknown>) => {
        if (!divRef.current) return
        if (!divRef.current.contains(evt.target as Node) && !!onClickOutside) {
            onClickOutside(evt)
        }
    }

    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        document.addEventListener('click', handle as any, eventListenerOption)
        return () => {
            // eslint-disable-next-line no-undef
            document.removeEventListener('click', handle as any, true)
        }
    }, [])

    return (
        <div className={className} ref={divRef}>
            {children}
        </div>
    )
}
