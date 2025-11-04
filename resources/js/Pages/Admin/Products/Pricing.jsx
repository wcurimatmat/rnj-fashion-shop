import React from "react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/Shadcn/components/ui/card";

import {
    Field,
    FieldLabel,
    FieldGroup,
    FieldContent,
} from "@/Shadcn/components/ui/field";

import { Input } from "@/Shadcn/components/ui/input";
import { Switch } from "@/Shadcn/components/ui/switch";

const Pricing = () => {
    return (
        <Card className="rounded-sm">
            <CardHeader>
                <CardTitle>Pricing</CardTitle>
            </CardHeader>

            <CardContent>
                <div class="space-y-6">
                    <Field>
                        <FieldLabel
                            htmlFor="product_price"
                            className="font-bold text-gray-500"
                        >
                            Base Price
                        </FieldLabel>
                        <Input
                            id="product_price"
                            placeholder="Enter product price."
                        />
                    </Field>

                    <FieldGroup className="flex-row">
                        <Field className="flex-1 basis-80">
                            <FieldLabel
                                htmlFor="product_discount"
                                className="font-bold text-gray-500"
                            >
                                Discount
                            </FieldLabel>
                            <Input
                                id="product_discount"
                                placeholder="Enter product discount."
                            />
                        </Field>

                        <Field className="flex-1" orientation="horizontal">
                            <FieldLabel
                                htmlFor="is_discounted"
                                className="text-sm font-bold text-gray-500"
                            >
                                Apply Discount
                            </FieldLabel>
                            <Switch id="is_discounted" />
                        </Field>
                    </FieldGroup>
                </div>
            </CardContent>
        </Card>
    );
};

export default Pricing;
