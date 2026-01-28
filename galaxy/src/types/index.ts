export interface Wallpaper {
    id?: string;
    src: string;
    alt: string;
    filename: string;
}

export interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}
