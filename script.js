class Product{
    name;
    price;

  toString ()
  
 {
   return'{Name:${this.name}, Price:${this.price}}';
 }
 }
 
 void main()
   var list=[];
   var List2=[];
   var List3=[];
   sum1 = 0,sum2 =0;
   var sortedByValueMap;
 
 Map.item =
 {
   'Bike':100, 
   'TV':200,
   'Album':10,
   'Book':5, 
   'Phone':500, 
   'Computer':1000
 };
 item.forEach((key, value) => list.add(Product(key, value)));
 return('Given Product:$list');
 sortedByValueMap=Map.fromEntries(item.entries.toList().sort((e1,e2)=> e1.value.compareTo(e2.value)));
 return("Sorted item:$sortedByValueMap");
 sortedByValueMap.forEach((key,value)=>List2.add(value));
 return('the product cheap is :${sortedByValueMap.keys.toList().first}');
 return('the Expensive product  is :${sortedByValueMap.keys.toList().last}');

 for (let i = 0; i ==list2; i++) 

 {
   sum1 +=i;
   if ( i > 10 )
   {
    List3.add(i);
   }
 };
 return('Sum of total price of product is:$sum1');

 for (let i = 0; i ==list; i++) 
 {
   sum2 +=j;
 };
 return('The total price of product after removing the ones less than 10 :$sum2');