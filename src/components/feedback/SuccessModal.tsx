"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type SuccessModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
};

export function SuccessModal({
    isOpen,
    onClose,
    title = "Thank You!",
    message = "Your submission was successful. We will be in touch shortly."
}: SuccessModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-center">
            <div
                className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={20} strokeWidth={2.5} />
                </button>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-5">
                    <CheckCircle2 className="h-8 w-8 text-green-600" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-[#0c1933] mb-2">{title}</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                    {message}
                </p>

                <div className="flex justify-center">
                    <Button onClick={onClose} className="w-full max-w-[200px] justify-center">
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
}
