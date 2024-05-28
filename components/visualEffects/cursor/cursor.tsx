import { FC } from "react"
import AnimatedCursor from "react-animated-cursor"

interface CursorProps {
    color:string;
}


export const Cursor: FC<CursorProps> = ({color}) => {
    return <AnimatedCursor
    innerSize={8}
    outerSize={25}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    innerStyle={{
      backgroundColor: '#581845'
    }}
    outerStyle={{
      border: '1px solid #900C3F'
    }}
  />
}
export default Cursor;

