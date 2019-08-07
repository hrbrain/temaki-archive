import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
    isShow: boolean
    listItem: string
}

// ・・・
export const Component = React.memo<Props>(({ onClick, listItem }) => {
    return (
        <Outer>
            <Meatball
                onClick={onClick}
                // onClick={e => isShow(e.currentTarget.getBoundingClientRect(true))}
            >
                {/** TODO: IconをMenuHに変える */}
                <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
            </Meatball>
            <List>
                <ListItem onClick={onClick}>{listItem}</ListItem>
            </List>
        </Outer>
    )
})

/**
 * style
 */
const Outer = styled.div``
const Meatball = styled.div`
    cursor: pointer;
`
const MeatballItem = styled(Icon.Component)``
const List = styled.div``
const ListItem = styled.div`
    cursor: pointer;
`
