"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 1895,
    absent: 450,
  },
  {
    name: 'Tue',
    present: 2131,
    absent: 214,
  },
  {
    name: 'Wed',
    present: 1749,
    absent: 596,
  },
  {
    name: 'Thu',
    present: 2101,
    absent: 244,
  },
  {
    name: 'Fri',
    present: 2022,
    absent: 323,
  }
];


const AttendanceChart = () => {
  return (
    <div className='bg-background-200 p-4 rounded h-full'>
       <h3 className='font-medium'>Attendance</h3>
       <div className='w-full h-[90%]'>
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
                barSize={16}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='var(--border)'/>
                <XAxis dataKey="name" axisLine={false} tick={{fill: "var(--text-100)"}} tickLine={false}/>
                <YAxis width="auto" axisLine={false} tick={{fill: "var(--text-100)"}} tickLine={false}/>
                <Tooltip 
                    contentStyle={{borderRadius: "10px", borderColor: "var(--border)", backgroundColor:"var(--background-100)"}}
                    cursor={{fill: "var(--background-100)" }}
                />
                <Legend 
                    align='center' 
                    verticalAlign='top' 
                    iconType='circle'
                    iconSize={20}
                    wrapperStyle={{paddingBottom: "16px"}}
                />
                <Bar 
                    dataKey="present" 
                    fill="var(--primary-200)" 
                    radius={[10,10,0,0]}
                />
                <Bar 
                    dataKey="absent" 
                    fill="var(--accent)" 
                    radius={[10,10,0,0]}
                />
            </BarChart>
       </div>
    </div>
  )
}

export default AttendanceChart