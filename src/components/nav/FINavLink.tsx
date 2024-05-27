import Link, { LinkProps } from 'next/link'

interface IFILinkProps extends LinkProps {
    children: React.ReactNode,
    className: string
}

export default function FINavLink(props: IFILinkProps) {
    const { children, href, className, ...rest } = props;

    return (
        <Link className={`nav-link font-semibold text-base ${className}`} href={href} {...rest}>{children}</Link>
    )
}
