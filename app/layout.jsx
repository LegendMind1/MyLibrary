import './globals.css'

export const metadata = {
  title: 'Legendmind Library',
  description: 'My Referenc Code and Library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
