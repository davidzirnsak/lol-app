export default function GrayTesting() {
  return (
    <>
      <p className="mb-3 h3">Gray</p>
      <div className="w-full mb-3 h-[1px] bg-black" />
      <div className="flex w-full flex-wrap gap-3 items-center">
        <div className="w-[100px] aspect-square bg-gray90" />
        <div className="w-[100px] aspect-square bg-gray80" />
        <div className="w-[100px] aspect-square bg-gray70" />
        <div className="w-[100px] aspect-square bg-gray60" />
        <div className="w-[100px] aspect-square bg-gray50" />
        <div className="w-[100px] aspect-square bg-gray40" />
        <div className="w-[100px] aspect-square bg-gray30" />
        <div className="w-[100px] aspect-square bg-gray20" />
        <div className="w-[100px] aspect-square bg-gray10 border-1" />
      </div>
    </>
  );
}
