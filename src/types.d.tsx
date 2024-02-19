import { ReactNode } from "react";

export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }
  
export interface NavbarProps {
    navigation: NavigationItem[];
  }
  
  export interface Tool {
    name: string;
    description: string;
    img: string; // Ruta de la imagen
    url: string;
  }
export interface ToolsListProps {
    tools: Tool[];
  }
 export  interface ToolProps {
    tool: {
      name: string;
      description: string;
      img: string;
      url: string;
    };
  }
  export interface Question {
    question: string;
    answer: string;
  }
  export interface AcordeonProps {
    question: string;
    answer: string;
    firstquestion: number;
    children?: ReactNode; 
  }

  type Link = {
    name: string;
    badge: string | null;
  };
  
 export  type SiteMapItem = {
    title: string;
    links: Link[];
  };
  
 
  