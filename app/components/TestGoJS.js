// GoJsChart.js
import React, { useEffect, useRef } from 'react';

const TestGoJS = () => {
  const diagramRef = useRef(null);
  useEffect(() => {
    // Your GoJS chart initialization code here
    // Refer to your GoJS chart code from the HTML file

    function init() {

        const myDiagram = new go.Diagram("myDiagramDiv",
        { // enable Ctrl-Z to undo and Ctrl-Y to redo
        "undoManager.isEnabled": true
        });
      
      myDiagram.model = new go.Model(
        [ // for each object in this Array, the Diagram creates a Node to represent it
          { key: "Alpha" },
          { key: "Beta" },
          { key: "Gamma" }
        ]);

      myDiagram.linkTemplate =
        $(go.Link,  // the whole link panel
          {
            curve: go.Link.Bezier,
            adjusting: go.Link.Stretch,
            reshapable: true, relinkableFrom: true, relinkableTo: true,
            toShortLength: 3
          },
          new go.Binding("points").makeTwoWay(),
          new go.Binding("curviness"),
          $(go.Shape,  // the link shape
            { strokeWidth: 1.5 },
            new go.Binding('stroke', 'progress', progress => progress ? "#52ce60" /* green */ : 'black'),
            new go.Binding('strokeWidth', 'progress', progress => progress ? 2.5 : 1.5)),
          $(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null },
            new go.Binding('fill', 'progress', progress => progress ? "#52ce60" /* green */ : 'black')),
          $(go.Panel, "Auto",
            $(go.Shape,  // the label background, which becomes transparent around the edges
              {
                fill: $(go.Brush, "Radial",
                  { 0: "rgb(245, 245, 245)", 0.7: "rgb(245, 245, 245)", 1: "rgba(245, 245, 245, 0)" }),
                stroke: null
              }),
            $(go.TextBlock, "transition",  // the label text
              {
                textAlign: "center",
                font: "9pt helvetica, arial, sans-serif",
                margin: 4,
                editable: true  // enable in-place editing
              },
              // editing the text automatically updates the model data
              new go.Binding("text").makeTwoWay())
          )
        );

      // read in the JSON data from the "mySavedModel" element
      load();
    }

    // Show the diagram's model in JSON format
    function save() {
      document.getElementById("mySavedModel").value = myDiagram.model.toJson();
      myDiagram.isModified = false;
    }
    function load() {
      myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    }

    window.addEventListener('DOMContentLoaded', init);
  }, []);

  return (
    <div>
      {/* The container for your GoJS chart */}
      <div id="myDiagramDiv" style={{ border: '1px solid black', width: '100%', height: '700px' }} />
    </div>
  );
};

export default TestGoJS;
