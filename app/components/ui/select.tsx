import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "~/lib/utils";

const Select = React.forwardRef<
	HTMLSelectElement,
	React.SelectHTMLAttributes<HTMLSelectElement> & {
		onValueChange?: (value: string) => void;
	}
>(({ className, children, onValueChange, ...props }, ref) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onValueChange?.(e.target.value);
		props.onChange?.(e);
	};

	return (
		<div className="relative">
			<select
				className={cn(
					"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
					className
				)}
				ref={ref}
				onChange={handleChange}
				{...props}
			>
				{children}
			</select>
			<ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none" />
		</div>
	);
});
Select.displayName = "Select";

const SelectTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		asChild?: boolean;
	}
>(({ className, children, ...props }, ref) => (
	<button
		ref={ref}
		className={cn(
			"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
	>
		{children}
		<ChevronDown className="h-4 w-4 opacity-50" />
	</button>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement> & {
		placeholder?: string;
	}
>(({ className, placeholder, ...props }, ref) => (
	<span
		ref={ref}
		className={cn("block truncate", className)}
		{...props}
	>
		{props.children || placeholder}
	</span>
));
SelectValue.displayName = "SelectValue";

const SelectContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
			className
		)}
		{...props}
	>
		{children}
	</div>
));
SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
	HTMLOptionElement,
	React.OptionHTMLAttributes<HTMLOptionElement>
>(({ className, children, ...props }, ref) => (
	<option
		ref={ref}
		className={cn(
			"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		{children}
	</option>
));
SelectItem.displayName = "SelectItem";

const SelectLabel = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	<label
		ref={ref}
		className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
		{...props}
	/>
));
SelectLabel.displayName = "SelectLabel";

const SelectSeparator = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
));
SelectSeparator.displayName = "SelectSeparator";

export {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectSeparator,
};
