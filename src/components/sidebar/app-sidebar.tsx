"use client";

import * as React from "react";
import {
  Brain,
  Settings2,
  SquareTerminal,
  GraduationCap,
  Layers,
  MessageCircleQuestion,
  LayoutDashboard,
  Folder,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import { NavHeader } from "@/components/sidebar/nav-header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "flavius98",
    email: "flaviuspantucu@icloud.com",
    avatar: "https://github.com/shadcn.png",
  },
  team: {
    name: "Nihongo Quiz Arena",
    logo: Brain,
    plan: "日本語クイズアリーナ",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      items: [],
    },
    {
      title: "Browse",
      url: "#",
      icon: Folder,
      items: [],
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Flashcards",
          icon: Layers,
          url: "#",
        },
        {
          title: "Quiz",
          icon: MessageCircleQuestion,
          url: "#",
        },
        {
          title: "Learn",
          icon: GraduationCap,
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeader team={data.team} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
