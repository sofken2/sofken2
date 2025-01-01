import Link from 'next/link';

export default function Design() {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
    + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '
    + 'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '
    + 'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '
    + 'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in '
    + 'culpa qui officia deserunt mollit anim id est laborum.';
  const mankind = 'https://ja.wikipedia.org/wiki/'
    + '%E3%83%8B%E3%83%BC%E3%82%A2_%E3%82%AA%E3%83%BC%E3%83%88%E3%83%9E%E3%82%BF';

  return (<main className="max-w-screen-sm mx-auto bg-white bg-opacity-80 p-8">
    <p>{lorem}</p>
    <p>For the Glory of <Link href={mankind}>Mankind</Link>. {lorem}</p>
    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
      </li>
    </ol>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </li>
    </ul>
    <section><h1>Heading 1</h1><p>{lorem}</p></section>
    <section><h2>Heading 2</h2><p>{lorem}</p></section>
    <section><h3>Heading 3</h3><p>{lorem}</p></section>
    <section><h4>Heading 4</h4><p>{lorem}</p></section>
    <section><h5>Heading 5</h5><p>{lorem}</p></section>
    <section><h6>Heading 6</h6><p>{lorem}</p></section>
    <p>{lorem}</p>
    <p>{lorem}</p>
  </main>);
};
