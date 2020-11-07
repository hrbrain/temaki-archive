import * as React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '~/modules/theme'

type TreeNode = {
    label: string
    value: string
    children?: TreeNode[]
}

type TreeNodeProps = TreeNode & {
    selectedValues: string[]
}

const TreeNode: React.FC<TreeNodeProps> = props => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClick = React.useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])
    const isSelected = React.useMemo(
        () => props.selectedValues.includes(props.value),
        [props]
    )

    return (
        <Wrapper>
            <p onClick={onClick}>
                {isSelected ? '☑️' : '□'} {props.label}
            </p>
            {isOpen &&
                props.children !== undefined &&
                props.children.map(child => (
                    <TreeNode
                        {...child}
                        selectedValues={props.selectedValues}
                        key={child.value}
                    />
                ))}
        </Wrapper>
    )
}

type RootNodeProps = {
    treeNodes: TreeNode[]
    selectedValues: string[]
}

const RootNode: React.FC<RootNodeProps> = props => (
    <>
        {props.treeNodes.map(treeNode => (
            <TreeNode
                {...treeNode}
                selectedValues={props.selectedValues}
                key={treeNode.value}
            />
        ))}
    </>
)

const Wrapper = styled.div`
    margin-left: 20px;
`

const treeNodes: TreeNode[] = [
    {
        label: 'label1',
        value: 'value1',
        children: [
            {
                label: 'label1-1',
                value: 'value1-1',
                children: [
                    {
                        label: 'label1-1-1',
                        value: 'value1-1-1'
                    }
                ]
            },
            {
                label: 'label1-2',
                value: 'value1-2',
                children: [
                    {
                        label: 'label1-2-1',
                        value: 'value1-2-1'
                    }
                ]
            }
        ]
    },
    {
        label: 'label2',
        value: 'value2'
    }
]

const props: RootNodeProps = {
    selectedValues: ['value1-1', 'value1-1-1', 'value2'],
    treeNodes: treeNodes
}

storiesOf('Components|DropdownMultipleHierarchy', module).add('default', () => (
    <div className="ml-20 mt-10">
        <RootNode {...props} />
    </div>
))
