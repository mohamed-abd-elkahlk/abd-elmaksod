import Link from "next/link";
import { Button } from "../ui/button";
export default function Hero() {
  return (
    <section className="mt-12 flex flex-col md:flex-row items-center">
      <div className="flex flex-col flex-1">
        <h2 className="text-5xl font-bold">Hi.I'm Mr. Abdulrahman</h2>
        <h3 className="text-3xl font-bold mt-3 text-teal-500">
          Mathematic Teacher
        </h3>
        <p className="mt-6 font-light">
          Enthusiastic math educator passionate about making math fun and
          accessible for all learners. Skilled in using creative methods and
          fostering a growth mindset to unlock student potential. This portfolio
          showcases my dedication to differentiation, collaboration, and
          continuous improvement - all to ignite the mathematician within each
          student.
        </p>
        <div className="flex justify-around mt-6">
          <Link href={"/schedule"}>
            <Button variant={"outline"} className="text-black">
              Lesson Dates
            </Button>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=01080872555">
            <Button className="bg-teal-500">let's talk</Button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-full border-2 items-center justify-center overflow-hidden relative h-[360px] w-[360px] from-yellow-400 to-yellow-700 bg-gradient-to-tr m-auto mt-8">
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
