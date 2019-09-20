function fn() {
    return null
}

declare module 'babel-plugin-require-context-hook/register' {
    /* eslint-disable import/no-default-export */
    export = fn
    /* eslint-enable import/no-default-export */
}
