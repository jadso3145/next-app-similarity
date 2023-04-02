import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const headingVariants = cva(
   "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
   {
      variants: {
         size: {
            default: "text-4xl md:text-5xl lg:text-6xl",
            sm: "text-sm, sm:text-base",
         },
      },
      defaultVariants: {
         size: "default",
      },
   }
);

interface LargeHeadingProps
   extends HTMLAttributes<HTMLHeadingElement>,
      VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
   ({ className, size, children, ...props }, ref) => {
      console.log(className, size, children, props);
      return (
         <h1
            ref={ref}
            {...props}
            className={cn(headingVariants({ size, className }))}
         >
            {children}
         </h1>
      );
   }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;

// 29
