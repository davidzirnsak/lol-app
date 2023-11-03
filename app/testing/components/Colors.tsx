export default function Colors() {
  return (
    <>
      <p className="mb-3 h3">Colors</p>
      <div className="w-full mb-3 h-[1px] bg-black" />
      <div className="flex w-full flex-wrap gap-3 items-center">
        <div className="w-[100px] aspect-square bg-primary" />
        <div className="w-[100px] aspect-square bg-whiteWarm" />
        <div className="w-[100px] aspect-square bg-blueLight" />
        <div className="w-[100px] aspect-square bg-blue" />
        <div className="w-[100px] aspect-square bg-secondary" />
        <div className="w-[100px] aspect-square bg-white border-1" />
        <div className="w-[100px] aspect-square bg-black" />
      </div>
    </>
  );
}
