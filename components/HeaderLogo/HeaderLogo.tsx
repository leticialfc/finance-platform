import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className={styles.logo}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                />
                <p className={styles.logoText}>Finance</p>
            </div>
        </Link>
    )
}

export default HeaderLogo;