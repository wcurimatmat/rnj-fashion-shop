import React from "react";

import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Shadcn/components/ui/select";

import { Field, FieldLabel } from "@/Shadcn/components/ui/field";

import { Button } from "@/Shadcn/components/ui/button";

import { Link } from "@inertiajs/react";

const Category = () => {
    return (
        <Card className="rounded-sm">
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
                            <SelectItem value="1">Tops</SelectItem>
                            <SelectItem value="2">Bottoms</SelectItem>
                            <SelectItem value="3">Dress</SelectItem>
                            <SelectItem value="4">Lingerie</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button asChild>
                        <Link href="#">Add New Category</Link>
                    </Button>
                </Field>
            </CardContent>
        </Card>
    );
};

export default Category;
