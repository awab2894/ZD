import ZdHeader from './headerMaker.js';

const header = new ZdHeader("ZD", "favicon.svg", ["Home#home", "About#about", "ZDesigner#ZDesigner", "Contact us#contact"]);

header.setBgColors("#799", "#132", "#9aa", "#0000", "#0001");
header.setColors("#132", "#354", "#021", "#132");
header.setHoverActiveBrightness("110%",  );

header.create();