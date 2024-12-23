import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useScroll } from '@/hooks/useScroll';
import { Header } from './Header';

export const NavigationWrapper = () => {
    const scrollPosition = useScroll();

    return (
        <AppShell>
            <AppShell.Header
                style={{
                    backgroundColor: `rgba(18, 17, 38, ${Math.min(scrollPosition / 200, 0.5)})`,
                    backdropFilter: `blur(${Math.min(scrollPosition / 20, 10)}px)`,
                    boxShadow: `rgba(0, 0, 0, ${Math.min(scrollPosition / 800, 0.2)}) 0 0 20px`,
                    borderColor: `rgba(18, 17, 38, ${scrollPosition / 400})`,
                }}
            >
                <Header />
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
