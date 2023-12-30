import Image from 'next/image'
import ServerStatus from '@/components/server-status'

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold">Hello world</h1>
    <ServerStatus />
    </main>
  )
}
