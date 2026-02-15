import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../../components';
import styles from './MainLayout.module.css';

const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>© 2026 heyy.brew — Learn about coffee, one sip at a time.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
