

export default class ZdHeader {
    constructor(logoName = 'Website Name', logoImg = 'none', items = []) {
        // structures :
        this.logoName = logoName;
        this.logoImg = logoImg;
        this.items = items;
        // colors :
        this.logoNameColor = '#def';
        this.itemsColor = '#456';
        this.firstItemColor = '#05a';
        this.lastItemColor = this.itemsColor;
        // bg colors :
        this.headerBgColor = '#234';
        this.burgerIconBgColor = '#bcd';
        this.navMenuBgColor = '#bcd';
        this.logoBgColor = 'transparent';
        this.logoImgBgColor = 'transparent';
        // hover and active
        this.hoverBrightness = '110%';
        this.activeBrightness = '120%';
        // responsive the header 
        this.burgerMenuMaxWidth = `${170 * this.items.length}px`

    }
    setColors(logoNameColor = '#ddeeff', itemsColor = '#ddeeff', firstItemColor = '', lastItemColor = '') {
        if (firstItemColor === 'unset') {
            firstItemColor = itemsColor;
        }
        if (lastItemColor === 'unset') {
            lastItemColor = itemsColor;
        }
        this.logoNameColor = logoNameColor;
        this.itemsColor = itemsColor;
        this.firstItemColor = firstItemColor;
        this.lastItemColor = lastItemColor;
    }
    setBgColors(headerBgColor = '#333333', burgerIconBgColor = '#0099ff', navMenuBgColor = '#444444', logoBgColor = 'transparent', logoImgBgColor = 'transparent') {
        this.headerBgColor = headerBgColor;
        this.burgerIconBgColor = burgerIconBgColor;
        this.navMenuBgColor = navMenuBgColor;
        this.logoBgColor = logoBgColor;
        this.logoImgBgColor = logoImgBgColor;
    }
    setHoverActiveBrightness(hoverBrightness = '90%', activeBRightness = '80%') {
        this.hoverBrightness = hoverBrightness;
        this.activeBrightness = activeBRightness;
    }
    styles() {
        return `<style id="zdStyle">
        *{
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }
            body{
            width: 100px}
            
        #zd-header{
            position: fixed;
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: ${this.headerBgColor};
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            font-family: sans-serif;
            font-weight: 600;
            padding-right: 20px;
            z-index: 10;
        }
        
        #zd-logo{
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: ${this.logoBgColor};
        }
        #zd-logoImg{
            --img-size: 50px;
            width: var(--img-size);
            height: var(--img-size);
            background: ${this.logoImgBgColor};
        }
        #zd-logoName{
            font-size: 30px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: ${this.logoNameColor};
            user-select: text;
            -webkit-user-select: text;
            -moz-user-select: text;
        }
        #zd-navMenu{
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            gap: 40px;
            max-width: 650px;
            font-size: 18px;
            display: flex;
        }
        #zd-navMenu::-webkit-scrollbar{
            width: 9px;
            height: 9px;
        }
        #zd-navMenu::-webkit-scrollbar-thumb{
            border-radius: 50px;
            background: ${this.burgerIconBgColor};
            overflow-y: auto;
            }
        .zd-navItem{
            height: 100%;
            color: ${this.itemsColor};
        }
        .zd-navItem:first-child{
            color: ${this.firstItemColor};
        }
        .zd-navItem:last-child{
            color: ${this.lastItemColor};
        }
        .zd-navItem:hover{
            filter: brightness(${this.hoverBrightness});
        }
        .zd-navItem:active{
            filter: brightness(${this.activeBrightness});
        }
        .zd-navLink{
            color: inherit;
            text-decoration: none;
        }
        #zd-burgerIcon{
            position: relative;
            display: none;
            align-items: center;
            justify-content: center;
            width: 30px;
            --bar-height: 5px;
            --bar-gap: 8px;
            --bar-rotate: 0deg;
            height: calc(var(--bar-height) * 5);  
        }
        #zd-burgerIcon:hover{
            filter: brightness(90%);
        }
        .zd-iconBar{
            position: absolute;
            width: 100%;
            height: var(--bar-height);
            background: ${this.burgerIconBgColor};
            transition: 0.3s cubic-bezier(0, 1.5, 1, 1);
        }
        .zd-iconBar:first-child{
            filter: brightness(105%);
        }
        .zd-iconBar:last-child{
            filter: brightness(95%);
        }
        
       @media only screen AND (max-width: ${this.burgerMenuMaxWidth}) {
            #zd-burgerIcon{
                display: flex;
            }
            #zd-navMenu{
                position: absolute;
                width: 100%;
                height: 100vh;
                left: 0;
                top: 69.9px;
                flex-direction: column;
                justify-content: start;
                background: ${this.navMenuBgColor};
                gap: 50px;
                padding: 0;
                height: 0;
                transition: 0.20s linear;
                overflow-y: auto;
            }
            .zd-navItem{
                height: fit-content;
            }
            #zd-navBar.clicked #zd-navMenu{
                padding: 30px 10px 30px;
                height: calc(100vh - 69.9px);
            }
            #zd-navBar.clicked #zd-burgerIcon{
                --bar-rotate: 45deg;
                --bar-gap: 0px;
            }
            #zd-navBar.clicked .zd-iconBar{
                filter: brightness(100%);
            }
            #zd-navBar.clicked #zd-burgerIcon .zd-iconBar:nth-child(2){
                width: 0;
            }
            .zd-iconBar:nth-child(1){
                transform: rotate(var(--bar-rotate)) translate(0, calc(var(--bar-gap) * -1));
            }
            .zd-iconBar:nth-child(3){
                transform: rotate(calc(var(--bar-rotate) * -1)) translate(0, var(--bar-gap));
            }
        }
        @media only screen AND (max-width: 400px) {
            #zd-logo{
                gap: 5px;
            }
            #zd-logoImg{
                --img-size: 35px;
                margin: calc(15px / 2) 0 calc(15px / 2);
            }
            #zd-logoName{
                font-size: 23px;
            }
            #zd-burgerIcon{
                width: 35px;
            }
        }
            </style>`
    }
    create() {
        document.head.innerHTML += this.styles();
        const zdHeader = document.createElement('div');
        const zdLogo = document.createElement('div');
        const zdLogoImg = document.createElement('img');
        const zdLogoName = document.createElement('h1');
        const zdNavbar = document.createElement('di');
        const zdburgerIcon = document.createElement('div');
        const zdIconBar1 = document.createElement('div');
        const zdIconBar2 = document.createElement('div');
        const zdIconBar3 = document.createElement('div');
        const zdNavMenu = document.createElement('div');

        zdHeader.id = 'zd-header';

        zdLogo.id = 'zd-logo';
        zdLogoImg.id = 'zd-logoImg';
        zdLogoName.id = 'zd-logoName';
        zdLogoName.textContent = this.logoName;

        zdNavbar.id = 'zd-navBar';
        zdburgerIcon.id = 'zd-burgerIcon';
        zdIconBar1.classList.add('zd-iconBar');
        zdIconBar2.classList.add('zd-iconBar');
        zdIconBar3.classList.add('zd-iconBar');

        zdNavMenu.id = 'zd-navMenu';


        document.body.prepend(zdHeader);
        zdHeader.append(zdLogo);
        zdHeader.append(zdNavbar);
        if (this.logoImg != null && this.logoImg != 'none' && this.logoImg != '') {
            zdLogoImg.src = this.logoImg;
        } else {
            zdLogoImg.style.width = 0;
        }
        zdLogo.append(zdLogoImg);
        zdLogo.append(zdLogoName);
        zdNavbar.append(zdNavMenu);
        zdNavbar.append(zdburgerIcon);
        zdburgerIcon.append(zdIconBar1);
        zdburgerIcon.append(zdIconBar2);
        zdburgerIcon.append(zdIconBar3);

        for (let item of this.items) {
            let linkText = item.split('#')[0];
            let linkHref = '#' + item.split('#')[1];
            let navItem = document.createElement('li');
            let navLink = document.createElement('a');
            navItem.classList.add('zd-navItem');
            navLink.classList.add('zd-navLink');
            navLink.textContent = linkText;
            navLink.href = linkHref;
            zdNavMenu.append(navItem);
            navItem.append(navLink);
        }

        zdburgerIcon.onclick = () => {
            zdNavbar.classList.toggle('clicked');
        }
    }

}
