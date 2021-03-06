import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store.js';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // ở trên có đoạn webpackChunkName là 1 magic comment, khi split 1 file js lớn ra thành các file js con như này thì việc
  // đặt tên cho các file js con là cần thiết để có thể debug hiệu quả, và muốn đặt tên như nào thì dùng magic cmt phía trên
  // },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: () =>
  //     import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: () =>
  //     import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () =>
  //     import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: () =>
  //     import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  // },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(destination => destination.slug === to.params.slug)
      if(exist) {
        next()
      }
      else {
        next({name: "NotFound"})
      }
    }
  },
  {
    path: "/404",
    // tên path ns chung k nên để *, thay vào đó dùng tên path, vì nếu k nó sẽ gặp warning. báo là k thể thay thế 1 page với tên path có dấu hoa thị
    alias: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "../views/NotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
