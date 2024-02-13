import Title from '@/components/global/Title'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <Title/>
      <div>
        <Link href={"/start"} 
        className='shadow-lg py-2 px-4 rounded-lg bg-slate-200 hover:bg-slate-400 font-bold text-lg flex justify-between items-center gap-3'>
          <span>Start</span>
          <AiOutlineArrowRight/>
        </Link>
      </div>
    </main>
  )
}
