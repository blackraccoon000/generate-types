### テンプレート文字列に埋め込むパラメータの型補完用辞書生成ライブラリ

下記`create-message-formatter`にて使用する型情報を生成する。

[create-message-formatter](https://github.com/blackraccoon000/create-message-formatter)

#### 使用例

下記のように`templates`から、`MessageFormatType`のような型情報を生成する。

```typescript
export const templates = {
  a: "Hello {0}, welcome to {1}!",
  b: "Hello {0}, welcome to {1} {2}!",
  c: "Hello {0}",
  d: {
    e: "Hello {0} {1} {2}!",
    f: "Welcome {0} {1} {2} {3}!",
    g: "Welcome {0} {0} {0} {0}!",
  },
} as const
```

```typescript
// 自動生成されたファイルです。手動で変更しないでください。
export type MessageFormatType = {
  "Hello {0}, welcome to {1}!": [string, string]
  "Hello {0}, welcome to {1} {2}!": [string, string, string]
  "Hello {0}": [string]
  "Hello {0} {1} {2}!": [string, string, string]
  "Welcome {0} {1} {2} {3}!": [string, string, string, string]
  "Welcome {0} {0} {0} {0}!": [string]
}
```

#### サンプル

[nextjs14_blog](https://github.com/blackraccoon000/nextjs14_blog)

#### memo

build `npm run build`

npm 公開 `npm publish --access=public`

[@yfnote/generate-types](https://www.npmjs.com/package/@yfnote/generate-types)
