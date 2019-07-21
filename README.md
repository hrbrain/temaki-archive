Temaki
===

## Getting started 

使いたいプロジェクトから `yarn` もしくは `npm` でインストールします   
インストールには Github へのアクセス権限が必要です

```bash
$ yarn add hrbrain/temaki # or use npm
```

### Setup the theme

コンポーネント内のスタイル情報は `styled-components` の `ThemeProvider` によって提供されています   
あなたのプロジェクトのルートコンポーネントに `ThemeProvider` を追加して下さい

```tsx
import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeRequiredProps, defaultTheme, Text } from 'hrb-temaki'

const myTheme: ThemeRequiredProps = {
  ...defaultTheme,
  text: '#000'
}

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Text>Hello</Text>
    </ThemeProvider>
  )
}

render(<App />, document.querySelector('#app'))
```

## Contribution guide

依存ファイルをインストールして `Storybook` を起動してください [http://localhost:6006](http://localhost:6006)

```bash
$ yarn install
$ yarn start 
```

以下のアドオンが使えます
- knobs
- storysource (Not working)
- actions
- a11y

Storybook 内では[tailwind](https://tailwindcss.com)を使うことが出来ます   

### フォルダールール 
#### Basics
```
src/components
└── Text // <- Component name
    ├── __snapshots__ // <- jest で作成された snapshots 
    ├── index.spec.tsx // <- テスト 
    ├── index.tsx             
    └── stories.tsx   // <- Storybook 
```

#### Large size or Multiple exporting components
```
src/components
└── Datepicker
    ├── __snapshots__ 
    ├── conatiners/  // <- View logics 
    ├── presentors/  // <- Pure jsx
    ├── index.spec.tsx 
    ├── index.tsx    // <- ロジックとViewをconnectしてエクスポートする 
    └── stories.tsx
```

### Before your publishing

このプロジェクトでは `dist` フォルダを公開しているため、[husky](https://github.com/typicode/husky) を使用して自動ビルドをかけるようにしています   
`git commit` 毎にビルドと `git add` をしているので改めてビルドする必要はありません   

手動でビルドしたい場合や `lint` を書けたい場合は以下のコマンドを用意しています

```bash
# Linter の起動
$ yarn lint
# 自動 Lint
$ yarn lint-:fix

# ビルド
$ yarn build
```

### リリース

`package.json` のバーションを編集し、 `Github Releases` から新しいリリースを作成してください
