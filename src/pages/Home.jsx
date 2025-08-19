const Home = () => {
  return (
    <div>
      <section className="bg-black text-white min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-yellow-400">ABDULLAH</span> 👋
          </h1>

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
