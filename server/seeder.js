import Product from "./models/product.js";

import Customer from "./models/customer.js";

import Order from "./models/order.js";

class Seeder {

    static async seedData(){

        await Product.deleteMany()

        await Customer.deleteMany()

        await Order.deleteMany()


        await Product.create({description: "Herschel supply co 25!", price: 1000, rating: 4.7, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1632282003890-020318a49e62?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Black leather jacket", price: 600, rating: 4.5, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Timex silver", price: 350, rating: 5.0, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Soft shirt", price: 350, rating: 4.6, category: 'featured', sub_category: 'none', image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

  
        await Product.create({description: "Cotton t-shirt", price: 400, rating: 4.7, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww"})

        await Product.create({description: "Flowring skirt", price: 350, rating: 4.8, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Cotton scarf", price: 350, rating: 4.6, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Jasmin socks", price: 200, rating: 4.9, category: 'trending', sub_category: 'none', image: "https://images.unsplash.com/photo-1631180543602-727e1197619d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})


        await Product.create({description: "Nike sneakers", price: 2500, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Adma boots", price: 2700, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Trendy Denim Long sleeve", price: 600, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

        await Product.create({description: "Women side pocket", price: 1000, rating: 5.0, category: 'best_selling', sub_category: 'none', image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})

  
        
        // shoes

        // men shoes
        
        await Product.create({description: "AISEW Womens Button Down Shirts Casual V Neck Long Sleeve Loose Fit Collared Plain Blouses Tops with Pocket", price: 500, rating: 3.1, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81RNKkMLKvL._AC_SX466_.jpg"})

        await Product.create({description: "Astylish Womens Open Front Cardigan Hollow Out Crochet Long Sleeve Knit Sweater Coat", price: 1200, rating: 4.1, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71Imt00lLdL._AC_SY550_.jpg"})

        await Product.create({description: "GRAPENT Womens Cargo Pants Wide Leg Baggy High Rise Pull On Elastic Waist Stretch Loose Pants with Pocket 90s Outfit Y2K", price: 500, rating: 3.2, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/6107TdXDFcL._AC_SX466_.jpg"})

        await Product.create({description: "Viracy Womens Golf Polo Shirts 1/4 Zip Up Overlap Short Sleeve Quick Dry Workout Tops", price: 450, rating: 4.2, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/811l2fft0FL._AC_SY550_.jpg"})

        await Product.create({description: "Real Essentials 5 Pack: Women's Short Sleeve V-Neck Activewear T-Shirt Dry-Fit Wicking Yoga Top (Available in Plus)", price: 400, rating: 3.3, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/612Lz89socL._AC_SX569_.jpg"})

        await Product.create({description: "SHAPERX Bodysuit for Women Tummy Control Shapewear Seamless Sculpting Thong Body Shaper Tank Top", price: 1000, rating: 4.1, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71EPHz3fArL._AC_SX466_.jpg"})

        await Product.create({description: "Nippies Nipple Cover - Sticky Adhesive Silicone Nipple Pasties - Reusable Pasty Nipple Covers for Women with Travel Box", price: 500, rating: 4.3, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51S9vy6ywpL._AC_SX569_.jpg"})

        await Product.create({description: "Fearless Tape - Double Sided Tape", price: 300, rating: 3.4, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61hJejycXrL._AC_SY550_.jpg"})

        await Product.create({description: "HUE Women's Slouch Sock 3 Pair Pack", price: 250, rating: 4.4, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71av7iHTuRL._AC_SY550_.jpg"})

        await Product.create({description: "OQQ Women Yoga Jumpsuits Workout Ribbed Long Sleeve Sport Jumpsuits", price: 1000, rating: 3.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/615CKGkHk4L._AC_SY550_.jpg"})

        await Product.create({description: "BALEAF Women's Fleece Lined Leggings Thermal Warm Winter Tights High Waisted Yoga Pants Cold Weather with Pockets", price: 900, rating: 4.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/512vBtLoBTL._AC_SY550_.jpg"})

        await Product.create({description: "MANGOPOP Women's Mock Turtle Neck Long Sleeve Tops Bodysuit Jumpsuit", price: 1000, rating: 3.6, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51jZphBMMmL._AC_SX466_.jpg"})

        await Product.create({description: "THE GYM PEOPLE Women's Joggers Pants Lightweight Athletic Leggings Tapered Lounge Pants for Workout, Yoga, Running", price: 900, rating: 4.6, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/615YipeumnL._AC_SY550_.jpg"})

        await Product.create({description: "Kindcall Lightweight Basic Crop Tops Slim Fit Long Sleeve Workout Shirts for Women", price: 550, rating: 3.7, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/41PvMBW58xL._AC_SY550_.jpg"})

        await Product.create({description: "SHAPERMINT High Waisted Body Shaper Shorts Shapewear for Women Tummy Control Thigh Slimming Technology", price: 450, rating: 4.7, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61KXHpR-YlL._AC_SX569_.jpg"})

        await Product.create({description: "AUTOMET Womens Casual Plaid Shacket Button Down Long Sleeve Shirt", price: 600, rating: 3.8, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/614VXl7BjqL._AC_SY550_.jpg"})

        await Product.create({description: "Saslax Womens Corduroy Shirt Long Sleeve Oversized Button Up V Neck Blouses Tops Loose Shacket Jacket", price: 500, rating: 4.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/712SNkWrEQL._AC_SY550_.jpg"})

        await Product.create({description: "onlypuff Women's Pocket Shirt Graphic Tunic Tops Sweatshirts", price: 400, rating: 4.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61PD2jkzjoL._AC_SY550_.jpg"})

        await Product.create({description: "GRAPENT Dress Pants Women High Waisted Wide Leg Work Pants Dressy Casual Trendy Elastic Waist Pleated Belted Trousers", price: 450, rating: 4.0, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61wyIFoWtkL._AC_SX466_.jpg"})

        await Product.create({description: "luvamia 2023 Jean Shorts Womens Mid Rise Casual Ripped Distressed Stretchy Denim Shorts Y2K Fold Hem Short Hot Pants", price: 400, rating: 3.8, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81NXYXVOBsL._AC_SX466_.jpg"})

        await Product.create({description: "ANRABESS Women's Crewneck Long Sleeve Oversized Fuzzy Knit Chunky Warm Pullover Sweater Top", price: 700, rating: 4.4, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81O5Nc+1pSL._AC_SY550_.jpg"})

        await Product.create({description: "Columbia Women's Heavenly Long Hooded Jacket", price: 1200, rating: 4.6, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51OrmjNeFqL._AC_SX569_.jpg"})

        await Product.create({description: "Hanes Women's Value, Ankle Soft Moisture-Wicking Socks, Available in 10 and 14-Packs", price: 200, rating: 4.7, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81GSO31SBpL._AC_SX569_.jpg"})

        await Product.create({description: "Charmnight Womens High Waist Tights Fishnet Stockings Thigh High Pantyhose", price: 550, rating: 4.6, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61e5aE3kxZL._AC_SX569_.jpg"})

        await Product.create({description: "CHRLEISURE Women's Sparkle Rhinestone Fishnets, Sexy Sparkly Glitter Party Concert Outfit Fishnet Stockings", price: 1000, rating: 4.3, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61TYgQaGVNL._AC_SX466_.jpg"})

        await Product.create({description: "Physix Gear Compression Socks for Men & Women 20-30 mmhg Graduated Athletic for Running Nurses Shin Splints Flight Travel", price: 200, rating: 4.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/711vGxLodJL._AC_SX466_.jpg"})

        await Product.create({description: "Trendy Queen Womens Long Sleeve Shirts Fall Fashion 2023 Crop Tops Basic Layering Workout Slim Fitted Y2K Tops", price: 1200, rating: 4.2, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61P3bPmIWAL._AC_SY550_.jpg"})

        await Product.create({description: "IDEGG No Show Socks Womens and Men Low Cut Ankle Short Anti-slid Athletic Running Novelty Casual Invisible Liner Socks", price: 200, rating: 4.7, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81EFbzAltVL._AC_SX569_.jpg"})

        await Product.create({description: "Vldnery Women's Yoga Top Square Neck Loose fit Athletic Moisture Wicking Quick Dry Running Workout Top", price: 700, rating: 4.9, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81zCpf1ZmZL._AC_SY550_.jpg"})

        await Product.create({description: "Viracy Women's Zip Up Golf Workout Tank Tops Sleeveless Quick Dry Athletic Polo Shirts", price: 450, rating: 4.5, category: 'clothing', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61P7eHncX3L._AC_SY550_.jpg"})


        await Product.create({description: "JOMLUN Boys Fleece Lined Hiking Pants Outdoor Soft shell Snow Ski Waterproof Windproof Kids Warm Cargo Insulated Pant Winter", price: 450, rating: 3.1, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61IyN-nMHrL._AC_SX569_.jpg"})

        await Product.create({description: "CREATMO US Boy's Snow Bibs Kids Ski Pants Waterproof Insulated Winter Overalls", price: 500, rating: 4.1, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81D1RaytSGL._AC_SY550_.jpg"})

        await Product.create({description: "GGleaf Boys' Winter Coat Warm Puffer Parka Waterproof Jacket with Detachable Fur Hood for Big Boys", price: 100, rating: 3.2, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71wxiCjkveL._AC_SY550_.jpg"})

        await Product.create({description: "Aalizzwell Toddler Boys Buffalo Plaid Hoodie Outfit", price: 1000, rating: 4.2, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/615Ld7ZNnJL._AC_SX569_.jpg"})

        await Product.create({description: "Hanes Boys' and Toddler Underwear, Comfort Flex Waistband Boxer Briefs, Multiple Packs Available", price: 200, rating: 3.3, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81mSG78BFqL._AC_SX569_.jpg"})

        await Product.create({description: "Nike Kids' Everyday Cushion Crew Socks (6 Pairs)", price: 200, rating: 4.3, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81Y49CpPftL._AC_SX569_.jpg"})

        await Product.create({description: "Carhartt Boys' Canvas Insulated Hooded Active Jac", price: 1000, rating: 3.4, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91QCGmX5TgL._AC_SX569_.jpg"})

        await Product.create({description: "Nike Unisex Kids 6-Pack Crew Socks - multi, 5-7", price: 200, rating: 4.4, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61ygIPAAOOL._AC_SY550_.jpg"})

        await Product.create({description: "PURE CHAMP 3Pk Boys Sweatpants Fleece Athletic Workout Kids Clothes Boys Joggers with Zipper Pocket and Drawstring Size 4-20", price: 700, rating: 3.5, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81DKmf1VWKL._AC_SX569_.jpg"})

        await Product.create({description: "The Children's Place Boys' Big Kid Medium Weight Puffer Jacket, Wind, Water-Resistant Seasonal", price: 1200, rating: 4.5, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61nsOCj2zwL._AC_SX466_.jpg"})

        await Product.create({description: "NIKE Sportswear Boys' Club Pullover Hoodie", price: 1100, rating: 4.3, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71zdwdDgt-L._AC_SX522_.jpg"})

        await Product.create({description: "LEAO Youth Boys Compression Shirt Long Sleeve Fleece Quick Dry Sports Baselayer Soccer Baseball Basketball Undershirt", price: 500, rating: 3.7, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61Rh7O4QBvL._AC_SX569_.jpg"})

        await Product.create({description: "Marvelous Kids Boys' 5-Piece Formal Slim Fit Suit Set", price: 2000, rating: 4.9, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/41EkPojZOeL._AC_SX522_.jpg"})

        await Product.create({description: "Aalizzwell Toddler Infant Baby Boys Hoodie Sweatshirt Pants Outfits Spring Winter Sweatsuits Clothes Sets", price: 1000, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71v7SYTXkWL._AC_SX466_.jpg"})

        await Product.create({description: "Cozople 7-20T Boys Swim Trunks Boxer Brief Liner Swim Shorts Quick Dry Bathing Suit Compression Swimwear", price: 250, rating: 4.8, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/815sZJZ9ZCL._AC_SX569_.jpg"})

        await Product.create({description: "Thermajohn Boys Thermal Underwear Set for Kids Long Johns Underwear for Boys Thermal Top and Bottom Set for Winter", price: 1000, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61m04yaNgtL._AC_SY550_.jpg"})

        await Product.create({description: "Pokemon Boys' 6-Piece Snug-fit Cotton Pajamas Set", price: 700, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61gh6WGnUPL._AC_SX466_.jpg"})

        await Product.create({description: "Fruit of the Loom Boys' Eversoft Cotton Undershirts, T Shirts & Tank Tops", price: 400, rating: 4.7, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51MnHNpgyfL._AC_SY550_.jpg"})

        await Product.create({description: "Real Essentials 3 Pack: Boys Youth Active Athletic Soft Fleece Jogger Sweatpants", price: 550, rating: 4.4, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81SKSbhUBcL._AC_SX679_.jpg"})

        await Product.create({description: "adidas Boys' Big Active Sports Athletic Tricot Jogger Pant", price: 550, rating: 4.7, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71hY8-zJFhL._AC_SY550_.jpg"})

        await Product.create({description: "Gioberti Boy's Knitted Full Zip Cardigan Sweater with Soft Brushed Flannel Lining", price: 1100, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81n+IqgbYzL._AC_SX569_.jpg"})

        await Product.create({description: "Kimocat Boys 3Pcs Clothing Sets Elegant Long Sleeve Shirts + Vest with Flower+Pants Party Suit", price: 1200, rating: 4.5, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71QxPOJnxLL._AC_SX569_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Toddlers and Baby Boys' 3-Piece Fleece Vest, Long-Sleeve Shirt, and Woven Pant Playwear Set", price: 600, rating: 4.7, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91Tmb0DLpJL._AC_SY550_.jpg"})

        await Product.create({description: "The Children's Place Boys' Long Sleeve Oxford Button Down Shirt", price: 400, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71AqWMkQrRL._AC_SX466_.jpg"})

        await Product.create({description: "The Children's Place Boys' Long Sleeve Thermal Henley Shirt", price: 300, rating: 4.8, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91vcAKuHbtL._AC_SX466_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Boys' Long-Sleeve Shirts, Pack of 3", price: 1200, rating: 4.8, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91D9keJyq0L._AC_SY550_.jpg"})

        await Product.create({description: "Real Essentials 3 Pack Boys Pajama Pants Super Soft Fleece PJ Lounge Bottoms for Kids", price: 2500, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81FGxquLJmL._AC_SX522_.jpg"})

        await Product.create({description: "The Children's Place Boys Athletic Performance Pants", price: 650, rating: 4.5, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81TTLCXUrzL._AC_SX466_.jpg"})

        await Product.create({description: "Columbia Boys' Glennaker Rain Jacket", price: 1000, rating: 4.6, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51okOH2sQcL._AC_SX569_.jpg"})

        await Product.create({description: "Amazon Essentials Boys and Toddlers' Lightweight Water-Resistant Packable Hooded Puffer Coat", price: 1000, rating: 4.5, category: 'clothing', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91m2e1Wz1iL._AC_SX569_.jpg"})


        await Product.create({description: "TODDOR 3 Pack Girls Winter Fleece Lined Leggings Stretchy Solid Velvet Pants Warm and Soft Tights for Kids", price: 1100, rating: 3.1, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81W4FK4umoL._AC_SX569_.jpg"})

        await Product.create({description: "Resinta 1 Pair Girls Cotton Winter Fleece Leggings Warm Thick Thermal Pants Cable Knit Velvet Tights for Kids", price: 1000, rating: 4.1, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91PtaSx5hVL._AC_SX569_.jpg"})

        await Product.create({description: "TODDOR 2 Pack Girls’ Fleece Lined Leggings Soft Printed Ankle Length Tights Pants Winter Warm Thick Stretchy Pants", price: 500, rating: 3.3, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91AZJDwfl6L._AC_SY550_.jpg"})

        await Product.create({description: "Hanes Girls' Cool Comfort Ankle, 12-Pair Pack Fashion Liner Socks", price: 150, rating: 4.3, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91Ay6VSEI1S._AC_SX569_.jpg"})

        await Product.create({description: "FROGG TOGGS Ultra-lite2 Waterproof Breathable Poncho", price: 800, rating: 3.5, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71ffdsc9LwL._AC_SX466_.jpg"})

        await Product.create({description: "Fruit of the Loom Toddler Girls' Tag-Free Cotton Underwear", price: 150, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91SFGOZyjJS._AC_SY550_.jpg"})

        await Product.create({description: "The Children's Place Girls' Leggings", price: 700, rating: 4.5, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51at37dMMzL._AC_SX466_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Toddlers and Baby Girls' Loose-Fit Flame Resistant Fleece Footed Pajamas, Pack of 3", price: 650, rating: 3.8, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91meSQJtMjL._AC_SX522_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Girls and Toddlers' 4-Piece Pajama Set (Cotton Top & Fleece Bottom)", price: 1000, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81tnnsy7mgL._AC_SX522_.jpg"})

        await Product.create({description: "Resinta Girls' Leggings with Skirt Ruffle Skirt Pants Warm Tutu Pants Girls Footless Tights Lovely Skirt Leggings for Girls", price: 600, rating: 4.5, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71Z04iSpPPL._AC_SY550_.jpg"})

        await Product.create({description: "Real Essentials 3 Pack: Girls' Dry-Fit Jogger Sweatpants Soft Active Athletic Kids Joggers with Pockets & Drawstring", price: 750, rating: 4.1, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91gFDtWD1yL._AC_SX466_.jpg"})

        await Product.create({description: "HopeKitt Girls 2 Piece Outfits Kids Clothing Sets Sweatsuit Jogger Set Tracksuit Sweatshirts and Sweatpants", price: 850, rating: 4.4, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71TiqtY8VfL._AC_SY550_.jpg"})

        await Product.create({description: "Yoga Active Leggings for Girls with 2 Pockets - Kids Workout Yoga Pants for Athletic (Pack of 2", price: 1200, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71TIr2MmyuL._AC_SX522_.jpg"})

        await Product.create({description: "Brix Girls' Long Sleeve Tees - 4 -Pack Crew Neck Super Soft Cotton T Shirts.", price: 1200, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71aPo60EZEL._AC_SX569_.jpg"})

        await Product.create({description: "3 Pack Girls Flowy Shorts with Spandex Liner 2-in-1 Youth Butterfly Skirts for Fitness, Running, Sports", price: 450, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71vmYVHTgfL._AC_SX425_.jpg"})

        await Product.create({description: "Floerns Girls 3 Pcs Letter Graphic Print Elastic Waist Sweatpants Jogger Pants", price: 1600, rating: 4.1, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71-e+gtvIwL._AC_SY550_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Toddlers and Baby Girls' 4-Piece Long-Sleeve Shirts and Pants Playwear Set", price: 1000, rating: 4.8, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/810I+slekaL._AC_SY550_.jpg"})

        await Product.create({description: "Girls Sweater Pullover Cable Knit Long Sleeve Turtleneck Chunky Warm Top", price: 650, rating: 4.6, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71KoBANqXvL._AC_SY550_.jpg"})

        await Product.create({description: "AMMENGBEI Girls 2 Piece Outfits Sleeveless Halter Crop Top Bell Bottoms Flare Pants with Headband Kids Summer Clothes Set", price: 600, rating: 4.7, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71zoYBvLtsL._AC_SX569_.jpg"})

        await Product.create({description: "BTween 4-Pack Girls Shorts - Cotton French Terry Shorts for Girls - Kids Lounge, Sleep and Play Summer Clothing", price: 1200, rating: 4.5, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81DiajjMuML._AC_SX569_.jpg"})

        await Product.create({description: "Amarmia Girl's Open Front Cardigan Long Sleeve Knit Sweaters Kids Solid Cute Casual Loose Outerwear Coats with Pockets", price: 650, rating: 4.4, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/515z1xLCn5L._AC_SX466_.jpg"})

        await Product.create({description: "The Children's Place Girls' Flare Legging Pants 3-Pack", price: 1100, rating: 4.0, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81N-TS-c4cL._AC_SX466_.jpg"})

        await Product.create({description: "Barbie Girls Fleece Hoodie and Leggings Outfit Set Toddler to Big Kid", price: 800, rating: 4.6, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71wj1FQA4IL._AC_SX569_.jpg"})

        await Product.create({description: "Popular Cotton Girls Training Bra - Crop Cami Training Bras for Girls with Adjustable Straps. Cotton Bra Pack.", price: 200, rating: 4.5, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71fa0w9EcZL._AC_SX569_.jpg"})

        await Product.create({description: "The Children's Place Girls Basic Denim Jacket", price: 650, rating: 4.8, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91sKPVzAqKL._AC_SX522_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Toddler Girls' Graphic Long-Sleeve Tees, Pack of 3", price: 600, rating: 4.8, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81EnF8UgXxL._AC_SX466_.jpg"})

        await Product.create({description: "Hiturbo Kids Swim Parka: Waterproof Changing Robe - Fine Short Lining - Oversized Swimming Jacket - Hooded Surf Poncho (8-15Y)", price: 700, rating: 4.3, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61IkXYzkFTL._AC_SX679_.jpg"})

        await Product.create({description: "SOLY HUX Girl's Letter Print Drop Shoulder Hoodie Sweatshirt and Jogger Sweatpants 2 Piece Outfit", price: 900, rating: 4.0, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61IfXkFm6BL._AC_SY550_.jpg"})

        await Product.create({description: "Simple Joys by Carter's Toddlers and Baby Girls' Fleece Full-Zip Hoodies, Pack of 2", price: 450, rating: 4.8, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81gFq9CKvPL._AC_SX466_.jpg"})

        await Product.create({description: "EVERSWE Girls' Winter Fleece Lined Tights, Girls' Thick Microfiber Tights", price: 550, rating: 4.4, category: 'clothing', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81WayekiuhL._AC_SY550_.jpg"})


        await Product.create({description: "Legendary Whitetails Men's Journeyman Shirt Jacket, Flannel Lined Shacket for Men, Water-Resistant Coat Rugged Fall Clothing", price: 700, rating: 3.1, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/818J5xABpuL._AC_SX522_.jpg"})

        await Product.create({description: "Venado Men's Smuggler Concealed Carry Chore Coat - Hooded Flannel Lined Jacket", price: 900, rating: 4.1, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/617nCpLhaiL._AC_SX466_.jpg"})

        await Product.create({description: "Men’s Regular Stretch Jeans. Blue Jeans. Sizes 28 to 50.", price: 700, rating: 3.3, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/51iZ5brKwaL._AC_SX522_.jpg"})

        await Product.create({description: "5 Pack Men's Dry Fit T Shirts, Athletic Running Gym Workout Short Sleeve Tee Shirts for Men", price: 1100, rating: 4.3, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81fRiskSVjL._AC_SY550_.jpg"})

        await Product.create({description: "adidas Men's Athletic Cushioned Crew Socks with Arch Compression for a Secure Fit (6-Pair)", price: 600, rating: 3.4, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/817EpDqsL-L._AC_SX569_.jpg"})

        await Product.create({description: "PURE CHAMP Mens 3 Pack Fleece Active Athletic Workout Jogger Sweatpants for Men with Zipper Pocket and Drawstring Size S-3XL", price: 1200, rating: 4.3, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/91XUMIlN-fL._AC_SX569_.jpg"})

        await Product.create({description: "Fruit of the Loom Men's Coolzone Boxer Briefs, Moisture Wicking & Breathable, Assorted Color Multipacks", price: 200, rating: 3.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81lHfvvXK0L._AC_SX679_.jpg"})

        await Product.create({description: "Nike Performance Cushion Crew Socks with Band (6 Pairs)", price: 900, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81XwDw-bXpL._AC_SX569_.jpg"})

        await Product.create({description: "Fruit of the Loom Men's Eversoft Cotton Stay Tucked Crew T-Shirt", price: 400, rating: 3.8, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY550_.jpg"})

        await Product.create({description: "Hanes Men's Ecosmart Fleece Sweatshirt, Cotton-blend Pullover, Crewneck Sweatshirt for Men (1 Or 2 Pack)", price: 800, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71fyw1U54GL._AC_SX569_.jpg"})

        await Product.create({description: "Hanes Men's Boxer Briefs, Soft and Breathable Cotton Underwear with ComfortFlex Waistband, Multipack", price: 600, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81ZBOce1WwL._AC_SX569_.jpg"})

        await Product.create({description: "CRYSULLY Men's Sherpa Lined Jacket Fleece Full Zip Winter Hooded Sweatshirt Coats", price: 800, rating: 4.2, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81kl1TifqoL._AC_SX466_.jpg"})

        await Product.create({description: "Yundobop Men's Pullover Hoodies Plaid Jacquard Long Sleeve Drawstring Hipster Casual Hooded Sweatshirts with Kanga Pockets", price: 900, rating: 4.5, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81IRrgWkxjL._AC_SX569_.jpg"})

        await Product.create({description: "MAGCOMSEN Mens Henley Long Sleeve T Shirts Pocket Tee Shirts for Men Henley Cotton Casual Button Placket Daily Wear", price: 400, rating: 4.5, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81D7yikSroL._AC_SY550_.jpg"})

        await Product.create({description: "NITAGUT Mens Fashion Casual Front Placket Basic Long/Short Sleeve Henley T-Shirts", price: 400, rating: 4.4, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81tpGc13OgL._AC_SX466_.jpg"})

        await Product.create({description: "Saucony mens Multi-pack Mesh Ventilating Comfort Fit Performance No-show Socks, Black Basic (6 Pairs), Shoe Size 8-12 US", price: 600, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/91VvLvJikgL._AC_SX679_.jpg"})

        await Product.create({description: "Fruit of the Loom Men's Tag-Free Woven Boxer Shorts, Relaxed Fit, Moisture Wicking, Assorted Color Multipacks", price: 200, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/914b-+0gXEL._AC_SX679_.jpg"})

        await Product.create({description: "Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack", price: 700, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61qTPaU7dYL._AC_SX569_.jpg"})

        await Product.create({description: "MAGNIVIT Men's Bomber Jacket Casual Fall Winter Military Jacket and Coats Outwear", price: 800, rating: 4.4, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/518rvMmy9QL._AC_SX569_.jpg"})

        await Product.create({description: "Venado Henley Long Sleeve Shirts for Men - Mens Henley with Flex Material", price: 500, rating: 4.4, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/91SRrJHOR8L._AC_SX522_.jpg"})

        await Product.create({description: "TACVASEN Men's Flat Shorts with Pockets Summer Casual Cotton Cargo Work Shorts Elastic Waist", price: 400, rating: 4.3, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61xhX7+leRL._AC_SX466_.jpg"})

        await Product.create({description: "J.VER Men's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free Formal Shirt Business Casual Button Down Shirts", price: 400, rating: 4.4, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61owdlDd7wL._AC_SX466_.jpg"})

        await Product.create({description: "G Gradual Men's Sweatpants with Zipper Pockets Tapered Joggers for Men Athletic Pants for Workout, Jogging, Running", price: 400, rating: 4.5, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71E9cr3vZAL._AC_SY550_.jpg"})

        await Product.create({description: "Ultra Performance 3 Pack Fleece Active Tech Joggers for Men, Mens Sweatpants with Zipper Pockets", price: 1200, rating: 3.9, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61UWxvmW85L._AC_SX569_.jpg"})

        await Product.create({description: "Legendary Whitetails Men's Buck Camp Flannel, Long Sleeve Plaid Button Down Casual Shirt, Corduroy Cuffs", price: 400, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/917xzOZDnPL._AC_SY879_.jpg"})

        await Product.create({description: "Hanes Men's Max Cushioned Crew Socks, Moisture-Wicking with Odor Control, Multi-Pack", price: 1000, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81vTEPIns+L._AC_SX569_.jpg"})

        await Product.create({description: "Nike Men's Bag Cotton Quarter Cut Socks (6 Pack) (Large (shoe size 8-12), White)", price: 200, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61s56LFS5oL._AC_SX569_.jpg"})

        await Product.create({description: "Carhartt Men's Loose Fit Washed Duck Sherpa-Lined Mock-Neck Vest", price: 800, rating: 4.7, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81Dm8PxA2aL._AC_SX569_.jpg"})

        await Product.create({description: "Hanes Men's Pack, Moisture-Wicking Ribbed, Lightweight Cotton Tank Undershirts, 6-Pack", price: 600, rating: 4.6, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/41H4jiJH4ML._AC_SY550_.jpg"})

        await Product.create({description: "Under Armour Men's Tech 2.0 Short-sleeve T-shirt", price: 300, rating: 4.5, category: 'clothing', sub_category: 'men', image: "https://m.media-amazon.com/images/I/415N3L8jVvL._AC_SX569_.jpg"})


        await Product.create({description: "OLEVS Watches Waterproof Leather Watch Quartz Watches with Day Date,Gifts", price: 300, rating: 3.1, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71+2S688T2S._AC_SY535_.jpg"})

        await Product.create({description: "devaco Genuine Leather Strap Waterproof Watches for Women Quartz Casual Watch for Women, Calendar Women's Watches Chronograph Women's Wrist Watches", price: 400, rating: 4.2, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51a6GsicxnL._AC_SX522_.jpg"})

        await Product.create({description: "FIYTA Women's Small Gold Watch, Vintage Rectangular Case, Stainless Steel Bracelet Watches for Women", price: 300, rating: 3.4, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61s1eqA+6jL._AC_SY695_.jpg"})

        await Product.create({description: "OLEVS Women Watches Gold Silver Stainless Steel Waterproof Analog Large Easy Reader Day Date Watches", price: 350, rating: 4.2, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51H9uDnD62L._AC_.jpg"})

        await Product.create({description: "Michael Kors Pyper Women's Watch, Stainless Steel Watch for Women with Steel, Leather, or Silicone Band", price: 250, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/718DSEOGt+L._AC_SX522_.jpg"})

        await Product.create({description: "Anne Klein Women's AK/1470 Bangle Watch and Bracelet Set", price: 200, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71klXlIMa6L._AC_SX522_.jpg"})

        await Product.create({description: "Nine West Women's Crystal Accented Bracelet Watch", price: 300, rating: 3.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_SY741_.jpg"})

        await Product.create({description: "Anne Klein Women's Leather Strap Watch", price: 300, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81PrmvhOIVL._AC_SY550_.jpg"})

        await Product.create({description: "Anne Klein Women's Genuine Diamond Dial Bangle Watch", price: 300, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71QDsaFZF9L._AC_SX569_.jpg"})

        await Product.create({description: "Timex Women's Easy Reader 25mm Watch – Two-Tone Case White Dial with Expansion Band", price: 250, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/711dIHD599L._AC_SY741_.jpg"})

        await Product.create({description: "Timex Women's T2H331 Indiglo Leather Strap Watch, Black/Silver-Tone/White", price: 300, rating: 3.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71u9dpDC9HL._AC_SY741_.jpg"})

        await Product.create({description: "Anne Klein Women's Genuine Diamond Dial Ceramic Bracelet Watch", price: 350, rating: 4.7, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/710EMVovd5L._AC_SY741_.jpg"})

        await Product.create({description: "OLEVS Automatic Watches for Womens Luxury Gold and Silver Stainless Steel Thin Wrist Watches Mechanical Flywheel Moon Phase Blue & White Dial Waterproof", price: 400, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71M9bOvUjkL._AC_SY695_.jpg"})

        await Product.create({description: "SKMEI Women's Watches, Leather Band Waterproof Ultra Thin Casual Simple Dress Quartz Analog with Date Calendar", price: 350, rating: 3.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61Y8kP-m6YL._AC_SY675_.jpg"})

        await Product.create({description: "Anne Klein Women's Bracelet Watch", price: 300, rating: 4.8, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71liLJsxEOL._AC_SY741_.jpg"})

        await Product.create({description: "Timex Unisex T2N647 Weekender 38mm Black Nylon Slip", price: 250, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81Pnn76U1kL._AC_SY741_.jpg"})

        await Product.create({description: "CASIO G Shock Quartz Watch with Resin Strap, Beige, 30 (Model: GG1000-1A5)", price: 350, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/91nFR1HCTlL._AC_SX569_.jpg"})

        await Product.create({description: "Anne Klein Women's Bracelet Watch", price: 350, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81SNtMRH2dL._AC_SX425_.jpg"})

        await Product.create({description: "Nine West Women's Gunmetal Bracelet Watch", price: 300, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/713KvcFXQCL._AC_SY550_.jpg"})

        await Product.create({description: "GUESS Women's Stainless Steel + Stain Resistant Silicone Watch with Day + Date Functions", price: 250, rating: 4.7, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/716ZYCuJlhL._AC_SY550_.jpg"})

        await Product.create({description: "OLEVS Nurse Watch Medical Professionals Students Easy Read Dial Women Wrist Watch Silicone Band Waterproof Luminous", price: 300, rating: 4.7, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51Sgctr9QmL._AC_SY535_.jpg"})

        await Product.create({description: "Nine West Women's Bracelet Watch", price: 350, rating: 4.3, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/91H3ETNzJ3L._AC_SY550_.jpg"})

        await Product.create({description: "Invicta Angel 21384 Women's Quartz Watch - 34 mm", price: 400, rating: 4.7, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81sT5UpW4JL._AC_SY550_.jpg"})

        await Product.create({description: "Anne Klein Women's Genuine Diamond Dial Bangle Watch", price: 300, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81iAfA+bwbL._AC_SY741_.jpg"})

        await Product.create({description: "Nine West Women's Bracelet Watch", price: 300, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/8168keXstuL._AC_SY550_.jpg"})

        await Product.create({description: "Michael Kors Portia Women's Watch, Stainless Steel Bracelet Watch for Women", price: 450, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81oFpHvQUjL._AC_SX522_.jpg"})

        await Product.create({description: "Nine West Women's Strap Watch", price: 350, rating: 4.5, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61mNu3t2W6L._AC_SX425_.jpg"})

        await Product.create({description: "I-MART Smooth Vintage Pocket Watch with Chain (Gold)", price: 300, rating: 4.3, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/817J4i0EbUL._AC_SX679_.jpg"})

        await Product.create({description: "OLEVS Rose Gold Watch for Women Diamond Luxury Dress Wristwatch Luminous Waterproof", price: 300, rating: 4.3, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61V6CAsKGnL._AC_SY695_.jpg"})

        await Product.create({description: "Nine West Women's Floral Dial Strap Watch", price: 350, rating: 4.6, category: 'watches', sub_category: 'women', image: "https://m.media-amazon.com/images/I/91tFCHrU6zL._AC_SY741_.jpg"})


        await Product.create({description: "Fitness Tracker Answer/Make Call, 1.8 Activity Trackers and Smartwatches with Blood Oxygen/Heart Rate/Sleep Monitor, 100 Sports, IP68 Waterproof Step Calorie Counter Pedometer for Android iPhone", price: 200, rating: 4.2, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71MW2FMdHPL._AC_SX466_.jpg"})

        await Product.create({description: "Smart Watch for Kids Toys for Boys Age 8-12 with 26 Games Camera Video Music Pedometer Alarm Flashlight Learn Card Audio Story Touchscreen Kids Watch Learning Toys for Boys Ages 5 6 7 8 9 10 11 12", price: 200, rating: 4.7, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61+k292CWRL._AC_SX679_.jpg"})

        await Product.create({description: "Kids Smart Watch Boys 5-7 8-10, Kids Watch with 24 Games, Kids Pedometer Watch with Camera Player Calculator Alarm Calendar Recorder Stopwatch Timer, Cool Kids Toy for Boys", price: 250, rating: 4.1, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/7197UCC9O-L._AC_SX679_.jpg"})

        await Product.create({description: "Accutime Kids Marvel Spider-Man Digital Quartz Plastic Watch for Boys & Girls with LCD Display", price: 200, rating: 3.5, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/911XSiGkQML._AC_SY741_.jpg"})

        await Product.create({description: "Accutime Kids Pokemon Digital LCD Quartz Watch for Boys, Girls, and Adults All Ages", price: 200, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91Lx2OT1W1L._AC_SY741_.jpg"})

        await Product.create({description: "Kids Watch,Boys Watch for 3-15 Year Old Boys,Digital Sport Outdoor Multifunctional Chronograph LED 50 M Waterproof Alarm Calendar Analog Watch for Children with Silicone Band,Kids Gift", price: 250, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61IcMWPWFDL._AC_SY535_.jpg"})

        await Product.create({description: "Accutime Sonic The Hedgehog - Kids, Quartz Movement - LCD Display Watch Dial Flashing LED Lights, Blue Buckle Strap Band for Children", price: 150, rating: 4.6, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71YndLLcMEL._AC_SX679_.jpg"})

        await Product.create({description: "NN BEN NEVIS Kids Watch, Digital Watch for Boys Girls, Sport Watch with Fitness Tracker, Alarm Clock, Stopwatch, No App and Waterproof, Watch for Kids Ages 5-12", price: 250, rating: 3.9, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51O-V+EeFML._AC_SX679_.jpg"})

        await Product.create({description: "Boys Camouflage LED Sport Watch,Waterproof Digital Electronic Casual Military Wrist Kids Sports Watch with Silicone Band Luminous Alarm Stopwatch Watches", price: 250, rating: 4.5, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61jMZE9EtTL._AC_SY741_.jpg"})

        await Product.create({description: "Timex Boys TW7C77500 Time Machines Digital", price: 250, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81X3yMf4h3L._AC_SX679_.jpg"})

        await Product.create({description: "Timex Boys TW7C05800 Time Machines", price: 300, rating: 4.5, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71KxthL9aBL._AC_SY741_.jpg"})

        await Product.create({description: "Fitpolo Smart Watch for Women, 1.8 Fitness Watch with Alexa, 100 Sports Activity Trackers for Android iPhone(Answer/Make Call), Womens Smart Watches with Heart Rate Sleep SpO2 Monitor", price: 300, rating: 4.2, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71r05KUKoOL._AC_SX466_.jpg"})

        await Product.create({description: "SKG Smart Watch for Men Women Android iPhone, with Alexa Built-in & Bluetooth Call(Answer/Make Call) 1.69 Fitness Tracker with IP68 Waterproof, 60+ Sports, Heart Rate SpO2 Monitor, V7 Pro", price: 300, rating: 4.0, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61Hol-COwgL._AC_SX466_.jpg"})

        await Product.create({description: "Timex Boys T79051 My First Outdoors Fast Wrap Strap Watch", price: 300, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/814FfReSDwL._AC_SY741_.jpg"})

        await Product.create({description: "TENOCK Kids Analog Watches for Girls Boys Kids Watches with Soft Band Learning Time 50M Waterproof Children Watch Easy to Read for Ages 3-10 Kids Great Birthday Gifts", price: 250, rating: 4.3, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61QtFK2SEeL._AC_SX679_.jpg"})

        await Product.create({description: "Boys Digital Watch Big Youth Sports Waterproof Military Back Light Teenager Watch (Black) 1426", price: 250, rating: 3.3, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61nwiIWHIBL._AC_SY675_.jpg"})

        await Product.create({description: "Accutime Ninja Turtles Kids' Digital Watch", price: 200, rating: 4.3, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91dm8NhmDkL._AC_SY741_.jpg"})

        await Product.create({description: "Accutime Kids Pokemon Pikachu Analog Quartz Watch for Boys, Girls, and Adults All Ages", price: 200, rating: 4.5, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/817zGFULH7L._AC_SY741_.jpg"})

        await Product.create({description: "LIGE Military Smart Watches for Men(Answer/Dial), 1.39''Rugged Outdoor Smartwatch Health Fitness Tracker, 5ATM Waterproof,100+Sport Modes Tactical Pedometer Smart Watch for Android iOS Black", price: 300, rating: 4.7, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81a1vw1HQ2L._AC_SX679_.jpg"})

        await Product.create({description: "Pokemon Boys' Quartz Watch with Plastic Strap, Multicolor, 14 (Model: POK4214AZ), Multi", price: 200, rating: 3.6, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81e-TBV2AIL._AC_SY741_.jpg"})

        await Product.create({description: "Dodosky Boy Toys Age 5-12, LED 50M Waterproof Digital Sport Watches for Kids Birthday Presents Gifts for 5-13 Year Old Boys - Blue", price: 250, rating: 3.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/718zly7XAPL._AC_SX679_.jpg"})

        await Product.create({description: "cofuo Kids Digital Sports Watch for Boys Girls, Boy Waterproof Casual Electronic Analog Quartz 7 Colorful Led Watches with Alarm Stopwatch Silicone Band Luminous Wristatches", price: 200, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71IDRSesqgL._AC_SX679_.jpg"})

        await Product.create({description: "cofuo Kids Digital Sport Watch, Boys Girls Waterproof Sports Outdoor Watches Children Casual Electronic Analog Quartz Wrist Watches with Alarm Stopwatch", price: 300, rating: 4.2, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71ASbHzlKlL._AC_SX679_.jpg"})

        await Product.create({description: "Viposoon Kids Watches with Waterproof Alarm - Dinosaur Gifts for Boys Girls Age 3-10", price: 200, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61W+5OV4IdL._AC_SX679_.jpg"})

        await Product.create({description: "OWLCONIC Kids Watch - Analog Watches for Kids - Girls & Boys Watches Ages 7-10, Watches for Kids 8-12, Kids Analog Watch Telling Time Teaching Tool, Gift Watches for Girls and Boys", price: 300, rating: 4.2, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71gtBhxonEL._AC_SX679_.jpg"})

        await Product.create({description: "Dayllon Kids Digital Watch Outdoor Sports 50M Waterproof Electronic Watches Alarm Clock 12/24 H Stopwatch Calendar Boy Girl Wristwatch", price: 250, rating: 4.2, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71KGTsF9cML._AC_SX679_.jpg"})

        await Product.create({description: "CKV Kids Watch for Boys Girls Ages 5-12, Waterproof Time Teacher Easy to Read Analog Sport Outdoor Children Watches with Soft Band for Kids Gift", price: 300, rating: 4.4, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71r8VAnz7IL._AC_SY535_.jpg"})

        await Product.create({description: "Juboos Kids Watch Analog with 7 Colorful Night Lights Boys Girls Waterproof Soft Strap Kids Time Teaching Quartz Wristwatch, Kids Gifts, Christmas Gifts", price: 250, rating: 4.3, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71p-ISMc-kL._AC_SY535_.jpg"})

        await Product.create({description: "VIGOROSO Boys Girls Children Kids Digital Pu Watch Transformers Bumblebee Cartoon Wristwatch", price: 200, rating: 4.1, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61ic4xwLK-L._AC_SX679_.jpg"})

        await Product.create({description: "Star Wars Kids' STM3488 Digital Display Analog Quartz White Watch", price: 250, rating: 4.1, category: 'watches', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81JHOK7bXmL._AC_SY741_.jpg"})


        await Product.create({description: "Fitness Tracker Answer/Make Call, 1.8 Activity Trackers and Smartwatches with Blood Oxygen/Heart Rate/Sleep Monitor, 100 Sports, IP68 Waterproof Step Calorie Counter Pedometer for Android iPhone", price: 300, rating: 4.2, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71MW2FMdHPL._AC_SX466_.jpg"})

        await Product.create({description: "Accutime Kids Mattel Barbie Pink Educational Learning Touchscreen Smart Watch Toy for Girls, Boys, Toddlers - Selfie Cam, Learning Games, Alarm, Calculator, Pedometer & More (Model: BDT4069AZ), 40mm", price: 200, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81c3J7+-0YL._AC_SY741_.jpg"})

        await Product.create({description: "Butele Kids Smart Watch for Girls Boys, Game Smart Watch Gifts for 4-16 Years Old with Sleep Mode 20 Sports Modes 5 Games Pedometer Birthday Gift for Boys Girls (Purple)", price: 250, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61NtA+quJbL._AC_SX466_.jpg"})

        await Product.create({description: "Kids Watches Digital Sport Watch for Girls Boys, Fitness Tracker with Alarm Clock, Stopwatch, No App Waterproof Watches for Teens Students Ages 5-12", price: 250, rating: 3.9, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51sA68EKsvL._AC_SX679_.jpg"})

        await Product.create({description: "Accutime Kids Disney Frozen Digital LCD Quartz Wrist Watch with Strap, Cool Inexpensive Gift & Party Favor for Toddlers, Boys, Girls, Adults All Ages", price: 200, rating: 4.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81e0PjV70NL._AC_SY741_.jpg"})

        await Product.create({description: "Timex Boys TW7C05800 Time Machines", price: 250, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81EzCpx4E4L._AC_SX679_.jpg"})

        await Product.create({description: "Accutime Kids Nickelodeon JoJo Siwa Educational Learning Touchscreen Smart Watch Toy for Girls, Boys, Toddlers - Selfie Cam, Learning Games, Alarm, Calculator, Pedometer & More (Model: JOJ4128AZ)", price: 200, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61aaG6INteL._AC_SY879_.jpg"})

        await Product.create({description: "Timex Girls Time Machines Analog Resin Watch", price: 250, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71OohEeUuJS._AC_SX679_.jpg"})

        await Product.create({description: "Timex Boys TW7C77500 Time Machines Digital", price: 300, rating: 4.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91N55yG6dRL._AC_SX679_.jpg"})

        await Product.create({description: "VAPCUFF 3D Cartoon Waterproof Watches for Girls with Alarm - Best Toys Gifts for Girls Age 3-10", price: 200, rating: 3.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61yhhnWd1dL._AC_SX679_.jpg"})

        await Product.create({description: "Accutime Kids Disney Mickey Mouse Minnie Mouse Analog Quartz Time Teacher Wrist Watch for Toddlers, Boys & Girls to Learn How to Tell Time", price: 200, rating: 4.6, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71HrHT1bJ+L._AC_SY741_.jpg"})

        await Product.create({description: "3 Pieces Kids Unicorn Watch and Unicorn Bracelet Waterproof Toddler Digital Watch Light Watch with Alarm Stopwatch Unicorn Christmas Valentine's Day Gift for 3-10 Year Girls", price: 200, rating: 4.6, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71bwS8Jjl1L._AC_SX679_.jpg"})

        await Product.create({description: "TIMEX TIME Machines 24mm Pink Strap Watch", price: 250, rating: 4.6, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81gcDR79nzL._AC_SY741_.jpg"})

        await Product.create({description: "Disney Kids' W000970 Frozen Snow Queen Watch with Pink Nylon Band", price: 200, rating: 4.6, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61vZbbJPqXL._AC_SX679_.jpg"})

        await Product.create({description: "cofuo Kids Digital Sport Waterproof Watch for Girls Boys, Kid Sports Outdoor LED Electrical Watches with Luminous Alarm Stopwatch Child Wristwatch", price: 250, rating: 4.0, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71CNfkYmBPS._AC_SX679_.jpg"})

        await Product.create({description: "VAPCUFF Girls Watch - 3D Cartoon Waterproof Toddler Watch, Gifts for Girls Age 2-8 Toys for 3 4 5 6 7 Year Old Girls - Kids Gifts", price: 200, rating: 4.6, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61V1Gl1Y+sL._AC_SX679_.jpg"})

        await Product.create({description: "Viposoon Waterproof LED Kids Watches with Alarm - Kids Toys Gifts for Girls Age 3-10", price: 250, rating: 3.3, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61jntSVpw-L._AC_SX679_.jpg"})

        await Product.create({description: "Timex Boys T79051 My First Outdoors Fast Wrap Strap Watch", price: 200, rating: 4.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91x5gu7tH2L._AC_SY741_.jpg"})

        await Product.create({description: "TUOTISI Girls Watches Ladies Watch for Gift Students Watches for Girls Ages 11-15 Simple Japanese Movement Casual Leather Band Watches for Ladies Fashion Women Watches", price: 200, rating: 4.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51jojW7YvPL._AC_SX679_.jpg"})

        await Product.create({description: "Kiddus Educational Kids Watch for Children Boy and Girl. Analogue Time Teacher Wristwatch with Exercises. Japanese Quartz Movement. Easy to Read and Learn The time", price: 200, rating: 4.3, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/717E2I5JyOL._AC_SX679_.jpg"})

        await Product.create({description: "Edillas Kids Watches Digital for Girls Boys,7 Colors Led Flashing Wristwatch for Child Waterproof Sport Outdoor Multifunctional Wrist Watches with Stopwatch/Alarm for Ages 4-15", price: 200, rating: 4.4, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61K5KICZZ8L._AC_SX679_.jpg"})

        await Product.create({description: "PROKING Kids Analog Watch for Girls Boys Children Teens,5-18 Years Old,Learning Time and Easy to Read,Minimalist Wrist Watch with Soft Band,5ATM Waterproof", price: 250, rating: 4.3, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61pQFL7DB0L._AC_SX679_.jpg"})

        await Product.create({description: "Accutime Spiderman Ghost Spider Educational Learning Touchscreen Kids Smartwatch - Multicolor Strap- Toy - Girls, Boys, Toddlers - Selfie Cam, Games, Alarm, Calculator, Pedometer (Model: SPD4935AZ)", price: 300, rating: 4.9, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71KEekdMciL._AC_SX679_.jpg"})

        await Product.create({description: "DIGEEHOT Kids Fitness Tracker Watch with Games for Boys Girls Age 6-16, IP68 Waterproof Kids Smart Watch 20 Sport Modes, Pedometers, Alarm Clock, Sleep Tracker, Toy Gifts for Kids", price: 250, rating: 4.1, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71rSKqKcJFL._AC_SX679_.jpg"})

        await Product.create({description: "TENOCK Kids Analog Watches for Girls Boys Kids Watches with Soft Band Learning Time 50M Waterproof Children Watch Easy to Read for Ages 3-10 Kids Great Birthday Gifts", price: 250, rating: 4.3, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61Guzg-gvmL._AC_SX679_.jpg"})

        await Product.create({description: "OLAZONE Kids Watch Girls Digital 7-Color Flashing Light Water Resistant 164FT Alarm for Age 5-12", price: 200, rating: 3.3, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51ziCrOgSFL._AC_SX679_.jpg"})

        await Product.create({description: "Disney Frozen Kids' Plastic Time Teacher Analog Quartz Nylon Strap Watch", price: 200, rating: 4.5, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61UzPlJAgQL._AC_SX679_.jpg"})

        await Product.create({description: "OLAZONE Girls Digital Watch Kids 7-Color Flashing Light Water Resistant 164FT Alarm for Age 5-12 Pink", price: 250, rating: 4.2, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51dRNzSpNXL._AC_SX679_.jpg"})

        await Product.create({description: "Kids Watch Girl Flower Shape Watch Novelty Cartoon Digital Watch 1144", price: 200, rating: 4.2, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71hrJDGjOYL._AC_SX679_.jpg"})

        await Product.create({description: "SIMSAM Kids Watch, Childrens Watches for Kids 8-12, Analog Watch for Kids, Toddler Watch, Girls Watch, Kids Watches for Girls Ages 8-10 3-5 4-7 5-7 6-12 8-12 11-15 Kid Watch, Kids Waterproof Watch", price: 200, rating: 4.7, category: 'watches', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/810nl2drYiL._AC_SY741_.jpg"})


        await Product.create({description: "PASOY Mens Simple Leather Watch 40mm Dial Casual Business Watch Analog Reloj de Hombre", price: 300, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71NS4ZitemL._AC_SY741_.jpg"})

        await Product.create({description: "LIGE Stylish Wrist Watch for Men, Waterproof Sports Moon Phase Chronograph Watch Luxury Business Dress Analogue Quartz Watches Men Fashion Casual Brown Leather Watch", price: 400, rating: 4.3, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71x7pLY7NHL._AC_SX569_.jpg"})

        await Product.create({description: "devaco Quartz Casual Men's Watches，Genuine Leather Strap Mens Watches, Waterproof, Night Light, Calendar, Chronograph Watch for Stylish Men", price: 370, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71UoEqhzFsL._AC_SY535_.jpg"})

        await Product.create({description: "OLEVS Mens Automatic Watches Self Winding Mechanical Dress Wrist Watch Multifunction Calendar Hidden Button Sun Moon Display Waterproof Luminous", price: 450, rating: 3.9, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71GcoMZ2wrL._AC_SY695_.jpg"})

        await Product.create({description: "Michael Kors Oversized Slim Runway Men's Watch, Stainless Steel Watch for Men", price: 350, rating: 4.7, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61eUONKxYEL._AC_SX679_.jpg"})

        await Product.create({description: "Casio Men's MDV106-1AV 200 M WR Black Dive Watch (MDV106-1A)", price: 400, rating: 4.7, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61nHUVwR65L._AC_SY550_.jpg"})

        await Product.create({description: "Amazfit Bip 3 Pro Smart Watch for Android iPhone, 4 Satellite Positioning Systems, 1.69 Color Display, 14-Day Battery Life, 60+ Sports Modes, Blood Oxygen Heart Rate Monitor, Water-Resistant(Black)", price: 300, rating: 4.2, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61GOb969hML._AC_SX679_.jpg"})

        await Product.create({description: "Bulova Men's 3-Hand Calendar Date Quartz Watch, Patterned Dial, 38mm", price: 400, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/712M1W2Q9AL._AC_SX679_.jpg"})

        await Product.create({description: "Fossil Men's Nate Quartz Stainless Steel Chronograph Watch, Color: Black (Model: JR1401)", price: 450, rating: 4.5, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/718AVhhc1GL._AC_SX679_.jpg"})

        await Product.create({description: "SEIKO SSK003 Watch for Men 5 Sports Collection - Stainless Steel Case and Bracelet, Blue Dial", price: 350, rating: 3.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61qM4fZiIaL._AC_SX679_.jpg"})

        await Product.create({description: "LN LENQIN Mens Watches Unisex Military Watches Sport Nylon Strap Stylish Luminous Fashion Watches Analog Quartz Watches for Men Waterproof Army Tactical Casual Wristwatch", price: 300, rating: 4.4, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71LayDLu7iL._AC_SY535_.jpg"})

        await Product.create({description: "LIGE Mens Watches Automatic Leather Chronograph Waterproof Stainless Steel Analog Quartz Business Casual Wrist Watches for Men", price: 450, rating: 4.5, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71xV-miRnuL._AC_SX679_.jpg"})

        await Product.create({description: "FIZILI 8mm Thin Men's Watch, 41mm Watch Men's Calendar Model", price: 350, rating: 3.2, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71zqyb8Y60L._AC_SX679_.jpg"})

        await Product.create({description: "OLEVS Mens Watches Diamond Luxury Business Dress Watches for Men Stainless Steel Classic Analog Quartz Male Wrist Watches Date Waterproof Luminous", price: 400, rating: 4.1, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/713w4-XVczL._AC_SY675_.jpg"})

        await Product.create({description: "Suunto Core Classic, Outdoor Watch, All Black", price: 400, rating: 4.3, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61MlgcgRjRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"})

        await Product.create({description: "Fossil Coachman Men's Watch with Genuine Leather Bracelet Cuff", price: 500, rating: 4.7, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/8125l1CSd2L._AC_SX679_.jpg"})

        await Product.create({description: "Timex Men's Expedition Scout 40mm Watch", price: 350, rating: 4.4, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/91APJ9+qs2L._AC_SY741_.jpg"})

        await Product.create({description: "G-Shock GA-700UC", price: 300, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81jbDjBM2JL._AC_SY741_.jpg"})

        await Product.create({description: "SEIKO SSK001 5 Sports Men's Watch Silver-Tone 42.5mm Stainless Steel, Black", price: 350, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71YDpkPQk5L._AC_SY695_.jpg"})

        await Product.create({description: "BENYAR Mens Watches, Waterproof Chronograph Analog Quartz Movement Men's Wrist Watch, Fashion Business Easy Read Luminous Watches for Men with Calendar", price: 400, rating: 4.3, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61fwfNKiByL._AC_SX679_.jpg"})

        await Product.create({description: "OLEVS Mens Watch Stainless Steel Big Face Casual Dress Wrist Watch Quartz Analog Day Date Waterproof Luminous", price: 350, rating: 4.1, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61iq5UjqOpL._AC_SY695_.jpg"})

        await Product.create({description: "OLEVS Watches Waterproof Leather Watch Quartz Watches with Day Date,Gifts", price: 400, rating: 4.0, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61hglKgXBJS._AC_SY535_.jpg"})

        await Product.create({description: "OLEVS Watch for Men Stylish Black Silicone Band Luxury Dial Luminous Waterproof Multifunction Calendar Moon Phase Analog Chronograph Sports Quartz Wrist Watches", price: 450, rating: 4.3, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61pwYbq6sSL._AC_SY535_.jpg"})

        await Product.create({description: "Timex Men's T20471 Easy Reader", price: 300, rating: 4.5, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/618FlBKZdPL._AC_SY741_.jpg"})

        await Product.create({description: "Seiko Prospex Alpinist Limited Model SBDC091 Made in Japan", price: 450, rating: 4.5, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61T0I5+UZaL._AC_SX679_.jpg"})

        await Product.create({description: "Invicta Men's Pro Diver Stainless Steel Quartz Watch", price: 400, rating: 4.7, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81La7n76pxL._AC_SY741_.jpg"})

        await Product.create({description: "Bulova Men's Marine Star 'Series C' Chronograph Quartz Watch, Luminous Markers, Rotating Dial, 200M Water Resistant, 45mm", price: 500, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81io8OejSiL._AC_SX679_.jpg"})

        await Product.create({description: "Timex Men's Easy Reader Black Strap Blue Dial Silver-Tone Case", price: 350, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71S-CCwawqL._AC_SY741_.jpg"})

        await Product.create({description: "Relic by Fossil Men's Rylan Quartz Stainless Steel Diamond Accent Dress Watch", price: 400, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81Ytt5qj5EL._AC_SX679_.jpg"})

        await Product.create({description: "CASIO G Shock Quartz Watch with Resin Strap, Beige, 30 (Model: GG1000-1A5)", price: 350, rating: 4.6, category: 'watches', sub_category: 'men', image: "https://m.media-amazon.com/images/I/91nFR1HCTlL._AC_SX569_.jpg"})

        await Product.create({description: 'TGSIKIBW Mens Dress Shoes for Men Formal Oxford Tuxedo Dress Shoes Genuine Leather Modern Formal Business Derby Shoes', price: 2500, rating: 4, category: 'shoes', sub_category: 'men', image: 'https://m.media-amazon.com/images/I/71fXx6Zs-CL._AC_SY575_.jpg'})

        await Product.create({description: 'RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Boots Work Boots Motorcycle Jungle Boots Military Tactical Combat Shoes', price: 2000, rating: 4, category: 'shoes', sub_category: 'men', image: 'https://m.media-amazon.com/images/I/61C4Dn62EIL._AC_SY575_.jpg'})

        await Product.create({description: 'GIFENNSE Mens Chukka Boots Mens Dress Boots Oxford Leather Boots Famal Chelsea Boots for Men', price: 3000, rating: 3.5, category: 'shoes', sub_category: 'men', image: 'https://m.media-amazon.com/images/I/51EeuUHdwvL._AC_SY575_.jpg'})

        await Product.create({description: 'Under Armour Mens Charged Assert 9 Running Shoe', price: 1500, rating: 3.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/41l2imvuWJL._AC_SY575_.jpg"})

        await Product.create({description: "Dr. Martens unisex-adult Embury Chelsea Boot", price: 2500, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81+qyYlboML._AC_SX575_.jpg"})

        await Product.create({description: "UGG Men's Neumel Boot", price: 2100, rating: 4.2, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81AIb3gkW3L._AC_SY695_.jpg"})

        await Product.create({description: "FRASOICUS Mens Dress Shoes Slip-on Loafers Leather Shoes for Men", price: 2600, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71fNOr+KSoL._AC_SY575_.jpg"})

        await Product.create({description: "ALLY UNION MAKE FORCE Mens Glitter Loafers Dress Slip on Party Wedding Penny Smoking Sparkly Shoes", price: 1700, rating: 3.7, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71B4MpJy42L._AC_SY575_.jpg"})

        await Product.create({description: "Salomon Men's X Ultra Pioneer MID CLIMASALOMON Waterproof Hiking Boots Climbing Shoe", price: 2600, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61134VCX8pL._AC_SX575_.jpg"})

        await Product.create({description: "Zigzagger Men's Slip On Moccasin Slippers, Indoor/Outdoor Warm Fuzzy Comfy House Shoes, Fluffy Wide Loafer Slippers", price: 1200, rating: 4.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71VDFTRC-5L._AC_SY575_.jpg"})

        await Product.create({description: "Hey Dude Men's Wally Canvas Mono | Men’s Shoes | Men's Slip-on Loafers | Comfortable & Light-Weight", price: 1600, rating: 3, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61cuzyGZDFL._AC_SY575_.jpg"})

        await Product.create({description: "Nike Air Force 1 '07 Low Mens Basketball Shoes (10 Medium, White)", price: 2500, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81uiWMk9dnL._AC_SX575_.jpg"})

        await Product.create({description: "adidas Unisex-Adult Adilette Shower Slides Sandal", price: 1200, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/615KJsJbrDL._AC_SY575_.jpg"})

        await Product.create({description: "Xtratuf Men's 6 in Ankle Deck Boot", price: 2000, rating: 4.3, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/51ame7nbyVL._AC_SY575_.jpg"})

        await Product.create({description: "Timberland Men's 6-Inch Premium Waterproof Boot", price: 3000, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61FUW1ao8IL._AC_SX575_.jpg"})

        await Product.create({description: "Wolverine Overpass 6 Mid Composite Toe Waterproof Work Boot", price: 2700, rating: 4.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61zSpSfZyTL._AC_SY575_.jpg"})

        await Product.create({description: "Merrell Men's Moab 3 Mid Waterproof Hiking Boot", price: 2500, rating: 4.6, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81s5SgfiGPL._AC_SX575_.jpg"})

        await Product.create({description: "Brooks Men's Adrenaline GTS 22 Supportive Running Shoe", price: 1600, rating: 4.7, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81J1DglqEGL._AC_SY575_.jpg"})

        await Product.create({description: "Muck Boot Men's Arctic Excursion Ankle Snow Boot", price: 2200, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81cRZt5nL4L._AC_SX575_.jpg"})

        await Product.create({description: "Under Armour Men's Micro G Valsetz Zip Military and Tactical Boot", price: 2700, rating: 4.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/51d1mkgR2qL._AC_SY575_.jpg"})

        await Product.create({description: "KIIU Mens Thong Sandals Indoor and Outdoor Beach Flip Flop", price: 250, rating: 4.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61kO827hSxL._AC_SY575_.jpg"})

        await Product.create({description: "ASICS Men's Matflex 6 Wrestling Shoes", price: 1800, rating: 3.8, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81h8LEsDoTL._AC_SX575_.jpg"})

        await Product.create({description: "Wolverine Men’s Floorhand Waterproof 6” Steel-Toe Work Boot", price: 3200, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/712qN-SA3JL._AC_SX575_.jpg"})

        await Product.create({description: "New Balance Men's 574 Core Sneaker", price: 1700, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/71-TrfZu4KL._AC_SY575_.jpg"})

        await Product.create({description: "Timberland Men's White Ledge Mid Waterproof Hiking Boot", price: 3200, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81PLmShkaSL._AC_SY575_.jpg"})

        await Product.create({description: "Columbia Men's Newton Ridge Plus Wp Hiking Shoe", price: 2700, rating: 3.5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61Jw6fTYJIL._AC_SY575_.jpg"})

        await Product.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 1500, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/81I1BjIVXsL._AC_SX575_.jpg"})

        await Product.create({description: "adidas mens Yeezy Slide", price: 2000, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/418vm2chCzL._AC_SX575_.jpg"})

        await Product.create({description: "Nike Men's Basketball Shoes Sneakers", price: 2000, rating: 4, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/61riEx2eF9L._AC_SX575_.jpg"})

        await Product.create({description: "HUK Men's Rogue Wave Shoe | High-Performance Fishing & Deck Boot Rain", price: 2300, rating: 5, category: 'shoes', sub_category: 'men', image: "https://m.media-amazon.com/images/I/718wLGi5zzL._AC_SX679_.jpg"})


        await Product.create({description: "Vivobarefoot Tracker II FG, Womens Leather Hiking Boot With Barefoot Firm Ground Sole and Thermal Protection", price: 1800, rating: 3.4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/515HAfz9woL._AC_SY575_.jpg"})

        await Product.create({description: "Vivobarefoot womens High-top", price: 1900, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51H5Pj7lSLL._AC_SY575_.jpg"})

        await Product.create({description: "EliteLand Women's Rain Boots, Waterproof Fishing Deck Boots, Anti-Slip Outdoor Rain Shoes for Women", price: 2300, rating: 4.6, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81G5v3rYx6L._AC_SY575_.jpg"})

        await Product.create({description: "TIJN Women’s Fashion Ankle Booties Causal 8-Eye Side Zipper Lace-up Combat Boots(Briar)", price: 2100, rating: 5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61jo8+swtbL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Women's Classic Mini II Winter Boot", price: 1800, rating: 4.5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/717tN5NpFmL._AC_SX575_.jpg"})

        await Product.create({description: "Litfun Women's Fuzzy Memory Foam Slippers Fluffy Winter House Shoes Indoor and Outdoor", price: 1500, rating: 3.5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71fnIod1SqL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Women's Classic Ultra Mini Platform Boot", price: 1900, rating: 4.5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61MYjpwlDhL._AC_SY695_.jpg"})

        await Product.create({description: "UGG Women's Tasman Slipper", price: 1800, rating: 4.7, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81vZ7GiFg2L._AC_SX575_.jpg"})

        await Product.create({description: "KIDMI Women's Suede Clogs Leather Mules Cork Footbed Sandals Potato Shoes with Arch Support", price: 1900, rating: 4.8, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/810zAULuvKL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Women's Classic Short II Boot", price: 2000, rating: 4.7, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/91KQqBGWY3L._AC_SY695_.jpg"})

        await Product.create({description: "Hey Dude Womens Wendy Canvas", price: 1000, rating: 4.3, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61djS6zXkdL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Women's Neumel Fashion Boot", price: 2000, rating: 4.6, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/910nrHrsKeL._AC_SX575_.jpg"})

        await Product.create({description: "Rollda Women's Mid-Calf Boots Lace Up Combat Boots Side Zipper Riding Military Boots", price: 1700, rating: 5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71OBePdatzL._AC_SY575_.jpg"})

        await Product.create({description: "Yibobay Diabetic Shoes for Women Width X-Wide Shoe for Elderly Women Wide Shoes for Women Walking Shoes Adjustable ", price: 1400, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/31o-umQZc0S._AC_.jpg"})

        await Product.create({description: "MIXIN Chelsea Boots Women Fashion Ankle Booties Classic Low Heel Side Zip Shoes for Women Black Brown", price: 2500, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/815CxYQqzgL._AC_SY575_.jpg"})

        await Product.create({description: "EliteLand Women's Snow Boots, Women Waterproof Mid Calf, Anti-slip Outdoor Warm Duck Boot for Winter", price: 2300, rating: 4.6, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71jf86oZC5L._AC_SY695_.jpg"})

        await Product.create({description: "Chooka Women's Waterproof Plush Chelsea Bootie Chelsea Boot", price: 2300, rating: 4.5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71D0U-MkmML._AC_SX575_.jpg"})

        await Product.create({description: "Xiakolaka Women's Boston Clogs Adjustable Buckle Slip on Cork Footbed Home Clog Slippers", price: 1700, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71FUVLEythL._AC_SY575_.jpg"})

        await Product.create({description: "Brooks Women's Adrenaline GTS 22 Supportive Running Shoe", price: 1800, rating: 3, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/816PgeLLfvL._AC_SY575_.jpg"})

        await Product.create({description: "Dr. Martens Women's 2976 Leonore Chelsea Boot", price: 2100, rating: 5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81LUcuNY+6L._AC_SY695_.jpg"})

        await Product.create({description: "Dr. Scholl's Shoes Women's Time Off Sneaker", price: 2000, rating: 4.8, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/41DzpaOYQqL._AC_SY575_.jpg"})

        await Product.create({description: "Waucuw Women's Oxford Shoes for Women Round Toe Lace up Chunky Platform Oxfords", price: 2000, rating: 4.9, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51msTkzD9DL._AC_SY575_.jpg"})

        await Product.create({description: "WateLves Water Shoes Women Men Barefoot Minimalist Comfortable Quick Dry Beach Outdoor Running Shoe", price: 1800, rating: 4.6, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/618INAe7EYL._AC_SY575_.jpg"})

        await Product.create({description: "Cozylook Women's Bootie Slippers, Cozy House Shoes with Memory Foam, Plush Fleece Lining, Indoor/Outdoor Anti-Slip Sole", price: 1200, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81z8VdsLdBL._AC_SY575_.jpg"})

        await Product.create({description: "HomeTop Women's Fuzzy Curly Fur Memory Foam Loafer Slippers with Polar Fleece Lining", price: 1500, rating: 5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/71OSEjcNXzL._AC_SY575_.jpg"})

        await Product.create({description: "Beslip Classic Fur Lined Clogs Waterproof Winter Fuzzy Slippers for Women Men Indoor Outdoor", price: 1300, rating: 4.8, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61wEbjDxk4L._AC_SY575_.jpg"})

        await Product.create({description: "BRONAX Pillow Slippers for Women and Men | House Slides Shower Sandals | Extremely Comfy | Cushioned Thick Sole", price: 1400, rating: 5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/81PZlG1+5rS._AC_SX575_.jpg"})

        await Product.create({description: "Nike Women's Gymnastics Shoes", price: 1500, rating: 4.5, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/51saaQNYpsL._AC_SY575_.jpg"})

        await Product.create({description: "Lucky Brand Women's Basel Ankle Bootie", price: 2000, rating: 4.8, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/91S708uZ1oL._AC_SX575_.jpg"})

        await Product.create({description: "adidas Women's Grand Court 2.0 Tennis Shoe", price: 1800, rating: 4, category: 'shoes', sub_category: 'women', image: "https://m.media-amazon.com/images/I/61AQ64ZjfRL._AC_SX575_.jpg"})


        await Product.create({description: "Ahannie Boys Soft School Uniform Shoes, Kids Comfort Oxford Dress Shoe(Toddler/Little Kid/Big Kid)", price: 1700, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81UDQYQfY7L._AC_SX575_.jpg"})

        await Product.create({description: "Nike womens Air Max Excee Shoes", price: 1900, rating: 4.4, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61ssWTNBwIL._AC_SY575_.jpg"})

        await Product.create({description: "Bruno Marc Boy's Classic Oxfords Dress Shoes", price: 2000, rating: 4.5, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71w075fWbPL._AC_SY575_.jpg"})

        await Product.create({description: "Weestep Girls Boys Causal Sneaker Slip on Canvas Shoe", price: 1000, rating: 3.1, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81jorov6LtL._AC_SY575_.jpg"})

        await Product.create({description: "Crocs Unisex-Child Kids' Classic Clogs", price: 200, rating: 5, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61xtXuL345L._AC_SX575_.jpg"})

        await Product.create({description: "UGG Tasman II Kids Slipper", price: 800, rating: 4.8, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81fruo++lRL._AC_SX575_.jpg"})

        await Product.create({description: "Stride Rite Unisex-Child Sr Taye 2.0 First Walker Shoe", price: 1000, rating: 4.8, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/814AK9WJAfL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Classic Mini II Girls Boot", price: 1800, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81kjigUyETL._AC_SX575_.jpg"})

        await Product.create({description: "Stride Rite 360 Boy's Ethan Sneaker", price: 500, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81zoSjyDhFS._AC_SY575_.jpg"})

        await Product.create({description: "Sesame Street Unisex-Child Slippers", price: 900, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61cYvqKjq1L._AC_SX575_.jpg"})

        await Product.create({description: "Under Armour Boy's Grade School Assert 9 Running Shoe", price: 1500, rating: 3.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/413Mk-UtVFL._AC_SY575_.jpg"})

        await Product.create({description: "BOGS Unisex-Child York Boys and Girls Waterproof Insulated Rubber and Neoprene Winter Rain Boot", price: 1000, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/816ehZPRE-L._AC_SY575_.jpg"})

        await Product.create({description: "Stride Rite 360 Unisex-Baby Taye 2.0 First Walker Shoe", price: 900, rating: 4.8, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51tHx9IrmYL._AC_SX575_.jpg"})

        await Product.create({description: "NIKE Men's Basketball Shoes", price: 1500, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61rLMYGKrNL._AC_SX575_.jpg"})

        await Product.create({description: "Super Mario Slippers for Kids, Mario and Luigi Nintendo Slippers,Slip-On Slipper", price: 500, rating: 4.8, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71i+oFol-ML._AC_SX575_.jpg"})

        await Product.create({description: "X RAY Boy's Driver Loafers-Shoes, Low Heel, Casual, Slip on w/Round Toe, Polyvinyl Chloride Outsole", price: 1200, rating: 4.4, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/716L9UE3MaL._AC_SY575_.jpg"})

        await Product.create({description: "BRONAX Little/Big Boys Tennis Shoes | Comfortable & Lightweight Sneakers for Kids", price: 1200, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/91V9W6lLBfL._AC_SX575_.jpg"})

        await Product.create({description: "Deer Stags Unisex-Child Zane Chelsea Boot", price: 1800, rating: 4.4, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71KyuWkRonL._AC_SX575_.jpg"})

        await Product.create({description: "JMFCHI Boys Girls Kids' Sneakers Knitted Mesh Sports Shoes Breathable Lightweight Running Shoes for Kids Fashion Athletic Casual Shoes", price: 1000, rating: 4.4, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81iaNZNoLAL._AC_SX575_.jpg"})

        await Product.create({description: "Kamik Footwear Kids Snobuster1 Insulated Snow Boot (Toddler/Little Kid/Big Kid)", price: 800, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/717K9gsjXwL._AC_SY575_.jpg"})

        await Product.create({description: "adidas Unisex-Child Own the Game 2.0 Basketball Shoe", price: 1300, rating: 3.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71YDaQrZ-YL._AC_SX575_.jpg"})

        await Product.create({description: "NIKE Men's Basketball Shoes", price: 1400, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71l-HXuM+dL._AC_SY575_.jpg"})

        await Product.create({description: "Crocs unisex-child Classic Realtree Clog", price: 500, rating: 4.9, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/719JUt0FwAL._AC_SX575_.jpg"})

        await Product.create({description: "Koolaburra by UGG Unisex-Child's Victoria Mini Ankle Boot", price: 1700, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/81M5pYo5L4S._AC_SX575_.jpg"})

        await Product.create({description: "BMCiTYBM Toddler Winter Snow Boots Boys Girls Cold Weather Baby Faux Fur Shoes (Infant/Toddler/Little Kid)", price: 1800, rating: 4.5, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71rGWTzfNuL._AC_SY575_.jpg"})

        await Product.create({description: "GUBARUN Boys Snow Boots Winter Waterproof Slip Resistant Cold Weather Shoes (Toddler/Little Kid/Big Kid)", price: 1600, rating: 4.6, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71HfopdziQL._AC_SY575_.jpg"})

        await Product.create({description: "Ballaza Chunky Platform Lightweight Sneakers Kids Tennis Running Little/Big Kid Shoes", price: 700, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/71466Aw1HEL._AC_SY575_.jpg"})

        await Product.create({description: "Under Armour Unisex-Child Grade School Lockdown 6 Basketball Shoe", price: 1200, rating: 4.7, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51OXfpRkphL._AC_SY575_.jpg"})

        await Product.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 1300, rating: 4.4, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/51-0XYPqsNL._AC_SX575_.jpg"})

        await Product.create({description: "Baby Shoes Boy Girl Infant Sneakers Non-Slip First Walkers 6 9 12 18 24 Months", price: 600, rating: 4.5, category: 'shoes', sub_category: 'boys', image: "https://m.media-amazon.com/images/I/61co81GoWXL._AC_SY575_.jpg"})


        await Product.create({description: "Weestep Girls Boys Causal Sneaker Slip on Canvas Shoe", price: 600, rating: 3, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81jorov6LtL._AC_SY575_.jpg"})

        await Product.create({description: "ChuLian Girls Sandals Little Kids Glitter Dress Shoes Low Heel Sequins Princess Sandals Toddler Flower Wedding Party Shoes", price: 1200, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61FfV4pmK8L._AC_SY575_.jpg"})

        await Product.create({description: "Rhyme-Zeal Kids Soccer Cleats Shoes Boys Girls Athletic Outdoor Indoor Firm Ground Soccer Shoes Comfortable Football Shoes", price: 1100, rating: 4.2, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/718cw-dUNzL._AC_SY575_.jpg"})

        await Product.create({description: "Weestep Toddler/Littke Kid Girls Glitter School Casual Sneakers", price: 800, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81hQ2d18VZL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Tasman II Kids Slipper", price: 1100, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61qV9T2JM2L._AC_SY675_.jpg"})

        await Product.create({description: "Stride Rite Unisex-Child Sr Taye 2.0 First Walker Shoe", price: 900, rating: 4.8, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/814AK9WJAfL._AC_SY575_.jpg"})

        await Product.create({description: "UGG Classic Mini II Girls Boot", price: 1500, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81kjigUyETL._AC_SX575_.jpg"})

        await Product.create({description: "Stelle Ballet Shoes for Girls Toddler Ballet Slippers Soft Leather Boys Dance Shoes for Toddler/Little Kid/Big Kid", price: 500, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61CGDIk7SEL._AC_SY575_.jpg"})

        await Product.create({description: "Sesame Street Unisex-Child Slippers", price: 500, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61cYvqKjq1L._AC_SX575_.jpg"})

        await Product.create({description: "UGG Girl's Classic Mini Platform Fashion Boot", price: 1000, rating: 3.5, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71WZzBsGOuL._AC_SY675_.jpg"})

        await Product.create({description: "Koolaburra by UGG Unisex-Child's Victoria Mini Ankle Boot", price: 1000, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81M5pYo5L4S._AC_SX575_.jpg"})

        await Product.create({description: "Engtoy Kids Clogs Boys Girls Garden Shoes Slip on Kids Slides Sandals Funny Lightweight Beach Slippers", price: 300, rating: 4.8, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51D9OHH4Y5L._AC_SY575_.jpg"})

        await Product.create({description: "DREAM PAIRS Boys & Girls Faux Fur-Lined Ankle Winter Snow Boots", price: 800, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71LyCkLAOQL._AC_SY575_.jpg"})

        await Product.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight Dance Sneakers Comfortable Training Sneakers", price: 900, rating: 3.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61WUUg0Uo9L._AC_SY575_.jpg"})

        await Product.create({description: "Geox Girl's Ciak 148 (Toddler/Little Kid/Big Kid)", price: 700, rating: 3.5, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51tx0FOp0SL._AC_SY575_.jpg"})

        await Product.create({description: "Crocs Unisex-Child Classic Hello Kitty Clog", price: 300, rating: 3.8, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71wf3OR2VpL._AC_SX575_.jpg"})

        await Product.create({description: "Stelle Tap Shoes for Girls Toddler Boys PU Leather Dance Shoes (Toddler/Little Kid/Big Kid)", price: 800, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/713HydjpLaL._AC_SY575_.jpg"})

        await Product.create({description: "Stride Rite 360 Baby-Girl's Cheyenne Mary Jane Flat", price: 600, rating: 4.8, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51zMMLXk7IL._AC_SX575_.jpg"})

        await Product.create({description: "FabKids Fashion Riding Boot - Easy On Off Side Zipper (Toddler, Little Kid, Big Kid)", price: 1200, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/511gScqVjwL._AC_SY575_.jpg"})

        await Product.create({description: "SOFTKIDS Toddler Girls Dress Shoes Mary Jane Princess Flower Shoes Flats for Wedding Party School Uniform Shoes", price: 1000, rating: 4.5, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/51GWyFJgIkL._AC_SY575_.jpg"})

        await Product.create({description: "Weestep Girls Toddler Little Kid Warm Fur Winter Ankle Flat Snow Boot", price: 1300, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71qdlIUwc7L._AC_SY575_.jpg"})

        await Product.create({description: "DREAM PAIRS Kids Insulated Waterproof Winter Snow Boots", price: 1300, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71VDpQSiWzL._AC_SY575_.jpg"})

        await Product.create({description: "Linodes Leather Jazz Shoe Slip On for Girls and Boys (Toddler/Little Kid/Big Kid)", price: 1000, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61i4kEcjN5L._AC_SX575_.jpg"})

        await Product.create({description: "Canyon Trails Kids Lil Cowboy Pointed Toe Classic Western Rodeo Boots (Toddler/Little Kid)", price: 2000, rating: 4.5, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/81QA7kNjycL._AC_SY695_.jpg"})

        await Product.create({description: "LseLom Girls Dress Shoes-Mary Jane Shoes for Girls Low Heel ", price: 1000, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71gwyh+9CoL._AC_SY575_.jpg"})

        await Product.create({description: "Nike Preschool Dunk Low PS CW1588 100 Black/White - Size 3Y", price: 1200, rating: 4.6, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/61mXysos5oL._AC_SX575_.jpg"})

        await Product.create({description: "UGG Unisex-Child Tazz Slipper", price: 800, rating: 4.3, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/71KYbaMq2sL._AC_SX575_.jpg"})

        await Product.create({description: "Stride Rite 360 Girl's Bianca Fashion Boot", price: 1100, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/91N-fbljFFL._AC_SY575_.jpg"})

        await Product.create({description: "Crocs Kids' Classic Tie Dye Clogs (Little Kid/Big Kid)", price: 300, rating: 4.8, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/718+jFPd-BL._AC_SX575_.jpg"})

        await Product.create({description: "adidas Unisex-Child Adilette Shower Slides", price: 350, rating: 4.7, category: 'shoes', sub_category: 'girls', image: "https://m.media-amazon.com/images/I/616Rb45Yh7L._AC_SX575_.jpg"})


        
        let john = await Customer.create({name: 'Jane Doe', email: 'jane@gmail.com', password: 'doe'})

        let jane = await Customer.create({name: 'John Doe', email: 'john@gmail.com', password: 'doe'})

        let james = await Customer.create({name: 'James Michael', email: 'james@gmail.com', password: 'doe'})

        let gibson = await Customer.create({name: 'Gibson Boen', email: 'gibs@gmail.com', password: 'doe'})

        let tony = await Customer.create({name: 'Tony Kithui', email: 'tony@gmail.com', password: 'doe'})

        let tom = await Customer.create({name: 'Tom Stevens', email: 'tom@gmail.com', password: 'doe'})

        let jack = await Customer.create({name: 'Jack Reacher', email: 'jack@gmail.com', password: 'doe'})

        let kelvin = await Customer.create({name: 'Kelvin Osasun', email: 'kelvin2@gmail.com', password: 'doe'})

        let thomas = await Customer.create({name: 'Thomas Kame', email: 'thomas@gmail.com', password: 'doe'})

        let peter = await Customer.create({name: 'Peter Muta', email: 'peter@gmail.com', password: 'doe'})

        let kim = await Customer.create({name: 'Kim @4', email: 'kim24@gmail.com', password: 'doe'})

        let andrew = await Customer.create({name: 'Andrew Jackobs', email: 'andrew234@gmail.com', password: 'doe'})

        let kuwait = await Customer.create({name: 'Kuwait Sinai', email: 'kuwait675@gmail.com', password: 'doe'})

        let gilbert = await Customer.create({name: 'Gilbert Kim', email: 'gilbert456@gmail.com', password: 'doe'})

        let sharon = await Customer.create({name: 'Sharon Peters', email: 'sharon980@gmail.com', password: 'doe'})

        let diana = await Customer.create({name: 'Diana Moriah', email: 'diana456@gmail.com', password: 'doe'})

        let patricia = await Customer.create({name: 'patricia Chep', email: 'patricia@gmail.com', password: 'doe'})

        let caleb = await Customer.create({name: 'Caleb Son', email: 'caleb@gmail.com', password: 'doe'})

        let abigael = await Customer.create({name: 'Abigael James', email: 'abigael@gmail.com', password: 'doe'})

        let getrude = await Customer.create({name: 'Getrude Yego', email: 'getrude@gmail.com', password: 'doe'})

        let cynthia = await Customer.create({name: 'Cynthia Gibs', email: 'cynthia344@gmail.com', password: 'doe'})

        let caren = await Customer.create({name: 'Caren Mboks', email: 'caren453@gmail.com', password: 'doe'})

        let brigid = await Customer.create({name: 'Brigid Biggs', email: 'brigid321@gmail.com', password: 'doe'})

        let tomm = await Customer.create({name: 'Tom Kwach', email: 'tom345@gmail.com', password: 'doe'})

        let nick = await Customer.create({name: 'Nik Mungai', email: 'nick433@gmail.com', password: 'doe'})

        let jacky = await Customer.create({name: 'Jacky Siggs', email: 'jacky789@gmail.com', password: 'doe'})

        let juma = await Customer.create({name: 'Juma Boy', email: 'juma356@gmail.com', password: 'doe'})

        let sandy = await Customer.create({name: 'Sandy softs', email: 'sandy676@gmail.com', password: 'doe'})

        let melvin = await Customer.create({name: 'Melvin dipps', email: 'melvin678@gmail.com', password: 'doe'})

        let kaku = await Customer.create({name: 'Kaku Stomzs', email: 'kaku890@gmail.com', password: 'doe'})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: john._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: john._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: john._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: john._id})

    
        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'pending', customer_id: jane._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: jane._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'completed', customer_id: jane._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: jane._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: jane._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'declined', customer_id: jane._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'declined', customer_id: jane._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'declined', customer_id: james._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: james._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: james._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: james._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'completed', customer_id: james._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: james._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'pednding', customer_id: james._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: gibson._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'completed', customer_id: gibson._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: gibson._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: gibson._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'declined', customer_id: gibson._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: gibson._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'declined', customer_id: gibson._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: tony._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'completed', customer_id: tony._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: tony._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'declined', customer_id: tony._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: tony._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: tony._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'declined', customer_id: tony._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'declined', customer_id: tom._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'declined', customer_id: tom._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: tom._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: tom._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: tom._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: tom._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'pending', customer_id: tom._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: jack._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: jack._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'declined', customer_id: jack._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'declined', customer_id: jack._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: jack._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'declined', customer_id: jack._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'completed', customer_id: jack._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: caren._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'completed', customer_id: caren._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: caleb._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: caleb._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'pending', customer_id: caleb._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: caleb._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: caleb._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: caleb._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'declined', customer_id: caleb._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: peter._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: peter._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'completed', customer_id: peter._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: peter._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'completed', customer_id: peter._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'pending', customer_id: peter._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'completed', customer_id: peter._id})


        await Order.create({description: "UGG Unisex-Child Tazz Slipper", price: 345, quantity: 1, status: 'completed', customer_id: kelvin._id})

        await Order.create({description: "Lefflow Cheer Shoes Girls White Cheerleading Shoes Lightweight", price: 345, quantity: 1, status: 'pending', customer_id: kelvin._id})

        await Order.create({description: "Stride Rite 360 Unisex-Child Ace 2.0 Sneaker", price: 345, quantity: 1, status: 'completed', customer_id: kelvin._id})

        await Order.create({description: "Herschel supply co 25!", price: 345, quantity: 1, status: 'completed', customer_id: kelvin._id})

        await Order.create({description: "Fossil Mens Nate Quartz Stainless Steel Chronograph Watch", price: 345, quantity: 1, status: 'pending', customer_id: kelvin._id})

        await Order.create({description: "Cole Haan Men's 2.Zerogrand Laser Wing Oxford", price: 345, quantity: 1, status: 'completed', customer_id: kelvin._id})

        await Order.create({description: "RORUN Women Men s 8 inch Lightweight Hiking Trekking Backpacking Outdoor Bootsr", price: 345, quantity: 1, status: 'completed', customer_id: kelvin._id})



        console.log('........done seeding data!')
    }
}

export default Seeder