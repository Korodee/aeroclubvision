/**
 * Serve Unsplash (and other remote) images directly from the CDN.
 * Avoids Next.js `/_next/image` proxy timeouts when the optimizer
 * cannot reach images.unsplash.com from the local network.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const base = src.split("?")[0] ?? src;
  const params = new URLSearchParams({
    auto: "format",
    fit: "max",
    w: String(width),
    q: String(quality ?? 75),
  });
  return `${base}?${params.toString()}`;
}
