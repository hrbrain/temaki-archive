module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)?$': '<rootDir>/src/__test__/transform.ts',
        '^.+\\.[tj]sx?$': 'babel-jest'
    },
    testRegex: '(\\.|/)(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    unmockedModulePathPatterns: [
        '<rootDir>/node_modules/react',
        '<rootDir>/node_modules/react-dom',
        '<rootDir>/node_modules/react-addons-test-utils'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/__test__/__mocks__/fileMock.js',
        '^~/(.+)': '<rootDir>/src/$1'
    },
    setupFiles: ['<rootDir>/src/__test__/setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer']
}
