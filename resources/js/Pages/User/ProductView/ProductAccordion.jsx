import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Shadcn/components/ui/accordion";

function ProductAccordion() {
    return (
        <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Features & Description</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis praesentium quibusdam aperiam, enim ea minus.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Delivery & Returns</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis praesentium quibusdam aperiam, enim ea minus.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default ProductAccordion;
