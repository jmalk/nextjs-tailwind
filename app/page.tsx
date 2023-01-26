import Image from "next/image";

const name = "Quaker Oat So Simple Golden Syrup Porridge Sachets 10x36g";

export default function Home() {
  return (
    // Product list
    <div id="product-list" className="h-screen w-screen bg-slate-90 p-4">
      {/* Product card */}
      <div
        id="product-card"
        className="flex h-96 w-52 flex-col rounded bg-white shadow-sm"
      >
        <div id="image-container" className="w-full grow p-2">
          <Image
            src="/images/quaker-oats.jpg"
            alt={name}
            width={278}
            height={278}
          />
        </div>
        <h2 className="mb-4 grow cursor-pointer px-2 text-sm font-medium text-zinc-800 hover:text-teal-900">
          {name}
        </h2>
        <div className="grow p-2">
          <p className="text-sm font-normal text-neutral-500">360 grams</p>
          <p className="text-base font-semibold text-zinc-800">£3.10</p>
        </div>
        <button className="flex grow cursor-pointer items-center justify-between rounded-b bg-teal-600 p-2 text-sm font-medium text-white">
          <span>Add to basket</span>
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
}
