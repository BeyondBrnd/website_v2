"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import { motion } from "framer-motion";

interface Beam {
  id: string;
  x: number;
  startY: number;
  duration: number;
}

interface BackgroundMeteorsProps {
  children?: ReactNode;
}

export default function BackgroundMeteors({
  children,
}: BackgroundMeteorsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [beams, setBeams] = useState<Beam[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const gridSize = 40;
  const totalLines = 35;

  const BEAM_SPEED = 120;

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const update = () => {
      setContainerHeight(el.getBoundingClientRect().height);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const generateSafeGridPositions = (count: number): number[] => {
    const available: number[] = [];
    for (let i = 0; i < totalLines - 1; i++) available.push(i);

    const selected: number[] = [];
    while (available.length > 0 && selected.length < count) {
      const idx = Math.floor(Math.random() * available.length);
      const value = available[idx];
      selected.push(value);

      const filtered = available.filter((v) => Math.abs(v - value) > 1);
      available.splice(0, available.length, ...filtered);
    }

    return selected.map((line) => line * gridSize);
  };

  useEffect(() => {
    if (!containerHeight) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const generateBeams = () => {
      const count = Math.floor(Math.random() * 2) + 3;
      const xPositions = generateSafeGridPositions(count);

      const endY = containerHeight + 200;

      const newBeams: Beam[] = xPositions.map((x) => {
        const startY =
          -200 + Math.random() * Math.max(1, containerHeight * 0.3 + 200);

        const distance = endY - startY;
        const speed = BEAM_SPEED * (0.85 + Math.random() * 0.3);

        return {
          id: crypto.randomUUID(),
          x,
          startY,
          duration: distance / speed,
        };
      });

      setBeams(newBeams);

      const maxDuration = Math.max(...newBeams.map((b) => b.duration));
      timeoutId = setTimeout(generateBeams, (maxDuration - 0.8) * 1000);
    };

    generateBeams();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [containerHeight]);

  const endY = useMemo(() => {
    return containerHeight + 200;
  }, [containerHeight]);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[80vh] h-auto w-full items-center justify-center overflow-hidden bg-white"
    >
      {/* Light green grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage:
            "linear-gradient(to right, rgba(0,191,99,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,191,99,0.12) 1px, transparent 1px)",
        }}
      />

      {/* Subtle green glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,191,99,0.08) 0%, rgba(255,255,255,1) 70%)",
        }}
      />

      {/* Meteors */}
      {beams.map((b) => (
        <motion.div
          key={b.id}
          className="absolute top-0"
          style={{ left: b.x, zIndex: 2 }}
          initial={{ y: b.startY }}
          animate={{ y: endY }}
          transition={{
            duration: b.duration,
            ease: "linear",
          }}
        >
          <div
            className="h-14 w-px rounded-full
              bg-gradient-to-t
              from-[#00BF63] via-[#6DFFAE] to-transparent
              shadow-[0_0_10px_rgba(0,191,99,0.25)]"
            style={{ margin: "0 auto" }}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative inset-0 z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
