import {PostSearchPeopleComponent} from "../../pages/post/post-search-people/post-search-people";
import {PostSecondaryLostComponent} from "../../pages/post/post-secondary-lost/post-secondary-lost";
import {PostSecondaryHandComponent} from "../../pages/post/post-secondary-hand/post-secondary-hand";
import {PostSearchThingComponent} from "../../pages/post/post-search-thing/post-search-thing";
import {PostSecondaryTimeComponent} from "../../pages/post/post-secondary-time/post-secondary-time";
import {TimesTradePage} from "../../pages/times-trade/times-trade";


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
    icon: 'navLife',
    page: 'TimesTradePage'
  },
  {
    text: '工作',
    icon: 'navWork',
    page: 'TimesTradePage'
  },
  {
    text: '娱乐',
    icon: 'navRelax',
    page: 'TimesTradePage'
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

export const PostTimeUnit = {
  options: [
    {
      text: '分钟',
      value: '1'
    },
    {
      text: '小时',
      value: '1'
    },
    {
      text: '天',
      value: '1'
    }
  ]
};


export const PostTimeColumn = {
  options: [
    {
      text: '生活',
      value: '1'
    },
    {
      text: '娱乐',
      value: '1'
    },
    {
      text: '工作',
      value: '1'
    },
    {
      text: '优惠',
      value: '1'
    },
  ]
};

export const PostSortForSearchPerson = {
  options: [
    {
      text: '游戏伙伴',
      value: '1'
    },
    {
      text: '娱乐休闲',
      value: '2'
    },
    {
      text: '公益服务',
      value: '3'
    },
    {
      text: '战友情谊',
      value: '4'
    },
    {
      text: '工作搭档',
      value: '5'
    }
  ]
};

export const SortOptions = [
  {
    text: '默认排序',
    value: '1'
  },
  {
    text: '最新发布',
    value: '2'
  },
  {
    text: '离我最近',
    value: '3'
  }
];

export const Distance = [
  {
    text: '智能排序',
    value: '1'
  },
  {
    text: '远——>近',
    value: '2'
  },
  {
    text: '近——>远',
    value: '3'
  }
];

export const Reading = [
  {
    text: '智能排序',
    value: '1'
  },
  {
    text: '高——>低',
    value: '2'
  },
  {
    text: '低——>高',
    value: '3'
  }
];

export const UpdateTime = [
  {
    text: '智能排序',
    value: '1'
  },
  {
    text: '最新',
    value: '2'
  }
];


export const PAY_TYPE_LIST = [
  {
    logo: 'assets/imgs/wexin.png',
    name: '微信支付',
    id: 0
  },
  {
    logo: 'assets/imgs/zhifubao.png',
    name: '支付宝支付',
    id: 1
  },
  {
    logo: 'assets/imgs/zhifubao.png',
    name: '余额支付',
    id: 2
  }
];
