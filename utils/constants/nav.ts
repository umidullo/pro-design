export const nav = [
  {
    path: "/",
    title: "nav.home",
    sub_menu: [],
  },
  {
    path: "/services",
    title: "nav.services",
    sub_menu: [
      {
        title: "nav_items.ui_ux",
        path: "/services/ui-ux",
      },
      {
        title: "nav_items.motion",
        path: "/services/motion-graphics",
      },
      {
        title: "nav_items.branding",
        path: "/services/branding",
      },
      {
        title: "nav_items.vfx",
        path: "/services/vfx",
      },
      {
        title: "nav_items.interior",
        path: "/services/interior-design",
      },
    ],
  },
  {
    path: "/portfolio",
    title: "nav.works",
    sub_menu: [
      {
        title: "nav_items.all",
        path: "/portfolio",
      },
      {
        title: "nav_items.ui_ux",
        path: "/portfolio?byCategory=1",
      },
      {
        title: "nav_items.web",
        path: "/portfolio?byCategory=3",
      },
      {
        title: "nav_items.motion",
        path: "/portfolio?byCategory=5",
      },
      {
        title: "nav_items.branding",
        path: "/portfolio?byCategory=2",
      },
      {
        title: "nav_items.vfx",
        path: "/portfolio?byCategory=6",
      },
      {
        title: "nav_items.interior",
        path: "/portfolio?byCategory=7",
      },
    ],
  },
  {
    path: "/info/about",
    title: "nav.about",
    sub_menu: [],
  },
  {
    path: "/info/contacts",
    title: "nav.contacts",
    sub_menu: [],
  },
];
