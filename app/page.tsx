import Image from "next/image";

const name = "Quaker Oat So Simple Golden Syrup Porridge Sachets 10x36g";

export default function Home() {
  return (
    // Product list
    <div id="product-list" className="bg-slate-90 h-screen w-screen p-4">
      {/* Product card */}
      <div
        id="product-card"
        className="bg-white w-52 h-96 flex flex-col rounded shadow-sm"
      >
        <div id="image-container" className="w-full p-2 grow">
          <Image
            src="/images/quaker-oats.jpg"
            alt={name}
            width={278}
            height={278}
          />
        </div>
        <h2 className="grow px-2 mb-4 font-medium text-sm text-zinc-800 hover:text-teal-900 cursor-pointer">
          {name}
        </h2>
        <div className="grow p-2">
          <p className="text-neutral-500 text-sm font-normal">360 grams</p>
          <p className="text-zinc-800 text-base font-semibold">£3.10</p>
        </div>
        <button className="bg-teal-600 text-white grow flex justify-between items-center p-2 rounded-b cursor-pointer font-medium text-sm">
          <span>Add to basket</span>
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
}
