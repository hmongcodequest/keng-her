"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

// Debounce helper for resize handling
function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface ZondaScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames?: number;
  imageFolderPath?: string;
}

// Helper function to load a single image - extracted to reduce nesting depth
function loadSingleImage(
  src: string,
  onProgress: () => void
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      onProgress();
      resolve(img);
    };

    img.onerror = () => {
      console.error(`Failed to load frame: ${img.src}`);
      reject(new Error(`Failed to load ${img.src}`));
    };
  });
}

export default function ZondaScrollCanvas({
  scrollYProgress,
  totalFrames = 240,
  imageFolderPath = "/images/zonda-sequence",
}: Readonly<ZondaScrollCanvasProps>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const currentFrameRef = useRef(0);
  const animationFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform scroll progress (0-1) to frame index (0 to totalFrames-1)
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  // Preload all images on mount
  useEffect(() => {
    let loaded = 0;

    // Extracted to reduce nesting depth
    const handleImageProgress = () => {
      loaded++;
      setLoadProgress(Math.round((loaded / totalFrames) * 100));
    };

    const loadImages = async () => {
      const imagePromises = Array.from({ length: totalFrames }, (_, i) => {
        const frameNumber = String(i + 1).padStart(3, "0");
        const src = `${imageFolderPath}/ezgif-frame-${frameNumber}.jpg`;

        return loadSingleImage(src, handleImageProgress);
      });

      try {
        const results = await Promise.all(imagePromises);
        setImages(results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [totalFrames, imageFolderPath]);

  // Update canvas size based on container
  const updateCanvasSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    setCanvasSize({ width: rect.width, height: rect.height });
  }, []);

  // ResizeObserver for responsive container tracking
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial size
    updateCanvasSize();

    // Create debounced resize handler
    const debouncedUpdate = debounce(updateCanvasSize, 100);

    // Use ResizeObserver for container size changes
    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdate();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateCanvasSize]);

  // Draw frame to canvas with High-DPI support
  const drawFrame = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container || images.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = images[Math.round(frameIdx)];
      if (!img) return;

      // Get the device pixel ratio for Retina/4K displays
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      // Only update canvas size if dimensions changed (performance optimization)
      const targetWidth = Math.floor(rect.width * dpr);
      const targetHeight = Math.floor(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      // Reset and scale the context
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Calculate object-fit: contain dimensions
      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let drawWidth: number;
      let drawHeight: number;
      let offsetX: number;
      let offsetY: number;

      if (imgAspect > canvasAspect) {
        // Image is wider than canvas
        drawWidth = rect.width;
        drawHeight = rect.width / imgAspect;
        offsetX = 0;
        offsetY = (rect.height - drawHeight) / 2;
      } else {
        // Image is taller than canvas
        drawHeight = rect.height;
        drawWidth = rect.height * imgAspect;
        offsetX = (rect.width - drawWidth) / 2;
        offsetY = 0;
      }

      // Apply slight image processing for premium look
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Draw the image
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Add subtle vignette effect
      const gradient = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        rect.height * 0.3,
        rect.width / 2,
        rect.height / 2,
        rect.height * 0.9
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.4)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
    },
    [images]
  );

  // Listen to frame index changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (Math.round(latest) !== currentFrameRef.current) {
      currentFrameRef.current = Math.round(latest);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        drawFrame(latest);
      });
    }
  });

  // Draw first frame when images are loaded or canvas size changes
  useEffect(() => {
    if (images.length > 0 && !isLoading && canvasSize.width > 0) {
      drawFrame(currentFrameRef.current);
    }
  }, [images, isLoading, canvasSize, drawFrame]);

  // Handle window resize (fallback for orientation changes)
  useEffect(() => {
    const handleResize = debounce(() => {
      updateCanvasSize();
    }, 150);

    window.addEventListener("resize", handleResize);
    globalThis.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("orientationchange", handleResize);
    };
  }, [updateCanvasSize]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* Loading overlay - z-0 so HUD text stays visible for LCP */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-pagani-black z-0">
          <div className="relative w-48 h-1 bg-carbon-gray overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-pagani-gold to-bright-gold transition-all duration-150 rounded-full"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="mt-4 font-heading text-sm tracking-[0.3em] text-pagani-gold/70">
            LOADING EXPERIENCE
          </p>
          <p className="mt-1 font-body text-xs text-white/50">
            {loadProgress}%
          </p>
        </div>
      )}

      {/* Canvas for frame rendering */}
      <canvas
        ref={canvasRef}
        className="w-full h-screen object-cover"
        style={{
          display: isLoading ? "none" : "block",
        }}
      />

      {/* Subtle grid overlay for sci-fi effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
