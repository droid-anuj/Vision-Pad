import { Camera, Color, Point, Side, XYWH } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#FF5733", // red-orange
  "#33C1FF", // sky blue
  "#8D33FF", // purple
  "#33FF57", // green
  "#FF33A8", // pink
  "#FFC133", // orange-yellow
  "#335BFF", // vivid blue
  "#A833FF", // violet
  "#33FFBD", // mint green
  "#FF3333", // red
  "#33FF8A", // light green
  "#FFD133", // golden yellow
  "#FF6F61", // coral
  "#6C33FF", // indigo
  "#33FFF5", // cyan
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdColor(connectionId:number):string{
  return COLORS[connectionId%COLORS.length];
} 

export function pointerEventToCanvasPoint(
  e:React.PointerEvent,
  camera:Camera
){
  return {
    x:Math.round(e.clientX) -camera.x,
    y:Math.round(e.clientY) -camera.y,
  };
};

export function colorToCss(color : Color){
  return `#${color.r.toString(16).padStart(2,"0")}${color.g.toString(16).padStart(2,"0")}${color.b.toString(16).padStart(2,"0")}`;
}

export function resizeBounds(bounds:XYWH,corner:Side, point:Point):XYWH{
  const result ={
    x:bounds.x,
    y:bounds.y,
    width:bounds.width,
    height:bounds.height

  };

  if((corner & Side.Left)===Side.Left){
    result.x= Math.min(point.x, bounds.x+bounds.width);
    result.width = Math.abs(bounds.x+bounds.width - point.x);
  }
  if((corner & Side.Right)===Side.Right){
    result.x= Math.min(point.x, bounds.x);
    result.width = Math.abs(bounds.x - point.x);
  }
  if((corner & Side.Top)===Side.Top){
    result.y= Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y+bounds.height - point.y);
  }
  if((corner & Side.Bottom)===Side.Bottom){
    result.y= Math.min(point.y, bounds.y );
    result.height = Math.abs(bounds.y - point.y);
  }

  return result;
}