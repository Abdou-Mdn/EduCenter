"use client";
import { Pie, PieChart } from "recharts";

// #region Sample data
const data = [
  { name: "Group A", value: 87, fill: "var(--primary-200)" },
  { name: "Group B", value: 13, fill: "var(--accent)" },
];

const Performance = () => {
  return (
    <div className="bg-background-200 p-4 rounded mt-4">
      <h3 className="font-medium">Performance</h3>
      <div className='w-full flex justify-center items-center relative'>
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="80%"
                outerRadius="120%"
                innerRadius={60}
                isAnimationActive={true}
            />
        </PieChart>
        <div className="absolute bottom-1/8 left-1/2 -translate-x-1/2 text-center">
            <h4 className="text-2xl font-bold text-text-200">9.2</h4>
            <p className="text-xs text-text-100">of 10 max score</p>
        </div>
      </div>
      <p className="font-medium mx-auto text-center">1st Semester - 2nd Semester</p>
    </div>
  );
};

export default Performance;
