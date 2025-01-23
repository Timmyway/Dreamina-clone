export interface SidebarItem {
    id: number;
    label: string;
    url: string;
    icon?: string;
}

export interface SidebarItems {
    main: SidebarItem[];
    aiTools: SidebarItem[];
    misc: SidebarItem[];
}