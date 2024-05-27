import { FC } from "react"
import AnimatedCursor from "react-animated-cursor"

interface CursorProps {
    color:string;
}


export const Cursor: FC<CursorProps> = (color) => {
    return <AnimatedCursor
    color="#fff"
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={0}
    outerStyle={{
      mixBlendMode: 'exclusion'
    }}
  />
}

