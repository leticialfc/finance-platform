import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Image from 'next/image';
import styles from '../../page.module.css';

export default function Page() {
  return <div className={styles.authPage}>
    <div className={styles.leftPane}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.subtitle}>Log in or Create account to get back to your dashboard!</p>
      </div>
      <ClerkLoaded><SignUp /></ClerkLoaded>
      <ClerkLoading>
        <div className={styles.loaderContainer} >
          <Loader2 className='animate-spin text-muted-foreground' />
        </div>
      </ClerkLoading>
    </div>
    <div className={styles.rightPane}><Image src="/logo.svg" alt="Logo" height={100} width={100} /></div>
  </div>;
}