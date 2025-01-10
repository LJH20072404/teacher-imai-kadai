'use strict'; /* エラーをチェック*/

{/*ローカルスコープ*/

// DOM取得
const tabMenus = document.querySelectorAll('#js-tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
})

    
//イベントの処理
function tabSwitch(e) {

    // クリックされた
    const tabTargetData = e.currentTarget.dataset.tab;

    //
    const tabList = e.currentTarget.closest('.tab__menu');
    const tabItems = tabList.querySelectorAll('#js-tab__menu-item');

    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('#js-tab__panel-box');

    //
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('is-active');
    })
    tabPanelItems.forEach((tabPanelItem) => {
        tabPanelItem.classList.remove('is-show');
    })

    e.currentTarget.classList.add('is-active');
    tabPanelItems.forEach((tabPanelItem) => {
        if (tabPanelItem.dataset.panel === tabTargetData) {
            tabPanelItem.classList.add('is-show');
        }
    })
}

}

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
