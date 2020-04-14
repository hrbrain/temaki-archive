import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import alias from '@rollup/plugin-alias'
import svg from 'rollup-plugin-svg'
import builtIns from 'rollup-plugin-node-builtins'
import path from 'path'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const config = {
    input: 'src/index.tsx',
    external: [
        'styled-components',
        'react',
        'react-dom'
    ],
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: 'HRBrainTemaki'
        }
    ],
    plugins: [
        resolve({ extensions }),
        builtIns(),
        svg(),
        alias({
            entries: [
                { find: '~', replacement: path.resolve(__dirname, 'src') }
            ]
        }),
        cjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'cloneElement',
                    'createContext',
                    'Component',
                    'createElement',
                    'forwardRef',
                    'useImperativeHandle',
                    'Fragment',
                    'useState',
                    'useRef',
                    'useReducer',
                    'useCallback',
                    'useEffect',
                    'useLayoutEffect',
                    'useMemo',
                    'memo'
                ],
                'node_modules/react-dom/index.js': [
                    'render',
                    'hydrate',
                    'createPortal'
                ],
                'node_modules/react-is/index.js': [
                    'isElement',
                    'isValidElementType',
                    'ForwardRef'
                ],
                'node_modules/react-dates/index.js': [
                    'SingleDatePicker',
                    'DateRangePicker'
                ]
            }
        }),
        babel({ extensions, include: ['src/**/*'] })
    ]
}

export default config
