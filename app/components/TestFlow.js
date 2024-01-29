import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Handle,
  Position,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

const handleStyle = { left: 10 };
 
const initialNodes = [
  { id: '1', position: { x: 300, y: 300 }, data: { label: '1' } },
  { id: '2', position: { x: 300, y: 400 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function TestFlow({ data }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', zIndex: '-1'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <MiniMap />
          <Background color="#ccc" variant='dots' gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
}