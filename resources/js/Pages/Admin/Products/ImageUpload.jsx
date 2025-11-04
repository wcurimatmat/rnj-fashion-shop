import React from "react";

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import UploadDropzone from "./UploadDropzone";
import ImagePreview from "./ImagePreview";

import { useState } from "react";

const ImageUpload = () => {
    const [preview, setPreview] = useState(null);

    return (
        <Card className="rounded-sm">
            <CardHeader>
                <CardTitle>Upload Image</CardTitle>
            </CardHeader>

            <CardContent>
                <>
                    {preview ? (
                        <ImagePreview
                            preview={preview}
                            setPreview={setPreview}
                        />
                    ) : (
                        <UploadDropzone setPreview={setPreview} />
                    )}
                </>
            </CardContent>
        </Card>
    );
};

export default ImageUpload;
