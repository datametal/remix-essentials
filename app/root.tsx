import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from '@remix-run/react'
import MainNavigation from './components/MainNavigation'
import styles from './styles/main.css'

// export const links: LinksFunction = () => [...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])]
  
export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}


export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{caughtResponse.statusText}</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="error">
          <h1>{caughtResponse.statusText}</h1>
          <p>{caughtResponse.data?.message || 'Something went wrong!'}</p>
          <p>
            Back to <Link to="/">safety</Link>!
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBundle({ error }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className='error'>
          <h1>An error occurred!</h1>
          <p>{error:message}</p>
          <p> Back to <Link to=''>safety</Link></p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
