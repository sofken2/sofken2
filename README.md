<p align="center">
  <a href="https://github.com/sofken2/sofken2" target="_blank"">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./app/res/logo_dark_trimmed.png">
      <source media="(prefers-color-scheme: light)" srcset="./app/res/logo_light_trimmed.png">
      <img alt="2部ソフトウェア研究部" src="./app/res/logo_light_trimmed.png" width="600" height="161" style="max-width: 100%;">
    </picture>
  </a>
</p>
<p align="center">
  東京電機大学2部ソフトウェア研究部ホームページ
</p>

<p align="center">
    <a href="https://github.com/sofken2/sofken2/actions"><img src="https://github.com/sofken2/sofken2/actions/workflows/nextjs.yml/badge.svg?event=push" alt="Build Next,js site" /></a>
</p>


> [!IMPORTANT]
> このホームページは現在開発中です。  
> 開発計画の詳細については[Project](https://github.com/orgs/sofken2/projects/2)を確認してください。


東京電機大学2部ソフトウェア研究部のホームページのリポジトリです。

## Getting Started

### まず初めに

何よりもまず初めに、`git`と`Node.js`がインストールされていて、`PATH`が通っている必要があります。
`git -v`や`node -v`を実行してバージョンが表示されることを確認してください。

```sh
node -v
# => v23.5.0

npm -v
# => 10.9.2

git -v
# => git version 2.47.1.windows.1
```

もし、バージョンが表示されない場合[Node.jsのインストール方法](https://nodejs.org/en/download)と[Gitのインストール方法](https://git-scm.com/book/ja/v2/使い始める-Gitのインストール)を見てインストールしておいてください。`winget`が使えるようなら`winget install OpenJS.NodeJS Git.Git`でもいいですよ。

> [!TIP]
> このリポジトリにはVSCode用の設定や拡張機能の推奨が含まれています。  
> 特にエディタに好みがないならVSCodeを使うことをおすすめします。

### 開発の下準備

次にこのリポジトリを`clone`しましょう。ページ右上の`<> Code`からリポジトリのURLをコピーできます。

```sh
cd your-workspace-dir # 適宜書き換えてください
git clone https://github.com/sofken2/sofken2.git
ls sofken2
```

> [!TIP]
> ホームディレクトリ（`C:/Users/name/`）の直下やドキュメントフォルダに作成するのはおすすめしません。  
> ディレクトリが散らかったり、OneDriveにアップロードされてしまうからです。  
> `C:/Users/name/workspace`などを作成することをおすすめします。

`ls sofken2`を実行してファイル一覧が表示されれば成功です。

最後に`npm install`を実行すれば下準備は完了です。5分かそれ以上かかる場合もあるのでゆっくり待ちましょう。

```sh
npm install
```

### 開発サーバーの実行

コードに変更を加える前に、開発サーバーを実行しましょう。
開発サーバーは開発中のWebサイトを確認できるだけでなく、コードに加えた変更が自動的に適用され、すぐにブラウザで確認できるようになるのでとても便利です。

```sh
npm run dev
```

10秒程度で`✓ Ready in XX.Xs`と表示されるので、[http://localhost:3000](http://localhost:3000)を開いて結果を見ましょう。

---
> 以下は`create-next-app`時に作成された`README.md`の残りです

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
