import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-darkGray">
      <div className="h-full flex justify-center items-center mx-auto gap-6 px-6 md:flex-row pt-12 pb-12">
        <div className="relative flex justify-center w-1/2 bg-transparent text-white z-10">
          <div className="flex flex-col space-y-5 justify-center items-center w-full bg-transparent">
            <h1 className="max-w-md text-[2rem] md:text-[3rem] font-extrabold">Greetings!</h1>
            <div className="text-xl font-semibold">
              I&apos;m <span className="text-darkPurple">Michael.</span>
            </div>
            <div className="text-xl font-semibold">
              <Typewriter
                options={{
                  strings: [
                    `I'm a Software Engineer`, 
                    "I'm highly adaptable and versatile", 
                    "I specialize in backend development"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: " ( );",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
