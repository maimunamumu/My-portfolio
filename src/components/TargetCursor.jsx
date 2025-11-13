import { useEffect, useState } from "react";
import { FaCrosshairs } from "react-icons/fa";

export default function TargetCursor({ spinDuration = 2, hideDefaultCursor = true }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let animationFrame;
        const updatePosition = () => {
            setSmoothPos((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));
            animationFrame = requestAnimationFrame(updatePosition);
        };
        updatePosition();
        return () => cancelAnimationFrame(animationFrame);
    }, [position]);

    return (
        <>
            {hideDefaultCursor && <style>{`body { cursor: none; }`}</style>}
            <div
                className="fixed w-8 h-8 text-green-400 pointer-events-none flex items-center justify-center"
                style={{
                    top: smoothPos.y,
                    left: smoothPos.x,
                    transform: `translate(-50%, -50%) rotate(${spinDuration * 360}deg)`,
                }}
            >
                <FaCrosshairs className="" size={24} />
            </div>
        </>
    );
}
