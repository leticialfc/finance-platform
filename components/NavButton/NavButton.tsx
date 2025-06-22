import Link from 'next/link';
import { Button } from '../ui/button';
import styles from './NavButton.module.css';
import clsx from 'clsx';

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}

const NavButton = ({ href, label, isActive }: Props) => {
    return (
        <Button
            asChild
            size="sm"
            variant="outline"
            className={clsx(styles.button, { [styles.active]: isActive })}
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

export default NavButton;