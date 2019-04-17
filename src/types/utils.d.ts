import * as React from 'react'
import { Subtract } from 'utility-types'

export type GetProps<C> = C extends React.ComponentType<infer P> ? P : never
export type ContainerType<OwnProps, InjectProps> = <P extends InjectProps>(
  props: { Presenter: React.ComponentType<P> } & OwnProps & Subtract<P, InjectProps>
) => React.ReactElement
