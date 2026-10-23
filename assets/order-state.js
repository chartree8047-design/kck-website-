/* Shared coffee selection for the storefront and activity quote. Prices are recalculated on read. */
window.KCKOrder = (() => {
  const key = 'kck-order-v1', languageKey = 'kck-language';
  const prices = {washed:[160,260,400,750], honey:[160,300,480,950], natural:[160,300,480,950]};
  const sizes = ['100g','250g','500g','1kg'];
  const roasts = id => id === 'washed' ? ['Light Roast','Medium Roast','Dark Roast'] : ['Light Roast'];
  const valid = i => i && Object.hasOwn(prices,i.id) && sizes.includes(i.size) && roasts(i.id).includes(i.roast) && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 1000;
  function read(){try{const x=JSON.parse(localStorage.getItem(key));return {coffee:Array.isArray(x?.coffee)?x.coffee.filter(valid).map(i=>({...i,title:i.id.toUpperCase()+' PROCESS'})):[],activities:Array.isArray(x?.activities)?x.activities:[]};}catch{return {coffee:[],activities:[]};}}
  function save(value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
  function saveCoffee(coffee){return save({...read(),coffee:coffee.filter(valid)});}
  function saveActivities(activities){return save({...read(),activities});}
  const priceOf=(id,size)=>prices[id][sizes.indexOf(size)];
  function language(){try{return localStorage.getItem(languageKey)==='en'?'en':'th';}catch{return 'th';}}
  function setLanguage(lang){try{localStorage.setItem(languageKey,lang);}catch{}}
  return {read,saveCoffee,saveActivities,prices,sizes,roasts,priceOf,language,setLanguage};
})();
