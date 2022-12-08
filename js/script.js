'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btn-menu').addEventListener('click', e => {
    open = !open;
    Togglemenu();
})

document.querySelector('#btn-close').addEventListener('click', e => {
    open = false;
    Togglemenu();
})

function Togglemenu () {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return
    }
    document.querySelector('#menu').style.marginLeft = `-${menuSize}`
}