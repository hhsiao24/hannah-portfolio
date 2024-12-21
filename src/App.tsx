import '@mantine/core/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import { Header } from './components/Header/Header';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
