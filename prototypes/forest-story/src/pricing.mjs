export const sizes = ['100g', '250g', '500g', '1kg'];
export const grams = {'100g':100,'250g':250,'500g':500,'1kg':1000};
export const prices = {washed:[160,260,480,750],honey:[160,300,480,950],natural:[160,300,480,950]};
export const priceOf = (id,size) => prices[id][sizes.indexOf(size)];
export const shippingFor = weight => weight <= 0 ? 0 : weight >= 10000 ? 0 : weight <= 1000 ? 50 : weight <= 3000 ? 80 : weight <= 5000 ? 100 : 150;
export const totalsFor = items => {const weight=items.reduce((n,i)=>n+grams[i.size]*i.quantity,0);const subtotal=items.reduce((n,i)=>n+priceOf(i.id,i.size)*i.quantity,0);const shipping=shippingFor(weight);return {weight,subtotal,shipping,total:subtotal+shipping};};
