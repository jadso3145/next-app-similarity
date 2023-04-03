import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariations = cva(
   "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
   {
      variants: {
         size: {
            default: "text-base sm:text-lg",
            sm: "text-sm, sm:text-base",
         },
      },
      defaultVariants: {
         size: "default",
      },
   }
);

interface ParagraphProps
   extends HTMLAttributes<HTMLParagraphElement>,
      VariantProps<typeof paragraphVariations> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
   ({ className, size, children, ...props }, ref) => {
      console.log(className, size, children, props);
      return (
         <p
            ref={ref}
            {...props}
            className={cn(paragraphVariations({ size, className }))}
         >
            {children}
         </p>
      );
   }
);

Paragraph.displayName = "paragraph";

export default Paragraph;
