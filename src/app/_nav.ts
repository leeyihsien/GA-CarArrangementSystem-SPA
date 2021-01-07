import { INavData } from '@coreui/angular';
import { Injectable } from '@angular/core';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },

// car arrangement
  {
    title: true,
    name: 'A1. Car Service'
  },
  {
    name: '1. Maintain',
    url:  '/maintain',
    icon: 'fa fa-cogs',
    children: [
      {
        name: '1.1 Car Info Maintain',
        url: '/carInfo',
        icon: 'fa fa-cogs'
      },
      {
        name: '1.2 Driver Info Maintain',
        url: '/driverInfo',
        icon: 'fa fa-cogs'
      },
      {
        name: '1.3 Route Info Maintain',
        url: '/routeInfo',
        icon: 'fa fa-cogs'
      },
      {
        name: '1.4 Route Schedule',
        url: '/routeSchedule',
        icon: 'fa fa-cogs'
      },
    ]
  },

    // //如果用戶有該功能權限則應顯示於navBar
    // if (user.role.includes('wmsb.RackLocationMain') === true) {
    //   navMaintain.children.push(navMaintain_RackLocation);
    //   this.hasMaintain = true;
    // }
    // if (user.role.includes('wmsb.SettingT3Supplier') === true) {
    //   navMaintain.children.push(navMaintain_T3Supplier);
    //   this.hasMaintain = true;

  {
    name: '2. Transaction',
    url:  '/transaction',
    icon: 'fa fa-cogs',
    children: [
      {
        name: '2.1 Car Booking',
        url: '/transaction/carBooking',
        icon: 'fa fa-cogs'
      },
      {
        name: '2.2 Car Arrangement',
        url: '/transaction/carArrangement',
        icon: 'fa fa-cogs'
      },
    ]
  },


  {
    name: '3. Query',
    url:  '/query',
    icon: 'fa fa-cogs',
    children: [
      {
        name: '3.1 Passenger Query',
        url: '/query/passenger',
        icon: 'fa fa-cogs'
      },
      {
        name: '3.2 Driver Query',
        url: '/query/driver',
        icon: 'fa fa-cogs'
      },
      {
        name: '3.3  Manager Query',
        url: '/query/manager',
        icon: 'fa fa-cogs'
      },
    ]
  },






];


// @Injectable({
//   providedIn: 'root'  // <- ADD THIS
// })
// export class NavItem {
//   navItems: INavData[] = [];
//   hasMaintain: boolean;
//   hasTransaction: boolean;
//   hasKanban: boolean;
//   hasReport: boolean;
//   hasQuery: boolean;

//   constructor() { }

//   getNav(){
//     this.navItems = [];

//     const navMaintain = {
//       name: 'A1.1 Maintain',
//       url:'',
//       icon:'fa fa-cogs',
//       children:[]
//     };
//   }





// }
