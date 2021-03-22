import * as React from 'react'
import { LinePath } from '@visx/shape'
import { useDrag } from '@visx/drag'
import { curveBasis } from '@visx/curve'
import { LinearGradient } from '@visx/gradient'
import { IDrawingBoardProps } from '../../interfaces/IDrawingBoardProps'
import { ILine } from '../../interfaces/ILine'

export const DrawingBoard: Function = (board: IDrawingBoardProps) => {
  const [lines, setLines]: [ILine[][], React.Dispatch<React.SetStateAction<ILine[][]>>] = React.useState<ILine[][]>(board.data || [])

  const onDragStart = React.useCallback(
    (currDrag) => {
      // add the new line with the starting point
      setLines((currLines) => [...currLines, [{ x: currDrag.x, y: currDrag.y }]])
    },
    [setLines]
  )

  const onDragMove = React.useCallback(
    (currDrag) => {
      // add the new point to the current line
      setLines((currLines) => {
        const nextLines = [...currLines]
        const newPoint = { x: currDrag.x + currDrag.dx, y: currDrag.y + currDrag.dy }
        const lastIndex = nextLines.length - 1
        nextLines[lastIndex] = [...(nextLines[lastIndex] || []), newPoint]
        return nextLines
      })
    },
    [setLines]
  )

  const { x = 0, y = 0, dx, dy, isDragging, dragStart, dragEnd, dragMove } = useDrag({
    onDragStart,
    onDragMove,
    resetOnStart: true,
  })

  return board.width < 10 ? null : (
    <div className='DrawingBoard' style={{ touchAction: 'none' }}>
      <svg width={board.width} height={board.height}>
        <LinearGradient id='stroke' from='#000000' to='#BBBBBB' />
        <rect fill='#FFFFFF' width={board.width} height={board.height} rx={14} />
        {lines.map((line, i) => (
          <LinePath key={`line-${i}`} fill='transparent' stroke='url(#stroke)' strokeWidth={3} data={line} curve={curveBasis} x={(d) => d.x} y={(d) => d.y} />
        ))}

        <g>
          {isDragging && (
            /* capture mouse events (note: <Drag /> does this for you) */
            <rect width={board.width} height={board.height} onMouseMove={dragMove} onMouseUp={dragEnd} fill='transparent' />
          )}
          {/* decorate the currently drawing line */}
          {isDragging && (
            <g>
              <rect fill='white' width={8} height={8} x={x + dx - 4} y={y + dy - 4} pointerEvents='none' />
              <circle cx={x} cy={y} r={4} fill='transparent' stroke='white' pointerEvents='none' />
            </g>
          )}
          {/* create the drawing area */}
          <rect
            fill='transparent'
            width={board.width}
            height={board.height}
            onMouseDown={dragStart}
            onMouseUp={isDragging ? dragEnd : undefined}
            onMouseMove={isDragging ? dragMove : undefined}
            onTouchStart={dragStart}
            onTouchEnd={isDragging ? dragEnd : undefined}
            onTouchMove={isDragging ? dragMove : undefined}
          />
        </g>
      </svg>

      <style>{`
        .DrawingBoard {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        svg {
          margin: 1rem 0;
          cursor: crosshair;
        }
      `}</style>
    </div>
  )
}
