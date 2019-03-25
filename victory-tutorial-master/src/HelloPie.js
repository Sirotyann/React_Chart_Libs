import { VictoryPie, VictoryLabel } from "victory";
import React from 'react';

const Chart = () => {
  return (
    <div>
    <VictoryPie
        standalone={false}
        width={400} height={400}
        data={[
          { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
        ]}
        innerRadius={68} labelRadius={100}
        style={{ labels: { fontSize: 20, fill: "white" } }}
      />
      <VictoryLabel
        textAnchor="middle"
        style={{ fontSize: 20 }}
        x={200} y={200}
        text="Pie!"
      />
    </div>
  );
}

export default Chart;
