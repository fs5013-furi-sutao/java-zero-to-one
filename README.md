# 初期設定

### マークダウンファイルのプレビュー確認
1. コマンドパレッド
2. Markdownを入力
3. Markdown：プレビューを横に表示 を選択

### ライブラリのインポート
```bash
yarn
```
### デバッグ実行
```bash
yarn start
```

[localhost](http://localhost:8000/)
でサイトにアクセスできることを確認

実行を停止
```bash
Ctrlキー + Cキー
```

## デプロイまでの流れ
### git操作
自アカウントで以下を実施
1. ブランチを作成
2. 変更内容をコミット
3. 変更内容をプッシュ
4. mainブランチに向けてプルリクエストを作成

### デプロイ
1. fs5013.furi.sutaoアカウントにてプルリクエストからmainへマージ
2. mainブランチに切り替える
3. デプロイコマンドを実行

デプロイコマンド
```bash
yarn deploy
```

https://github.com/fs5013-furi-sutao/java-zero-to-one

<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/theme-docs.svg" alt="A illustration of file that is the @rocketseat/gatsby-theme-docs logo" width="100">
</p>

<h2 align="center">
  Gatsby Starter: Rocket Docs
</h2>

<p align="center">
  Out of the box Gatsby Starter for creating documentation websites easily and quickly. With support for MDX, code highlight, Analytics, SEO and more 🔥 Using the theme: <a href="https://github.com/Rocketseat/gatsby-themes/tree/master/%40rocketseat/gatsby-theme-docs">@rocketseat/gatsby-theme-docs</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-%238257E6.svg" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%238257E6">

  <a href="https://twitter.com/intent/follow?screen_name=rocketseat">
    <img src="https://img.shields.io/twitter/follow/rocketseat.svg?label=Follow%20@rocketseat" alt="Follow @rocketseat" />
  </a>
</p>

## 🚀 Features

- 📝 MDX for docs;
- 🛣 Yaml-based sidebar navigation;
- 📱 Responsive and mobile friendly;
- 🖥 Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support;
- 🥇 SEO (Sitemap, schema.org data, Open Graph and Twitter tags).
- 📈 Google Analytics support;
- 📄 Custom docs schema;
- 🖱 Table of Contents;
- ⚡️ Offline Support & WebApp Manifest;
- and much more 🔥

## ⚡️ Getting started

1. Create the website.

   ```sh
   npx gatsby new rocket-docs https://github.com/rocketseat/gatsby-starter-rocket-docs
   ```

2. Start developing.

   ```sh
   cd rocket-docs
   gatsby develop
   ```

3. Are you ready for launch?

   Your site is now running at `http://localhost:8000`

## 📄 Docs

Looking for docs? Check our live demo and documentation [website](https://rocketdocs.netlify.com).

---

Made with 💜 by Rocketseat :wave: [check our community!](https://discordapp.com/invite/gCRAFhc)
