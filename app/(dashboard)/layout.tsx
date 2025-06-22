import { Header } from '@/components/Header/Header'
import React from 'react'
import styles from './dashboard.module.css'

type Props = {
    children?: React.ReactNode
}

const layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default layout