import * as d3 from "d3";
import { useEffect } from "react";

export function NetworkGraph({ nodes, setNodes }) {
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  useEffect(() => {
    setNodes(nodes);
  }, [nodes]);

  // Drag behavior
  const drag = d3
    .drag()
    .on("drag", (event) => {
      const i = event.subject;

      const updatedNodes = [...nodes];
      updatedNodes[i].x = event.x;
      updatedNodes[i].y = event.y;
      setNodes(updatedNodes);
    })
    .on("end", (event) => {
      const i = event.subject;

      const updatedNodes = [...nodes];
      updatedNodes[i].x = event.x;
      updatedNodes[i].y = event.y;
      localStorage.setItem("nodes", JSON.stringify(updatedNodes));
    });

  return (
    <svg className="w-full h-full">
      {nodes.map((node, i) => (
        <g
          key={i}
          className="node"
          transform={`translate(${node.x}, ${node.y})`}
          ref={(el) => {
            if (el) drag(d3.select(el).datum(i)); // 각 <g> 요소에 drag 기능 적용
          }}
        >
          <circle r="8" fill={colorScale(i)} stroke="#ffffff" strokeWidth="1" />
          <text y="-16" fontSize="10" fill="black">
            <tspan textAnchor="middle">{node.label}</tspan>
          </text>
        </g>
      ))}
    </svg>
  );
}
