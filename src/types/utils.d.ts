export type GetProps<C> = C extends React.ComponentType<infer P> ? P : never
