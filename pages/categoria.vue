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
                  <Filter />
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
                v-for="category in categories"
                :key="category.name"
                as-child
                class="group/collapsible"
              >
                <SidebarMenuItem
                @click="navigateTo(`/categoria/${category.slug}/entries`)"
                >
                    <SidebarMenuButton
                      :tooltip="category.name"
                    >
                      <BookOpen />
                      <span>{{ category.name }}</span>
                      <ChevronRight
                      
                        class="ml-auto transition-transform duration-200"
                        :class="{ 'rotate-90': category.slug !== $route.params.categoria }"
                      />
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
                    <Avatar class="h-8 w-8 rounded-lg">
                      <AvatarImage
                        :src="data.user.avatar"
                        :alt="data.user.name"
                      />
                      <AvatarFallback class="rounded-lg">
                        JK
                      </AvatarFallback>
                    </Avatar>
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
                    <ChevronsUpDown
                      class="ml-auto size-4"
                    />
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
                      <Avatar class="h-8 w-8 rounded-lg">
                        <AvatarImage
                          :src="data.user.avatar"
                          :alt="data.user.name"
                        />
                        <AvatarFallback class="rounded-lg">
                          JK
                        </AvatarFallback>
                      </Avatar>
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
                    Ultimas entradas
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator
                  class="hidden md:block"
                />
                <BreadcrumbItem>
                  <BreadcrumbPage
                    > {{ selectedCategory  }} </BreadcrumbPage
                  >
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
          <NuxtPage />
      </SidebarInset>
    </SidebarProvider>

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

const selectedCategory = computed(() => {
  return categories.find(
    (category) => category.slug === useRoute().params.categoria
  )?.name || '';
});

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
};

</script>
