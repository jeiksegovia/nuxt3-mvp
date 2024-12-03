<template>
  <div
    class="flex flex-row justify-center flex-grow bg-slate-50 relative max-sm:w-full"
  >
    <SidebarProvider
      class="lg:min-w-[95ch]  max-sm:w-full"
      >
      <Sidebar collapsible="icon" variant="sidebar" 
      class="absolute"
      >
        <SidebarHeader class="h-16 flex justify-center">
          <SidebarMenu >
            <SidebarMenuItem>
              <Collapsible >
                <CollapsibleTrigger as-child>
                  <SidebarMenuButton
                    :tooltip="'Categorias'"
                  >
                  <span>Categorias</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </Collapsible>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Separator
              orientation="horizontal"
              class="h-px w-full bg-slate-200"
            />
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <Collapsible
                as-child
                class="group/collapsible"
              >
                <SidebarMenuItem
                >
                    <SidebarMenuButton
                      :tooltip="'categoria'"
                    >
                      <span>test</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <SidebarMenuButton
                    size="lg"
                    class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >

                    <div
                      class="grid flex-1 text-left text-sm leading-tight"
                    >
                      <span
                        class="truncate font-semibold"
                        >{{ data.user.name }}</span
                      >
                      <span class="truncate text-xs">{{
                        data.user.email
                      }}</span>
                    </div>
              
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  :side-offset="4"
                >
                  <DropdownMenuLabel
                    class="p-0 font-normal"
                  >
                    <div
                      class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                    >
                      JK
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
              
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>

      <SidebarInset
      class="w-auto"
      >
        <header
          class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16"
        >
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1" />
            <Separator
              orientation="vertical"
              class="mr-2 h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem class="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator
                  class="hidden md:block"
                />
                <BreadcrumbItem>
                  <BreadcrumbPage
                    >Data Fetching</BreadcrumbPage
                  >
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <NuxtPage />
      </SidebarInset>
    </SidebarProvider>

    <!-- </div> -->

    <!-- <div class="prose p-12 bg-white rounded-md w-[65ch]">
      <NuxtPage />
    </div> -->
  </div>
</template>



<script setup>

import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Filter,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from 'lucide-vue-next';

const categories = useExampleData();

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
};

</script>
