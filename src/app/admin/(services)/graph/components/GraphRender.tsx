'use client'
import { useEffect, useRef, useState } from "react";
import { Graph as GraphType } from "@/types/graph/graph.type";
import Graph from "graphology";
import Sigma from "sigma";
import { LeftBar } from "./LeftBar";

export type selectedItem = {
  type: "node" | "edge";
  data: unknown;
}


const GraphRender = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaRef = useRef<Sigma | null>(null);
  const [graphData, setGraphData] = useState<GraphType>({ nodes: [], relationships: [] });

  const [selectedItem, setSelectedItem] = useState<null | selectedItem>(null);

  useEffect(() => {
    fetch("http://localhost:3005/graph/export/json")
      .then((res) => res.json())
      .then((data) => setGraphData(data));
  }, []);

  useEffect(() => {
    if (!graphData.nodes.length || !containerRef.current) return;

    // Criar instância do grafo
    const graph = new Graph();
    console.log(graphData.nodes[13])
    console.log(graphData.relationships[13])
    // Adicionar nós
    graphData.nodes.forEach((n) => {
      if(n.properties?.lon && n.properties?.lat){
        graph.addNode(n.id.toString(), {
          label: n.labels ? n.labels : [],
          size: 2, // menor tamanho se for muitos nós
          x: n.properties.lon,    // longitude → x
          y: n.properties.lat,  // latitude → y (negativo para alinhar o eixo)
          color: n.properties?.type === "traffic_light" ? "red" : "blue",
        });
      }
    });

    // Adicionar arestas
    graphData.relationships.forEach((r) => {
      if(r.type != 'HAS_NODE'){
        graph.addEdge(r.startNodeId.toString(), r.endNodeId.toString(), {
          label: r.type,
          color: "gray",
        });
      }
    });

    

    // Se já existe Sigma, limpar
    if (sigmaRef.current) {
      sigmaRef.current.kill();
    }

    // Renderizar com Sigma
    sigmaRef.current = new Sigma(graph, containerRef.current);

      // LISTENERS
      sigmaRef.current.on("clickNode", (e) => {
        const node = graph.getNodeAttributes(e.node);
        setSelectedItem({ type: "node", data: node });
      });

      sigmaRef.current.on("clickEdge", (e) => {
        const edge = graph.getEdgeAttributes(e.edge);
        setSelectedItem({ type: "edge", data: edge });
      });
    return () => {
      sigmaRef.current?.kill();
    };
  }, [graphData]);

  return (
    <div style={{ width: "100%", height: "800px" }} className="relative">
      <div style={{ width: "100%", height: "100%" }} ref={containerRef}></div>
      {/* <LeftBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/> */}
    </div>
  );
};

export default GraphRender;
