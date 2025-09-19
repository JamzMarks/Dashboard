interface SimpleSectionProps {
    children: React.ReactNode,
    className?: string,
}

export const SimpleSection = ({children, className}: SimpleSectionProps) => {
    return(
        <section className={`bg-background p-4 rounded-2xl shadow border border-gray-200 space-y-4 ${className ? className : ""} 
        dark:bg-neutral-950 dark:border-0`}>
            {children}
        </section>
    )
}


interface SectionWithHeaderProps extends SimpleSectionProps{
    title: string,
}
export const SectionWithHeader = ({children, className, title}: SectionWithHeaderProps) => {
    return(
        <section className={`bg-background  rounded-2xl shadow border border-gray-200 space-y-4 ${className ? className : ""} 
        dark:bg-foreground-dark dark:border-0`}>
            <div className="px-4 pt-4 space-y-2">
                <h2 className="font-semibold">{title}</h2>
            </div>
            <hr className="border-gray-200 dark:border-neutral-800 rounded-t-2xl mb-0" />
            <div className="p-4">
                {children}
            </div>
        </section>
    )
}