import * as Enzyme from 'enzyme'
import * as React from 'react'

import * as IllustrationFiles from '../../lib/illustrationFiles'
import { mountWithTheme } from '../../__test__/utils'
import * as Illustration from './index'

describe('Illustration', () => {
    let wrapper: Enzyme.ReactWrapper

    beforeEach(() => {
        wrapper = mountWithTheme(
            <Illustration.Component
                svg={IllustrationFiles.illustrations.Create}
                size={{
                    width: '401px',
                    height: '276px'
                }}
            />
        )
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })
})
