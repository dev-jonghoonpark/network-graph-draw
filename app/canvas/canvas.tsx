"use client";

import { useEffect, useState } from "react";
import styles from "./canvas.styles.module.css";

import { NetworkGraph } from "./network-graph/NetworkGraph";

const createInitialNode = (width: number, height: number) => ({
  label: "test",
  x: Math.floor(width / 2) - 120,
  y: Math.floor(height / 2),
});

const getStoredNodes = () => {
  const nodeJson = localStorage.getItem("nodes");

  if (!nodeJson) {
    const viewport = document.body.getBoundingClientRect();
    const initialNode = createInitialNode(viewport.width, viewport.height);
    const initialNodes = [initialNode];

    localStorage.setItem("nodes", JSON.stringify(initialNodes));
    return initialNodes;
  }

  return JSON.parse(nodeJson);
};

export function GraphCanvas() {
  const [nodes, setNodes] = useState(() => []);

  useEffect(() => {
    setNodes(getStoredNodes());
  }, []);

  return (
    <div className={styles.canvas}>
      <NetworkGraph nodes={nodes} setNodes={setNodes} />
    </div>
  );
}
