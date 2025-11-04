import React from "react";

import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import { Field, FieldLabel } from "@/Shadcn/components/ui/field";
import { Input } from "@/Shadcn/components/ui/input";
import { Button } from "@/Shadcn/components/ui/button";

import { useState } from "react";

const Sizing = () => {
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState("");

    const handleInputChange = (e) => {
        setSize(e.target.value);
    };

    const handleAddNewSize = () => {
        setSizes((previousItems) => [...previousItems, size]);

        setSize("");
    };

    return (
        <div className="space-y-4">
            <section>
                <Field>
                    <FieldLabel
                        htmlFor="product_size"
                        className="font-bold text-gray-500"
                    >
                        Size
                    </FieldLabel>
                    <div className="flex gap-4">
                        <Input
                            id="product_size"
                            placeholder="Input size"
                            value={size}
                            onChange={handleInputChange}
                        />
                        <Button onClick={handleAddNewSize}>Add Size</Button>
                    </div>
                </Field>
            </section>

            <section>
                {sizes.length > 0 ? (
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-sm font-bold">
                            Available Sizes
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            {sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="rounded-sm border-2 border-gray-400 bg-gray-100 p-2 text-center"
                                >
                                    <p className="text-sm font-bold text-gray-500">
                                        {size}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-muted-foreground text-sm font-bold">
                        No available sizes for this product.
                    </p>
                )}
            </section>
        </div>
    );
};

export default Sizing;
