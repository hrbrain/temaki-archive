import * as React from 'react'
import styled from '~/modules/theme'

import * as IconFiles from '~/lib/iconFiles'
import * as Icon from '~/components/Icon'

/**
 * Component
 */

type Props = {
    listItems: string[]
}

export const Component = React.memo<Props>(({ listItems }) => {
    const [isShow, setIsShow] = React.useState<boolean>(false)
    const handleClick = () => setIsShow(!isShow)

    return (
        <div>
            {/* eslint-disable-next-line */}
            <Meatball onClick={handleClick}>
                {/* アイコンをミートボールに変える */}
                <MeatballItem svg={IconFiles.icons.MenuV} size="24px" />
            </Meatball>

            {isShow && (
                <List>
                    <ListItem>{listItems.map(renderListItem)}</ListItem>
                </List>
            )}
        </div>
    )
})

function renderListItem(item: string): React.ReactElement {
    return <li>{item}</li>
}

/**
 * style
 */
const Meatball = styled.div`
    cursor: pointer;
`
const MeatballItem = styled(Icon.Component)``
const List = styled.div`
    max-width: 140px;
    background: ${props => props.theme.colors.grayScale.S0};
    border-radius: 6px;
    box-shadow: ${props => props.theme.shadows.L5};
    padding: 12px 12px 4px 12px;
`
const ListItem = styled.div`
    padding-bottom: 8px;
    cursor: pointer;
    list-style: none;
`
