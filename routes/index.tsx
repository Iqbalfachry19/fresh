/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import Icon from 'preact-material-components/Icon';
import { useState } from 'preact/hooks';
export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <div class={tw` mx-auto mt-40 max-w-screen-md`}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <header
        class={tw` fixed left-0  right-0 top-0 flex bg-blue-400 justify-center items-center `}
      >
        <img
          class={tw`w-10 h-10 justify-center`}
          src="/logogram__ktbs_white.png"
        />
        <div class={tw`flex  bg-blue-300 rounded-lg m-4`}>
          <input
            class={tw`w-[400px]  py-6 px-4 bg-blue-300 outline-none rounded-lg text-white placeholder-gray-200 h-4 justify-center `}
            type="text"
            placeholder="Semangat Kemerdekaan cari 'veteran'"
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          />
          <div class={tw`items-center flex mt-2 cursor-pointer text-white  `}>
            <Icon class={tw`w-8 h-8`}>search</Icon>
          </div>
        </div>
      </header>
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <nav>
        <a href="/html/">Donasi</a> |<a href="/css/">Galang Dana</a> |
        <a href="/js/">JavaScript</a> |<a href="/python/">Python</a>
      </nav>
    </div>
  );
}
