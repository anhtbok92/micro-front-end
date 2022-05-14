import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter();

  const handleHref = (href = '') => {
    const domain = 'http://localhost:3000/'
    router.push(domain + href);
  }

  return (
    <nav style={{ border: '1px solid', marginTop: '20px' }}>
      <Link href={'../'}>
        <a>Home</a>
      </Link>
      <a style={{ marginLeft: '20px' }} onClick={() => handleHref('vendor')} >Vendor</a>
    </nav>
  );
}

export default Header;
