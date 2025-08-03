import { Camera, Color, Layer, LayerType, PathLayer, Point, Side, XYWH } from "@/types/canvas";
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

export function findIntersectionLayersWithRectangle(
  layerIds: readonly string[],
  layers: ReadonlyMap<string, Layer>,
  a: Point,
  b: Point
): string[] {
  const rect = {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y),
  };

  const intersectingLayers: string[] = [];

  for (const id of layerIds) {
    const layer = layers.get(id);
    if (!layer) continue;

    const lx = layer.x;
    const ly = layer.y;
    const lw = layer.width;
    const lh = layer.height;

    const isIntersecting =
      rect.x < lx + lw &&
      rect.x + rect.width > lx &&
      rect.y < ly + lh &&
      rect.y + rect.height > ly;

    if (isIntersecting) {
      intersectingLayers.push(id);
    }
  }

  return intersectingLayers;
}

export function getContrastingTextColor(color: Color) {
  const { r, g, b } = color;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "black" : "white";
}

export function penPointsToPathLayer(
  points: number[][],
  color: Color
): PathLayer {
  if (points.length < 2) {
    throw new Error("Cannot transform with less than 2 points");
  }

  let left = Number.POSITIVE_INFINITY;
  let top = Number.POSITIVE_INFINITY;
  let right = Number.NEGATIVE_INFINITY;
  let bottom = Number.NEGATIVE_INFINITY;

  for (const point of points) {
    const [x, y] = point;
    left = Math.min(left, x);
    top = Math.min(top, y);
    right = Math.max(right, x);
    bottom = Math.max(bottom, y);
  }

  return {
    type: LayerType.Path,
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    fill: color,
    points:points.map(([x,y,pressure])=>[x-left,y-top,pressure])
  };
};


export function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"]
  );

  d.push("Z");
  return d.join(" ");
};