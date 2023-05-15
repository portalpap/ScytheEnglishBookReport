import "./App.scss";
import "./Variables.scss";
import TopNav from "./components/navigation/top-nav/TopNav";
import HomePage from "./pages/homePage/HomePage";
import { useCallback, useLayoutEffect, useRef } from "react";

function App() {
  const r = useRef<HTMLDivElement>(null);
  const setScale = useCallback(() => {
    if (!r.current) return;
    r.current.style.transform = `scale(1)`;
    r.current.offsetHeight;
    r.current.style.transform = `scale(${Math.min(
      window.innerWidth / r.current.clientWidth,
      1
    )})`;
  }, []);

  useLayoutEffect(() => {
    if (!r.current) return;
    setTimeout(setScale, 100);
    setTimeout(setScale, 200);
    setTimeout(setScale, 300);
    setTimeout(setScale, 1000);
    window.addEventListener("resize", setScale);
    return () => window.removeEventListener("resize", setScale);
  }, [setScale]);

  return (
    <>
      <div
        ref={r}
        style={{
          minWidth: "fit-content",
          transformOrigin: "top left",
          overflowX: "hidden",
        }}
      >
        <TopNav />
        <main>
          <HomePage />
        </main>
      </div>
    </>
  );
}

export default App;
