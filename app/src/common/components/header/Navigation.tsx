import LinkBox from "../ui/LinkBox";

export default function Navigation() {
  const DUMMY_LINKS = [
    { text: "Home", href: "/" },
    { text: "Patch Notes", href: "/" },
    { text: "Leaderboards", href: "/" },
  ];
  return (
    <nav>
      <ul className="flex gap-3 items-center  justify-end">
        {DUMMY_LINKS.map((object, index) => {
          return (
            <li>
              <LinkBox text={object.text} href={object.href} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
