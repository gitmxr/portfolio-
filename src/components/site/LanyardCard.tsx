import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame, type ThreeElement, type ThreeEvent } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import cardGLB from "@/assets/lanyard/card.glb";
import lanyardPng from "@/assets/lanyard/lanyard.png";
import { profile } from "@/lib/portfolio-data";

// Preload the 3D model immediately to eliminate load stutter
useGLTF.preload(cardGLB);

extend({ MeshLineGeometry, MeshLineMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}

// 1x1 transparent pixel placeholder
const BLANK_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

// UV coordinates for the card 3D model
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

let cachedBackBadge: string | null = null;

/**
 * Creates and caches a high-definition VIP / Engineer ID badge texture for the back of the card
 */
function createBackBadgeDataUrl(): string {
  if (cachedBackBadge) return cachedBackBadge;
  if (typeof document === "undefined") return BLANK_PIXEL;

  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");
  if (!ctx) return BLANK_PIXEL;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 1024, 1400);
  grad.addColorStop(0, "#0c1322");
  grad.addColorStop(0.5, "#1e293b");
  grad.addColorStop(1, "#0c1322");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 1400);

  // Subtle geometric grid
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 2;
  for (let x = 40; x < 1024; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1400);
    ctx.stroke();
  }
  for (let y = 40; y < 1400; y += 60) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Accent header glow bar
  const barGrad = ctx.createLinearGradient(80, 80, 944, 80);
  barGrad.addColorStop(0, "#e76f51");
  barGrad.addColorStop(0.5, "#f4a261");
  barGrad.addColorStop(1, "#e76f51");
  ctx.fillStyle = barGrad;
  ctx.fillRect(80, 80, 864, 14);

  // Badge Header
  ctx.fillStyle = "#f8fafc";
  ctx.font = "bold 42px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("ENGINEERING ACCESS PASS", 512, 170);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "24px monospace";
  ctx.fillText("ID: MR-2026-DEV // VIP", 512, 220);

  // Microchip design
  ctx.strokeStyle = "rgba(231, 111, 81, 0.6)";
  ctx.lineWidth = 4;
  ctx.strokeRect(362, 280, 300, 300);

  ctx.fillStyle = "rgba(231, 111, 81, 0.15)";
  ctx.fillRect(380, 298, 264, 264);

  ctx.fillStyle = "#f4a261";
  ctx.font = "bold 44px monospace";
  ctx.fillText("</MR>", 512, 450);

  // Name & Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 56px sans-serif";
  ctx.fillText(profile.name.toUpperCase(), 512, 680);

  ctx.fillStyle = "#e76f51";
  ctx.font = "bold 32px sans-serif";
  ctx.fillText("FULL STACK DEVELOPER", 512, 735);

  ctx.fillStyle = "#cbd5e1";
  ctx.font = "26px sans-serif";
  ctx.fillText("MERN • Next.js • Azure (AZ-104)", 512, 785);

  // Divider
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(120, 860);
  ctx.lineTo(904, 860);
  ctx.stroke();

  // Details
  ctx.textAlign = "left";
  ctx.fillStyle = "#94a3b8";
  ctx.font = "22px monospace";
  ctx.fillText("GITHUB:", 140, 940);
  ctx.fillText("STATUS:", 140, 1000);
  ctx.fillText("LOCATION:", 140, 1060);

  ctx.fillStyle = "#f8fafc";
  ctx.font = "bold 24px monospace";
  ctx.fillText(profile.githubHandle, 320, 940);
  ctx.fillText("ACTIVE // AVAILABLE", 320, 1000);
  ctx.fillText("ISLAMABAD, PK", 320, 1060);

  // Bottom Barcode pattern
  ctx.fillStyle = "#ffffff";
  const bx = 140;
  const by = 1180;
  const bw = 744;
  const bh = 110;
  for (let i = 0; i < bw; i += 8) {
    const w = (i * 17) % 7 === 0 ? 5 : (i * 13) % 5 === 0 ? 3 : 1.5;
    ctx.fillRect(bx + i, by, w, bh);
  }

  ctx.textAlign = "center";
  ctx.fillStyle = "#64748b";
  ctx.font = "18px monospace";
  ctx.fillText("PORTFOLIO • MUHAMMAD RIAZ", 512, 1340);

  cachedBackBadge = canvas.toDataURL("image/png");
  return cachedBackBadge;
}

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
  inView?: boolean;
}

export function Lanyard({
  position = [0, 0, 20],
  gravity = [0, -40, 0],
  fov = 24,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = "cover",
  lanyardImage = null,
  lanyardWidth = 1.2,
  inView = true,
}: LanyardProps) {
  const [windowWidth, setWindowWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  const [generatedBackImage, setGeneratedBackImage] = useState<string | null>(backImage);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;

  useEffect(() => {
    const handleResize = (): void => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!backImage) {
      setGeneratedBackImage(createBackBadgeDataUrl());
    }
  }, [backImage]);

  // Dynamic anchor placement: hangs nicely on the right half on desktop, centered on mobile
  const anchorX = isTablet ? 0 : windowWidth < 1440 ? 3.3 : 3.7;
  const anchorY = 4.3;

  return (
    <div className="relative z-0 h-full w-full flex justify-center items-center select-none touch-none overflow-visible pointer-events-auto">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.25 : 1.5]}
        frameloop={inView ? "always" : "never"}
        gl={{
          alpha: transparent,
          antialias: true,
          powerPreference: "high-performance",
          depth: true,
          stencil: false,
        }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        {/* Optimized Direct Lights — ultra fast & 120 FPS */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 12, 8]} intensity={2.0} />
        <directionalLight position={[-6, -4, 4]} intensity={1.0} color="#f4a261" />
        <directionalLight position={[0, -10, -5]} intensity={0.6} color="#ffffff" />
        <pointLight position={[0, 1, 6]} intensity={1.2} />

        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={generatedBackImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
            anchorPosition={[anchorX, anchorY, 0]}
          />
        </Physics>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
  anchorPosition?: [number, number, number];
}

type LanyardRigidBody = RapierRigidBody & {
  lerped?: THREE.Vector3;
};

interface GLTFCardResult {
  nodes: {
    card: THREE.Mesh;
    clip: THREE.Mesh;
    clamp: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshPhysicalMaterial & { map: THREE.Texture };
    metal: THREE.MeshStandardMaterial;
  };
}

function Band({
  maxSpeed = 45,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = "cover",
  lanyardImage = null,
  lanyardWidth = 1.2,
  anchorPosition = [3.3, 4.3, 0],
}: BandProps) {
  const band = useRef<
    THREE.Mesh<InstanceType<typeof MeshLineGeometry>, InstanceType<typeof MeshLineMaterial>>
  >(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LanyardRigidBody>(null!);
  const j2 = useRef<LanyardRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 3.5,
    linearDamping: 3.5,
  };

  const getLerped = (body: LanyardRigidBody): THREE.Vector3 => {
    if (!body.lerped) {
      body.lerped = new THREE.Vector3().copy(body.translation());
    }
    return body.lerped;
  };

  const { nodes, materials } = useGLTF(cardGLB) as unknown as GLTFCardResult;
  const texture = useTexture(lanyardImage || lanyardPng);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Composite front and back image into the card UV texture
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image as HTMLImageElement | undefined;
    if (!baseImg) return baseMap;

    const W = baseImg.width || 1024;
    const H = baseImg.height || 1024;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return baseMap;

    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img: HTMLImageElement | HTMLCanvasElement, rect: typeof FRONT_UV_RECT) => {
      if (!img || !img.width || !img.height) return;
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === "contain" ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && frontTex.image) {
      drawFitted(frontTex.image as HTMLImageElement, FRONT_UV_RECT);
    }
    if (backImage && backTex.image) {
      drawFitted(backTex.image as HTMLImageElement, BACK_UV_RECT);
    }

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 8;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        const lerped = getLerped(ref.current);
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, lerped.distanceTo(ref.current.translation())),
        );
        lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(getLerped(j2.current));
      curve.points[2].copy(getLerped(j1.current));
      curve.points[3].copy(fixed.current.translation());
      if (band.current && band.current.geometry) {
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 24));
      }
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
      }
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={anchorPosition}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={8}
                clearcoat={isMobile ? 0 : 0.6}
                clearcoatRoughness={0.2}
                roughness={0.7}
                metalness={0.4}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [800, 1600] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}

/**
 * Full-Screen Open 3D Lanyard Card with Viewport Observer & SSR Safe Mount
 */
export function ProfileLanyardCard({
  frontImage,
  backImage,
  className = "",
}: {
  frontImage?: string;
  backImage?: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (!containerRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry?.isIntersecting ?? true);
      },
      { threshold: 0.05 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-visible pointer-events-auto ${className}`}
    >
      {mounted ? (
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={24}
          transparent={true}
          frontImage={frontImage}
          backImage={backImage}
          imageFit="cover"
          lanyardWidth={1.2}
          inView={inView}
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center p-8 animate-pulse text-muted-foreground">
          <div className="h-12 w-12 rounded-full border-2 border-primary/40 border-t-primary animate-spin mb-3" />
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
            Loading Interactive Badge...
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileLanyardCard;
