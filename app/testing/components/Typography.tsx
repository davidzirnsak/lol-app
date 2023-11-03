export default function Typography() {
  return (
    <>
      <p className="mb-3 h3">Typography</p>
      <div className="w-full mb-3 h-[1px] bg-black" />
      <div className="flex w-full flex-col gap-3">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p className="title">Title</p>
        <p className="subtitle">Subtitle</p>
        <p className="paragraph-big">Paragraph Big</p>
        <p className="paragraph-regular">Paragraph Regular</p>
        <p className="button">Button</p>
        <p className="label">Label</p>
      </div>
    </>
  );
}
