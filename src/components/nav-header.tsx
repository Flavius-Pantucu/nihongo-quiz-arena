"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavHeader({
  team,
}: {
  team: {
    name: string;
    logo: React.ElementType;
    plan: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size='lg'
          className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer'>
          <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
            <team.logo className='size-4' />
          </div>
          <div className='grid text-left text-sm'>
            <span className='truncate font-medium'>{team.name}</span>
            <span className='truncate text-xs'>{team.plan}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
