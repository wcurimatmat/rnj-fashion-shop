import { Upload } from "lucide-react";

const UploadDropzone = ({ setPreview }) => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    return (
        <div className="">
            <div className="flex h-72 items-center justify-center rounded-sm border-2 border-dashed border-gray-400 p-4 transition-colors duration-200 ease-in-out hover:border-rose-500 hover:bg-rose-50">
                <label
                    htmlFor="product_image"
                    role="presentation"
                    className="cursor-pointer space-y-5"
                >
                    <div className="flex justify-center">
                        <Upload />
                    </div>

                    <div className="space-y-3 text-center">
                        <p className="text-base font-bold">
                            Click to upload an image
                        </p>
                        <p className="text-muted-foreground text-sm">
                            You can upload 4 files. Each up to 2MB. Accepted
                            JPEG, PNG, GIF.
                        </p>
                    </div>
                </label>
            </div>

            <input
                type="file"
                id="product_image"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
            />
        </div>
    );
};

export default UploadDropzone;
