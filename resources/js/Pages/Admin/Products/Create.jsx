import React from "react";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";

import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import { Field, FieldLabel, FieldGroup } from "@/Shadcn/components/ui/field";

import { Input } from "@/Shadcn/components/ui/input";
import { Textarea } from "@/Shadcn/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Shadcn/components/ui/select";

import { Button } from "@/Shadcn/components/ui/button";

import { Upload, Trash2 } from "lucide-react";

import { useState } from "react";

const Create = () => {
    const [preview, setPreview] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);

        const input = document.getElementById("product_image");

        if (input) {
            input.value = "";
        }
    };

    const handleInputChange = (e) => {
        setSize(e.target.value);
    };

    const handleAddNewSize = () => {
        setSizes((previousItems) => [...previousItems, size]);

        setSize("");
    };

    return (
        <>
            <PageHeader title="Add New Product" />

            <div className="grid grid-cols-2 gap-6">
                <section>
                    <Card className="rounded-sm p-6">
                        <Card className="rounded-sm border-gray-400">
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    {/* main thumbnail */}

                                    {preview ? (
                                        <figure className="relative aspect-square size-60">
                                            <div className="absolute top-0 left-0 h-full w-full opacity-0 transition-all duration-200 ease-in-out hover:opacity-100 hover:backdrop-blur-sm">
                                                <div className="grid h-full place-content-center">
                                                    <Button
                                                        className="primary-button cursor-pointer"
                                                        size="lg"
                                                        onClick={
                                                            handleRemoveImage
                                                        }
                                                    >
                                                        <Trash2 />
                                                        <p className="text-md font-bold">
                                                            Delete
                                                        </p>
                                                    </Button>
                                                </div>
                                            </div>

                                            <img
                                                src={preview}
                                                alt=""
                                                className="h-full w-full rounded-sm object-cover"
                                            />
                                        </figure>
                                    ) : (
                                        <div className="">
                                            <div className="flex size-60 items-center justify-center rounded-sm border-2 border-dashed border-gray-400 p-4 transition-colors duration-200 ease-in-out hover:border-rose-500 hover:bg-rose-50">
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
                                                            Click to upload an
                                                            image
                                                        </p>
                                                        <p className="text-muted-foreground text-sm">
                                                            You can upload 4
                                                            files. Each up to
                                                            2MB. Accepted JPEG,
                                                            PNG, GIF.
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
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-sm border-gray-400">
                            <CardHeader>
                                <CardTitle>Size</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="space-y-4">
                                    <section>
                                        <Field orientation="horizontal">
                                            <Input
                                                placeholder="Input size"
                                                value={size}
                                                onChange={handleInputChange}
                                            />
                                            <Button onClick={handleAddNewSize}>
                                                Add Size
                                            </Button>
                                        </Field>
                                    </section>

                                    <section>
                                        {sizes.length > 0 ? (
                                            <div className="space-y-2">
                                                <p className="text-muted-foreground text-sm font-bold">
                                                    Available Sizes
                                                </p>

                                                <div className="grid grid-cols-3 gap-2">
                                                    {sizes.map(
                                                        (size, index) => (
                                                            <div
                                                                key={index}
                                                                className="rounded-sm border-2 border-gray-400 bg-gray-100 p-2 text-center"
                                                            >
                                                                <p className="text-sm font-bold text-gray-500">
                                                                    {size}
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-muted-foreground text-sm font-bold">
                                                No available sizes for this
                                                product.
                                            </p>
                                        )}
                                    </section>
                                </div>
                            </CardContent>
                        </Card>
                    </Card>
                </section>

                <section className="space-y-6">
                    <Card className="rounded-sm p-6">
                        <Card className="rounded-sm border-gray-400">
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel
                                            htmlFor="product_name"
                                            className="font-bold text-gray-500"
                                        >
                                            Product Name
                                        </FieldLabel>

                                        <Input
                                            id="productName"
                                            placeholder="Enter product name here."
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel
                                            htmlFor="product_description"
                                            className="font-bold text-gray-500"
                                        >
                                            Product Descriptions
                                        </FieldLabel>
                                        <Textarea
                                            id="product_description"
                                            rows={6}
                                            placeholder="Enter product description here."
                                        />
                                    </Field>
                                </FieldGroup>
                            </CardContent>
                        </Card>

                        <Card className="rounded-sm border-gray-400">
                            <CardHeader>
                                <CardTitle>Category</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <Field>
                                    <FieldLabel>Product Category</FieldLabel>

                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Set product category" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="1">
                                                Tops
                                            </SelectItem>
                                            <SelectItem value="2">
                                                Bottoms
                                            </SelectItem>
                                            <SelectItem value="3">
                                                Dress
                                            </SelectItem>
                                            <SelectItem value="4">
                                                Lingerie
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </CardContent>
                        </Card>
                    </Card>
                </section>
            </div>
        </>
    );
};

Create.layout = (page) => <AdminLayout children={page} />;

export default Create;
