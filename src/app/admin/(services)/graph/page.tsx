'use client'
import { useEffect, useState } from "react";
import * as d3 from "d3";

type Relationships = {
    id: string;
    type: string;
    startNodeId: number;
    endNodeId: number;
    properties: object;
};

type Node = {
    id: number;
    labels: string[];
    properties: {
        name: string;
        type?: string;
    };
    x: number,
    y: number
};

interface Graph {
    nodes: Node[];
    relationships: Relationships[];
}



const GraphPage = () => {
  const [graph, setGraph] = useState<Graph>({ nodes: [], relationships: [] });
    
  useEffect(() => {
    fetch("http://localhost:3005/graph/export/json")
      .then((res) => res.json())
      .then((data) => {
        const nodesWithPos = data.nodes.map((n: Node, i: number) => ({
            ...n,
            x: 50 + i * 100, // posição x
            y: 50 + i * 50   // posição y
        }));
        setGraph({ ...data, nodes: nodesWithPos });
        });
  }, []);

  useEffect(() => {
    if (!graph.nodes.length) return;

    const svg = d3.select("#graph");
    svg.selectAll("*").remove();

    // Criar links
    svg
      .selectAll("line")
      .data(graph.relationships)
      .enter()
      .append("line")
      .attr("x1", (d) => graph.nodes.find((n) => n.id === d.startNodeId)?.x ?? 0)
        .attr("y1", (d) => graph.nodes.find((n) => n.id === d.startNodeId)?.y ?? 0)
        .attr("x2", (d) => graph.nodes.find((n) => n.id === d.endNodeId)?.x ?? 0)
        .attr("y2", (d) => graph.nodes.find((n) => n.id === d.endNodeId)?.y ?? 0)
      .attr("stroke", "black");

    // Criar nós
    svg
      .selectAll("circle")
      .data(graph.nodes)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 10)
      .attr("fill", (d) => (d.properties.type === "traffic_light" ? "red" : "blue"));
  }, [graph]);

  return <svg id="graph" width={500} height={500}></svg>;
};

export default GraphPage;
