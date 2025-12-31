export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    isNew?: boolean;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface Testimonial {
    id: number;
    name: string;
    text: string;
    role: string;
}