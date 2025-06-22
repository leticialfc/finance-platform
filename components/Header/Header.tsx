import { UserButton, ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';
import { Loader2 } from 'lucide-react';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <HeaderLogo />
                    <Navigation />
                </div>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="size-8 animate-spin text-slate-400" />
                </ClerkLoading>
            </div>
        </header>
    );
}

export default Header;