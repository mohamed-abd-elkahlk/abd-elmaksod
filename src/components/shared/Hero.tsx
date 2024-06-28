import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="mt-12 flex flex-col md:flex-row items-center">
      <div className="flex flex-col flex-1">
        <h2 className="text-5xl font-bold">Hi.I'm Mr. Abdo</h2>
        <h3 className="text-3xl font-bold mt-3 text-teal-500">
          Mathematic Teacher
        </h3>
        <p className="mt-6 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
          voluptatum deserunt suscipit exercitationem qui, cum incidunt, ipsa
          expedita cumque amet sed blanditiis? Beatae dolor, laboriosam expedita
          debitis non explicabo a.
        </p>
        <div className="flex justify-around mt-6">
          <Button variant={"outline"} className="text-black">
            Hire me
          </Button>
          <Button className="bg-teal-500">let's talk</Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-full border-2 items-center justify-center overflow-hidden relative h-[360px] w-[360px] from-yellow-400 to-yellow-700 bg-gradient-to-tr m-auto">
          <img
            src="/avatar.png"
            alt=""
            width={120}
            height={120}
            className="absolute left-0 right-0 m-auto w-full "
          />
        </div>
      </div>
    </section>
  );
}
