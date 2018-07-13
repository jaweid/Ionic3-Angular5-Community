import {PostSearchPeopleComponent} from "../../../pages/post/post-search-people/post-search-people";
import {PostSecondaryLostComponent} from "../../../pages/post/post-secondary-lost/post-secondary-lost";
import {PostSecondaryHandComponent} from "../../../pages/post/post-secondary-hand/post-secondary-hand";
import {PostSearchThingComponent} from "../../../pages/post/post-search-thing/post-search-thing";
import {PostSecondaryTimeComponent} from "../../../pages/post/post-secondary-time/post-secondary-time";


export const HomeNavList = [
  {
    text: '寻人',
    icon: 'navPerson',
    page: "PeopleSearchPage"
  },
  {
    text: '寻事',
    icon: 'navThings',
    page: "ThingSearchPage"
  },
  {
    text: '寻物',
    icon: 'navSomething',
    page: "GoodsSearchPage"
  },
  {
    text: '生活',
    icon: 'navLife'
  },
  {
    text: '工作',
    icon: 'navWork'
  },
  {
    text: '娱乐',
    icon: 'navRelax'
  }
];

export const PostChooseOption = [
  {
    img: 'assets/imgs/post/1.png',
    component: PostSearchPeopleComponent
  },
  {
    img: 'assets/imgs/post/2.png',
    component: PostSecondaryLostComponent
  },
  {
    img: 'assets/imgs/post/3.png',
    component: PostSecondaryHandComponent
  },
  {
    img: 'assets/imgs/post/4.png',
    component: PostSearchThingComponent
  },
  {
    img: 'assets/imgs/post/5.png',
    component: PostSecondaryTimeComponent
  },
];


export const DefaultAvatar = 'assets/imgs/defaultPerson.jpg';
