import React from "react";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import PageHeader from "@/Components/Admin/PageHeader/PageHeader";
import ImageUpload from "./ImageUpload";
import Sizing from "./Sizing";
import Category from "./Category";
import Pricing from "./Pricing";

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/Shadcn/components/ui/card";

import { Field, FieldLabel, FieldGroup } from "@/Shadcn/components/ui/field";

import { Input } from "@/Shadcn/components/ui/input";
import { Textarea } from "@/Shadcn/components/ui/textarea";
import { Button } from "@/Shadcn/components/ui/button";

const Create = () => {
    return (
        <>
            <header className="flex items-center justify-between">
                <PageHeader title="Add New Product" />

                <div className="space-x-6">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="cursor-pointer"
                    >
                        Discard
                    </Button>
                    <Button className="primary-button cursor-pointer" size="lg">
                        Save Product
                    </Button>
                </div>
            </header>

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

                    <Pricing />
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
