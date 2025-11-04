import React from "react";
import { Button } from "@/Shadcn/components/ui/button";
import { Trash2 } from "lucide-react";

const ImagePreview = ({ preview, setPreview }) => {
    const handleRemoveImage = () => {
        setPreview(null);

        const input = document.getElementById("product_image");

        if (input) {
            input.value = "";
        }
    };

    return (
        <figure className="relative h-72">
            <div className="absolute top-0 left-0 h-full w-full opacity-0 transition-all duration-200 ease-in-out hover:opacity-100 hover:backdrop-blur-sm">
                <div className="grid h-full place-content-center">
                    <Button
                        className="primary-button cursor-pointer"
                        size="lg"
                        onClick={handleRemoveImage}
                    >
                        <Trash2 />
                        <p className="text-md font-bold">Delete</p>
                    </Button>
                </div>
            </div>

            <img
                src={preview}
                alt="product image preview"
                className="h-full w-full rounded-sm object-cover"
            />
        </figure>
    );
};

export default ImagePreview;
