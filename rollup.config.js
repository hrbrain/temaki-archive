import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const config = {
    input: 'src/index.tsx',
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
                    'useRef',
                    'useReducer',
                    'useCallback',
                    'useEffect',
                    'useMemo'
                ],
                'node_modules/react-dom/index.js': ['render', 'hydrate'],
                'node_modules/react-is/index.js': [
                    'isElement',
                    'isValidElementType',
                    'ForwardRef'
                ]
            }
        }),
        babel({ extensions, include: ['src/**/*'] })
    ]
}

export default config
