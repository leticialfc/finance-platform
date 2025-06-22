"use client";

import NavButton from '../NavButton/NavButton';
import styles from './Navigation.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { useMedia } from 'react-use';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';


const routes = [
    { href: '/', label: 'Overview' },
    { href: '/transactions', label: 'Transactions' },
    { href: '/accounts', label: 'Accounts' },
    { href: '/categories', label: 'Categories' },
    { href: '/settings', label: 'Settings' },
]

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia('(max-width: 768px)', false);

    const onClick = (href: string) => {
        setIsOpen(false);
        router.push(href);
    };

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className={styles.trigger}>
                    <Button variant="outline" size="sm" className={styles.mobileButton}>
                        <Menu className={styles.menu} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className={styles.sheetContent}>
                    <nav className={styles.mobileNavigation}>
                        {routes.map((route) => (
                            <Button
                                variant={pathname === route.href ? 'secondary' : 'ghost'}
                                key={route.href}
                                onClick={() => onClick(route.href)}
                                className={styles.mobileNavButton}
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <nav className={styles.navigation}>
            {routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}

export default Navigation;