import { ReactLenis } from "@studio-freight/react-lenis";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    // options={{ syncTouch: true }}
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.09,
          // smoothWheel: true,
          wheelMultiplier: 0.35, // Higher multiplier for more pronounced scroll
          // touchMultiplier: 2, // Higher multiplier for touch events
          // syncTouchLerp: 0.1, // Adjust syncTouch lerp
          // touchInertiaMultiplier: 50, // Increase inertia multiplier
        }}
      >
        {children}{" "}
      </ReactLenis>
    </>
  );
};

export default Providers;
