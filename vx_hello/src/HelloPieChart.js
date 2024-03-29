import React from 'react';
import { Pie } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientPinkBlue } from '@vx/gradient';
// import { letterFrequency, browserUsage } from '@vx/mock-data';

const white = '#ffffff';
const black = '#000000';

const letters = JSON.parse(`[{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.02782},{"letter":"D","frequency":0.04253}]`);
// const letters = letterFrequency.slice(0, 4);
// console.log("letters", JSON.stringify(letters));

const browserNames = ["Google Chrome","Internet Explorer","Firefox","Safari","Microsoft Edge","Opera","Mozilla","Other/Unknown"];
// const browserNames = Object.keys(browserUsage[0]).filter(k => k !== 'date');
// console.log("browserNames", JSON.stringify(browserNames));
const browsers = JSON.parse(`[{"label":"Google Chrome","usage":"48.09"},{"label":"Internet Explorer","usage":"24.14"},{"label":"Firefox","usage":"18.82"},{"label":"Safari","usage":"7.46"},{"label":"Microsoft Edge","usage":"0.03"},{"label":"Opera","usage":"1.32"},{"label":"Mozilla","usage":"0.12"},{"label":"Other/Unknown","usage":"0.01"}]`);
// const browsers = browserNames.map(k => ({ label: k, usage: browserUsage[0][k] }));
// console.log("browsers", JSON.stringify(browsers));

const usage = d => d.usage;
const frequency = d => d.frequency;

export default ({ width, height, margin }) => {
  const radius = Math.min(width, height) / 2;
  const centerY = height / 2;
  const centerX = width / 2;

  return (
    <svg width={width} height={height}>
      <GradientPinkBlue id="pie-gradients" />
      <rect rx={14} width={width} height={height} fill="url('#pie-gradients')" />
      <Group top={centerY - margin.top} left={centerX}>
        <Pie
          data={browsers}
          pieValue={usage}
          outerRadius={radius - 80}
          innerRadius={radius - 120}
          cornerRadius={3}
          padAngle={0}
        >
          {pie => {
            return pie.arcs.map((arc, i) => {
              const opacity = 1 / (i + 2);
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const { startAngle, endAngle } = arc;
              const hasSpaceForLabel = endAngle - startAngle >= 0.1;
              return (
                <g key={`browser-${arc.data.label}-${i}`}>
                  <path d={pie.path(arc)} fill={white} fillOpacity={opacity} />
                  {hasSpaceForLabel && (
                    <text
                      fill={white}
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      fontSize={9}
                      textAnchor="middle"
                    >
                      {arc.data.label}
                    </text>
                  )}
                </g>
              );
            });
          }}
        </Pie>
        <Pie
          data={letters}
          pieValue={frequency}
          pieSortValues={(a, b) => -1}
          outerRadius={radius - 135}
        >
          {pie => {
            return pie.arcs.map((arc, i) => {
              const opacity = 1 / (i + 2);
              const [centroidX, centroidY] = pie.path.centroid(arc);
              return (
                <g key={`letters-${arc.data.label}-${i}`}>
                  <path d={pie.path(arc)} fill={black} fillOpacity={opacity} />
                  <text
                    fill="white"
                    textAnchor="middle"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fontSize={9}
                  >
                    {arc.data.letter}
                  </text>
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
};
