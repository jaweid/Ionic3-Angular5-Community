import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FirstMenu} from "../../shared/resources/sort/first-menu";
import {SecondaryMenu} from "../../shared/resources/sort/secondary-menu";
import {SecondaryMenuList} from "../../shared/resources/sort/secondary-menu-list";

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
  public currentFirstMenu = '1';
  firstMenus: Array<FirstMenu> = [
    {
      name: '寻人',
      id: '1'
    },
    {
      name: '寻事',
      id: '2'
    },
    {
      name: '寻物',
      id: '3'
    },
    {
      name: '时间买卖',
      id: '4'
    }
  ];

  secondaryMenus: Array<SecondaryMenuList> = [];


  selectedMenuTarget: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getSecondaryMenu('1');
  }

  ionViewDidLoad() {
  }

  // 选中左侧菜单
  itemClick(c, event) {
    var initSelected: any = document.getElementsByClassName('menuItem');
    if (initSelected[0].classList.contains("active")) {
      initSelected[0].classList.remove("active")
    }
    //移除上次选中菜单的样式
    if (this.selectedMenuTarget) {
      this.selectedMenuTarget.classList.remove("active")
    }
    //修改本次选中菜单的样式
    event.currentTarget.classList.add("active");
    //将本次选中的菜单记录
    this.selectedMenuTarget = event.currentTarget;

    // this.products = [];
    this.getSecondaryMenu(c.id);
  }

  getSecondaryMenu(firstMenuId) {
    switch (firstMenuId) {
      case '1':
        this.currentFirstMenu = firstMenuId;
        this.secondaryMenus = [
          {
            title: '',
            menu: [
              {
                id: '1',
                text: '游戏玩伴',
                img: 'assets/imgs/mockdata/house.jpg'
              },
              {
                id: '2',
                text: '娱乐休闲',
                img: 'assets/imgs/mockdata/menu-relax.jpg'
              },
              {
                id: '3',
                text: '公益服务',
                img: 'assets/imgs/mockdata/menu-service.jpg'
              },
              {
                id: '4',
                text: '战友情谊',
                img: 'assets/imgs/mockdata/looking-for-person.jpg'
              },
              {
                id: '5',
                text: '工作搭档',
                img: 'assets/imgs/mockdata/menu-work.jpg'
              },
            ]
          }
        ];
        break;
      case '2':
        this.currentFirstMenu = firstMenuId;
        this.secondaryMenus = [{
          title: '',
          menu: [
            {
              id: '4',
              text: '战友情谊',
              img: 'assets/imgs/mockdata/looking-for-person.jpg'
            },
            {
              id: '1',
              text: '游戏玩伴',
              img: 'assets/imgs/mockdata/house.jpg'
            },
            {
              id: '3',
              text: '公益服务',
              img: 'assets/imgs/mockdata/menu-service.jpg'
            },
            {
              id: '2',
              text: '娱乐休闲',
              img: 'assets/imgs/mockdata/menu-relax.jpg'
            }
          ]
        }];
        break;
      case '3':
        this.currentFirstMenu = firstMenuId;
        this.secondaryMenus = [{
          title: '丢失物品',
          menu: [
            {
              id: '1',
              text: '首饰',
              img: 'assets/imgs/mockdata/menu-shoushi.jpg',
              type: 'lose-thing'
            },
            {
              id: '2',
              text: '钥匙',
              img: 'assets/imgs/mockdata/menu-key.jpg',
              type: 'lose-thing'
            },
            {
              id: '3',
              text: '宠物',
              img: 'assets/imgs/mockdata/menu-dog.jpg',
              type: 'lose-thing'
            },
            {
              id: '4',
              text: '钱包',
              img: 'assets/imgs/mockdata/goods-search.jpg',
              type: 'lose-thing'
            },
            {
              id: '5',
              text: '手机',
              img: 'assets/imgs/mockdata/menu-phone.jpg',
              type: 'lose-thing'
            }
          ]
        }, {
          title: '二手物品',
          menu: [
            {
              id: '5',
              text: '数码电子',
              img: 'assets/imgs/mockdata/menu-computer.jpg',
              type: 'second-hand-thing'
            },
            {
              id: '5',
              text: '服装',
              img: 'assets/imgs/mockdata/menu-clothes.jpg',
              type: 'second-hand-thing'
            },
            {
              id: '5',
              text: '家居',
              img: 'assets/imgs/mockdata/menu-work.jpg',
              type: 'second-hand-thing'
            }
          ]
        }];
        break;
      case '4':
        this.currentFirstMenu = firstMenuId;
        this.secondaryMenus = [{
          title: '',
          menu: [
            {
              id: '1',
              text: '工作',
              img: 'assets/imgs/mockdata/menu-work-time.jpg'
            },
            {
              id: '2',
              text: '生活',
              img: 'assets/imgs/mockdata/menu-relax.jpg'
            },
            {
              id: '3',
              text: '娱乐',
              img: 'assets/imgs/mockdata/menu-amusement.jpg'
            },
            {
              id: '4',
              text: '优惠',
              img: 'assets/imgs/mockdata/menu-youhui.jpg'
            }
          ]
        }];
        break;

    }
  }


  clickSecondMenu(second) {
    switch (this.currentFirstMenu) {
      case '1':
        this.navCtrl.push('PeopleSearchPage');
        break;
      case '2':
        this.navCtrl.push('ThingSearchPage');
        break;
      case '3':
        this.navCtrl.push('GoodsSearchPage');
        break;
      case '4':
        this.navCtrl.push('TimesTradePage');
    }
  }
}
