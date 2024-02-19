"use client";
import { NAVLINKS } from '@/utils/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type navLinkProps = {
  link: NAVLINKS
}

const NavLink = ({link}: navLinkProps) => {
  const pathName = usePathname();
  return (
    <Link href={link.url} className={`rounded-md py-1 px-2 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
  )
}

export default NavLink