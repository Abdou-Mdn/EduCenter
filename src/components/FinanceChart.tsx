"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3290,
    expense: 3320,
  },
  {
    name: 'Sep',
    income: 2150,
    expense: 2405,
  },
  {
    name: 'Oct',
    income: 1457,
    expense: 2695,
  },
  {
    name: 'Nov',
    income: 3142,
    expense: 2689,
  },
  {
    name: 'Dec',
    income: 2874,
    expense: 1968,
  },
];
// #endregion

const FinanceChart = () => {
  return (
    <div className='bg-background-200 p-4 rounded h-full'>
        <h3 className='font-medium'>Finance</h3>
        <div className='w-full h-[90%]'>
            <LineChart
                style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke='var(--border)'/>
                <XAxis dataKey="name" axisLine={false} tick={{fill: "var(--text-100)"}} tickLine={false} tickMargin={16}/>
                <YAxis width="auto" axisLine={false} tick={{fill: "var(--text-100)"}} tickLine={false} tickMargin={24}/>
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
                <Line type="monotone" dataKey="income" stroke="var(--primary-200)" activeDot={{ r: 6 }} strokeWidth={2} />
                <Line type="monotone" dataKey="expense" stroke="var(--accent)" activeDot={{ r: 6 }} strokeWidth={2}/>
            </LineChart>
        </div>
    </div>
  )
}

export default FinanceChart