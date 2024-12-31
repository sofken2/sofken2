import Image from 'next/image';
import { logo_light } from '../res/logo';

export default function Home() {
  return (<main className="max-w-screen-sm mx-auto bg-white bg-opacity-80 p-8">
    <h1>About Us</h1>
    <Image src={logo_light} alt="2部ソフのロゴ" />

    <section>
      <h2>2部ソフって？</h2>
      <p>
        東京電機大学2部ソフトウェア研究部、あるいは二部ソフ研は3Dプリント、電子工作、
        DTM、プログラミングなど、理系のモノづくりを手広くやっている部活です。
      </p>
    </section>

    <section>
      <h2>活動内容</h2>

      <h3>コミケでの部誌の頒布</h3>
      <p>
        年に2回、半年の間の活動を部誌にまとめ、コミケでの頒布を行っています。
      </p>
      <h3>プログラミング</h3>
      <p>
        このサイトの制作や生成AIを使用するためのアプリの制作、MinecraftのMod開発など
        様々な活動を行っています。
        また、部員が得意なプログラム言語やフレームワークなどを教えあうことも出来ます。
      </p>

    </section>
  </main>);
}
