import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import * as Icons from "react-icons/go";

// Pages
import RootLayout from "./layouts/RootLayout";
import GameLayout from "./layouts/GameLayout";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Inventory from "./pages/Inventory";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  const [audioPlay, setAudioPlay] = useState(false);
  const [audioName, setAudioName] = useState("mainmusic");
  const [muted, setMuted] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/hogwarts-magic-cards" element={<RootLayout />}>
          <Route
            index
            path="/hogwarts-magic-cards/"
            element={<Home setAudioName={setAudioName} />}
          />
          <Route
            path="/hogwarts-magic-cards/inventory"
            element={<Inventory setAudioName={setAudioName} />}
          />
          <Route
            path="/hogwarts-magic-cards/account"
            element={<Account setAudioName={setAudioName} />}
          />
          <Route
            path="/hogwarts-magic-cards/login"
            element={<Login setAudioName={setAudioName} />}
          />
          <Route
            path="/hogwarts-magic-cards/register"
            element={<Register setAudioName={setAudioName} />}
          />
        </Route>
        <Route path="/hogwarts-magic-cards" element={<GameLayout />}>
          <Route
            path="/hogwarts-magic-cards/play"
            element={<Play setAudioName={setAudioName} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  const AudioIcons = audioPlay && !muted ? Icons.GoUnmute : Icons.GoMute;

  /* eslint-disable */
  return (
    <div tabIndex="0" role="button" onClick={() => setAudioPlay(true)}>
      <ReactPlayer
        volume={0.1}
        loop
        playing={audioPlay}
        url={`./assets/audio/${audioName}.mp3`}
        style={{ display: "none" }}
        muted={muted}
      />
      <AudioIcons
        onClick={() => setMuted(!muted)}
        className="audioIcons"
        style={{ zIndex: 3 }}
      />
      <RouterProvider router={router} />
    </div>
  ); /* eslint-enable */
}

export default App;
