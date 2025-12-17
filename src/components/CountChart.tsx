"use client"
import Image from 'next/image';
import { PieChart, Pie } from 'recharts';


const data = [
  { name: 'Boys', value: 58, fill: 'var(--primary-200)' },
  { name: 'Girls', value: 42, fill: 'var(--accent)' },
];

const CountChart = () => {
  return (
    <div className='bg-background-200 p-4 rounded h-full'>
        <h3 className='font-medium'>Students</h3>
        <div className='w-full flex flex-wrap justify-around items-stretch relative'>
            <PieChart responsive style={{ height: 'calc(100% - 20px)', width: '33%', flex: '1 1 200px', aspectRatio: 1 }}>
                <Pie 
                    data={data} 
                    dataKey="value" 
                    nameKey="name" 
                    outerRadius="75%" 
                    innerRadius="60%" 
                    isAnimationActive={true} 
                />
            </PieChart>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Image src="/boy-girl.svg" alt='' width={48} height={48} />
            </div>
        </div>
        <div className='flex items-center justify-center gap-8'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <div className='size-5 rounded-full bg-primary-200'></div>
                  <span className='font-semibold text-text-200'>1,360</span>
                </div>
                <span className='text-xs text-text-100'>Boys (58%)</span>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <div className='size-5 rounded-full bg-accent'></div>
                <span className='font-semibold text-text-200'>985</span>
              </div>
              <span className='text-xs text-text-100'>Girls (48%)</span>
            </div>
        </div>
    </div>
  )
}

export default CountChart