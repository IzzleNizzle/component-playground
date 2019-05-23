import React from 'react';
import DraggableBox from '../DraggableBox'
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import './index.css'

export default function NavBizzle(props) {
  return (
    <>
      <p>
        Demo using React Hooks - Implementing Draggable Box
    </p>
      {/* <DraggableBox /> */}

      <DragDropContainer targetKey="foo" >
        <div>Drag Me!</div>
      </DragDropContainer>

      <DropTarget targetKey="foo" >
        <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
      </DropTarget>
    </>
  );
}
