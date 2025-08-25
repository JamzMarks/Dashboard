interface SimpleSectionProps {
    children: React.ReactNode,
    className?: string,
}

export const SimpleSection = ({children, className}: SimpleSectionProps) => {
    return(
        <section className={`bg-background p-4 rounded-lg shadow border border-gray-200 space-y-4 ${className ? className : ""} 
        dark:bg-neutral-950 dark:border-0`}>
            {children}
        </section>
    )
}