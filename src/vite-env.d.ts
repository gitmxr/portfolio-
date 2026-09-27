/// <reference types="vite/client" />

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "meshline" {
  import { BufferGeometry, Material } from "three";
  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: unknown[], wcb?: (p: number) => number): void;
  }
  export class MeshLineMaterial extends Material {}
}
