export interface AppProps {
  title?: string;
}

export function App({ title = 'test-internal-v2-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}