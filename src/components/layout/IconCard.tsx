import Image from "next/image";

export default function IconCard({
  image,
  unoptimized,
}: {
  image: string;
  unoptimized: boolean;
}) {
  return (
    <div className="w-[180px] h-[180px] border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <Image
        src={image}
        alt="Meteor bot"
        width={128}
        height={128}
        className="rounded-xl"
        unoptimized={unoptimized}
      />
    </div>
  );
}
