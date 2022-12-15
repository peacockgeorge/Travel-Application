import { Product } from "./product.model";

export class ProductService{
    static getProducts() {
      throw new Error("Method not implemented.");
    }
    public products: Product [] = [
        {
            id: 1,
            name: 'Rtanj',
            price: 20000,
            description: 'Rtanj is a mountain located in eastern Serbia, about 200 km southeast of Belgrade, near Boljevac. It belongs to the Carpathian Mountains, the highest peak Šiljak (1565 m) represents a natural phenomenon of karst relief. The specific arrangement of the rocks of the karst relief affected not only the plant cover, the waters and springs of Rtnja, but also its shape. So if we look at Rtanj from the north or south, it appears to us as a long ridge in the shape of a trapezoid, while below it is wide and massive, and above it narrows into a narrow border wall.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'last-minute',
            image: 'assets/images/1.jpg'
          },
          {
            id: 2,
            name: 'Stara planina',
            price: 6000,
            description: 'Stara Planina or Balkan Mountain is a mountain range that belongs to the Balkan Mountains (part of the Carpathian-Balkan Mountains), and is located mainly in Bulgaria and a much smaller part in southeastern Serbia. The length of this mountain system is 530 km. It stretches from Vrška Chuka on the Serbian-Bulgarian border in the west to Cape Emina near the Black Sea in the east.[1] The highest point of Stara Planina is Botev peak (2376 m) in Bulgaria, which makes it the third highest peak in Bulgaria, after Musala and Vihren. In Serbia, the highest peak is Midžor with 2169 meters above sea level, which makes it the highest point in Serbia.',
            negative: 90,
            positive: 401,
            quantity: 0,
            category: 'low-cost',
            image: 'assets/images/2.jpg'
          },
          {
            id: 3,
            name: 'Zlatibor',
            price: 30000,
            description: 'Zlatibor is a mountain and nature park in Serbia that covers an area of ​​about 1,000 km², is 55 km long and up to 20 km wide.',
            negative: 11,
            positive: 47,
            quantity: 111,
            category: 'max-price',
            image: 'assets/images/3.jpg'
          },
          {
            id: 4,
            name: 'Tara',
            price: 3500,
            description: 'The Tara mountain massif is located in western Serbia, in the northwestern part bordered by a deep canyon of the Drina river, while its branches descend towards the Kreman valley and the Djetinja river valley, where it rests on the branches of Zlatibor.',
            negative: 67,
            positive: 201,
            quantity: 0,
            category: 'low-cost',
            image: 'assets/images/4.jpg'
          },
          {
            id: 5,
            name: 'Divčibare',
            price: 3500,
            description: 'Divčibare is a town settlement and a famous mountain-tourist place in the town of Valjevo in the Kolubara district on the Maljen mountain. According to the 2011 census, there were 141 permanent residents.',
            negative: 98,
            positive: 206,
            quantity: 22,
            category: 'low-cost',
            image: 'assets/images/5.jpg'
          },
          {
            id: 6,
            name: 'Suva planina',
            price: 10000,
            description: 'Suva planina is a mountain in southeastern Serbia, 45 km long and 15 km wide, which geologically and geographically belongs to the Carpathian-Balkan group of mountains on the very border with the older Serbian-Macedonian massif.',
            negative: 84,
            positive: 380,
            quantity: 65,
            category: 'average-price',
            image: 'assets/images/6.jpg'
          },
          {
            id: 7,
            name: 'Studenica',
            price: 3000,
            description: 'Studenica Monastery is a monastery of the Serbian Orthodox Church. It was founded in 1186 by Serbian prefect Stefan Nemanja.',
            negative: 23,
            positive: 98,
            quantity: 360,
            category: 'last-minute',
            image: 'assets/images/7.jpg'
          },
          {
            id: 8,
            name: 'Drvengrad',
            price: 15000,
            description: 'Drvengrad (German: Küstendorf - Kustendorf), also known as Mećavnik, is an ethnic village in Serbia in Mokra Gora in the Zlatibor district, located on the border between Zlatibor and Tara. It was founded and built on Mećavnik hill according to the idea of ​​the film director Emir Kusturica for the filming of the movie "Life is a Miracle".',
            negative: 16,
            positive: 46,
            quantity: 156,
            category: 'low-cost',
            image: 'assets/images/8.jpg'
          },
          {
            id: 9,
            name: 'Srebrno jezero',
            price: 5000,
            description: 'Srebrno jezero is an artificial lake on the right bank of the Danube and represents its former river arm, which today is closed by two dams. It is located in the Braničevo district in eastern Serbia, two kilometers from Veliki Gradište. It has an average width of 300 m, and an average length of 14 km.',
            negative: 66,
            positive: 195,
            quantity: 11,
            category: 'max-price',
            image: 'assets/images/9.jpg'
          },
          {
            id: 10,
            name: 'Belocrkvanska jezera',
            price: 3600,
            description: 'The Belocrkva Lakes are located in the immediate vicinity, southwest of the town of Bela Crkva.',
            negative: 78,
            positive: 250,
            quantity: 0,
            category: 'last-minute',
            image: 'assets/images/10.jpg'
          },
          {
            id: 11,
            name: 'Fruška gora',
            price: 3600,
            description: 'Fruška gora is an island mountain in Serbia, within which there is a national park.',
            negative: 52,
            positive: 254,
            quantity: 0,
            category: 'last-minute',
            image: 'assets/images/11.jpg'
          },
          {
            id: 12,
            name: 'Prolom Banja',
            price: 50000,
            description: 'Prolom Banja is a settlement in Serbia in the municipality of Kuršumlija in the Toplic district. According to the 2002 census, there were 111 inhabitants (according to the 1991 census, there were 92 inhabitants). It is known for its healing springs.',
            negative: 66,
            positive: 195,
            quantity: 11,
            category: 'max-price',
            image: 'assets/images/12.jpg'
          },
          {
            id: 13,
            name: 'Kosmaj',
            price: 15000,
            description: 'Kosmaj is a mountain in Serbia, in the vicinity of Sopot and Mladenovac. After Avala (506 m) it is the lowest mountain in Šumadija with its 626 m above sea level.',
            negative: 16,
            positive: 46,
            quantity: 156,
            category: 'low-cost',
            image: 'assets/images/13.jpg'
          },
          {
            id: 14,
            name: 'Zlatar',
            price: 22500,
            description: 'Zlatar (Velika Krševa 1,625 m) is a mountain in the southwestern part of Serbia. It is located between the rivers Lim, Uvac, Mileševka and Bistrica. Zlatar belongs to the Dinaric Mountains, which continue to the sea.',
            negative: 23,
            positive: 98,
            quantity: 360,
            category: 'last-minute',
            image: 'assets/images/14.jpg'
          },
          {
            id: 15,
            name: 'Homoljske planine',
            price: 20000,
            description: 'The Homolje mountains are located in eastern Serbia and belong to the group of Carpathian-Balkan mountains. They are built mainly of slate and limestone.',
            negative: 120,
            positive: 367,
            quantity: 150,
            category: 'last-minute',
            image: 'assets/images/15.jpg'
          },
          {
            id: 16,
            name: 'Drina',
            price: 6000,
            description: 'The Drina River (346 km) belongs to the Black Sea basin, and is formed by the confluence of the Tara and Piva rivers near Šćepan Polje (altitude 470 m).',
            negative: 90,
            positive: 401,
            quantity: 0,
            category: 'low-cost',
            image: 'assets/images/16.jpg'
          },
          {
            id: 17,
            name: 'Golija',
            price: 30000,
            description: 'Golija (Serbia), a mountain west of Raška in Serbia, the highest peak is Jankov Kamen (1,833 m).',
            negative: 11,
            positive: 47,
            quantity: 111,
            category: 'max-price',
            image: 'assets/images/17.jpg'
          },
          {
            id: 18,
            name: 'Rudnik',
            price: 3500,
            description: 'A mine is a place from which various types of ores are exploited. In such places where ore is accumulated of economic value, ore is extracted by surface mining or underground mining.',
            negative: 67,
            positive: 201,
            quantity: 0,
            category: 'low-cost',
            image: 'assets/images/18.jpg'
          },
          {
            id: 19,
            name: 'Zagajička Brda',
            price: 3500,
            description: 'Zagajička (Zagajska) brda is a landscape on the northeastern edge of Deliblatska peščara. They cover a little more than 250 ha and represent the second protection zone within the special nature reserve "Deliblatska peščara".',
            negative: 98,
            positive: 206,
            quantity: 22,
            category: 'low-cost',
            image: 'assets/images/19.jpg'
          },
          {
            id: 20,
            name: 'Perućačko jezero',
            price: 10000,
            description: 'Lake Perućac is an artificial lake located about 2.4 km from the town of the same name Perućac, municipality of Bajina Bašta. Due to its geographical location, Lake Perućac is located in the territory of the municipality of Bajina Bašta, Republic of Serbia and the municipality of Srebrenica, Republika Srpska, Bosnia and Herzegovina.',
            negative: 84,
            positive: 380,
            quantity: 65,
            category: 'retirees',
            image: 'assets/images/20.jpg'
          },
       
    ];
    
    getProducts(){
      return this.products;
    }
}