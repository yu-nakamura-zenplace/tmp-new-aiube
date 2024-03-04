import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode;}) {
  return <>
    <nav>
      <li><Link href={`/about`}>About</Link> </li>
    </nav>
    {children}
  </>
}