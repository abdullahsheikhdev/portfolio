import RotatingText from "../components/UI/RotatingText";

const Home = () => {
  return (
    <div>
      <section className="bg-[#121212] text-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-yellow-400">ABDULLAH</span> 👋
          </h1>

          <div className="flex items-center gap-2">
            <h1 className="font-extrabold text-3xl">Creative</h1>
            <RotatingText
              texts={["Thinking", "Coding", "components"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-white font-extrabold text-3xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>

          {/* Tagline */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
            A passionate{" "}
            <span className="text-yellow-400">Frontend Developer</span>
            who loves crafting modern, responsive, and user-friendly web
            experiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
