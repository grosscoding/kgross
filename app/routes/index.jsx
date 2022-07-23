
import Tilt from 'react-parallax-tilt';

export default function Index() {
  return (
    <div className="bg-black w-full h-full" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>

      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>

        <li>
          <Tilt>
            <a href="https://remix.run/tutorials/">
              <img class="w-80 m-auto cursor-pointer hover:scale-105 duration-300 hover:drop-shadow-3xl"src="https://api.daily.dev/devcards/31723f8ebdcc45378a3bed9a9e92cfda.png?r=0l7"></img>
            </a>
          </Tilt>
        </li>

        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

    </div>
  );
}
