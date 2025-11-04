import React from "react";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";
import ImageUpload from "./ImageUpload";
import Sizing from "./Sizing";
import Category from "./Category";

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import { Field, FieldLabel, FieldGroup } from "@/Shadcn/components/ui/field";

import { Input } from "@/Shadcn/components/ui/input";
import { Textarea } from "@/Shadcn/components/ui/textarea";

const Create = () => {
    return (
        <>
            <PageHeader title="Add New Product" />

            <div className="grid grid-cols-3 gap-6">
                <section className="col-span-2 space-y-6">
                    <Card className="rounded-sm">
                        <CardHeader>
                            <CardTitle>General Information</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-6">
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel
                                            htmlFor="product_name"
                                            className="font-bold text-gray-500"
                                        >
                                            Product Name
                                        </FieldLabel>
                                        <Input
                                            id="product_name"
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

                                <Sizing />
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="space-y-6">
                    <ImageUpload />
                    <Category />
                </section>
            </div>
        </>
    );
};

Create.layout = (page) => <AdminLayout children={page} />;

export default Create;
