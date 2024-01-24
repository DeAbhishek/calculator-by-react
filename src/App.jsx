import "./app.css";

function App() {
  return (
    <div className="grid grid-cols-fourlayout grid-rows-sixlayout justify-center mt-8">
      <div className="bg-black/75 col-span-full flex flex-col justify-around items-end p-3 break-words break-all">
        <div className="text-white/75 text-2xl">12,990</div>
        <div className="text-white text-4xl">45,67,890</div>
      </div>

      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl col-span-2">
        AC
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        DEL
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        ÷
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        1
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        2
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        3
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        *
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        4
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        5
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        6
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        +
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        7
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        8
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        9
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        -
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        .
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl">
        0
      </button>
      <button className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl col-span-2">
        =
      </button>
    </div>
  );
}

export default App;
