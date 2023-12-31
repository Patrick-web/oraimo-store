import { assertEquals } from "https://deno.land/std@0.210.0/testing/asserts.ts";
import { getCategoriesFromHtml, getProductsFromHtml } from './parsers.ts';

Deno.test('getProductsFromHtml should parse HTML and return proper products', () => {
    const html = `
    <html>
        <body>
            <div data-id="989" class="site-product"><a data-sku="OSV-103" data-name="UltraCleaner S2 27 Kpa Suction Vacuum" data-price="18800" href="/product/oraimo-ultracleaner-s2-cordless-stick-vacuum-cleaner-with-27-kpa-cyclonic-suction-380w-brushless-motor-up-to-50mins-runtime-led-display-8-in-1-handheld-vacuum-for-floors-carpets-stairs-baseboards?ean=4895180787591" class="product-img js_select_item"><img alt="UltraCleaner S2 27 Kpa Suction Vacuum" data-src="https://cdn-img.oraimo.com/NG/album/osv-103/osv-103.png" src="https://cdn-img.oraimo.com/NG/album/osv-103/osv-103.png" lazy="loaded"></a> <h3><a data-sku="OSV-103" data-name="UltraCleaner S2 27 Kpa Suction Vacuum" data-price="18800" href="/product/oraimo-ultracleaner-s2-cordless-stick-vacuum-cleaner-with-27-kpa-cyclonic-suction-380w-brushless-motor-up-to-50mins-runtime-led-display-8-in-1-handheld-vacuum-for-floors-carpets-stairs-baseboards?ean=4895180787591" class="js_select_item"><span style="display: inline;">UltraCleaner S2 27 Kpa Suction Vacuum</span></a></h3> <div class="product-points"><p class="product-point"><img alt="" data-src="https://cdn-img.oraimo.com/label/stable-suction-base.svg" src="https://cdn-img.oraimo.com/label/stable-suction-base.svg" lazy="loaded"> <span><span>27Kpa Powerful Sunction</span></span></p> <p class="product-point"><img alt="" data-src="https://cdn-img.oraimo.com/images/multi-functional-brush-kit.svg" src="https://cdn-img.oraimo.com/images/multi-functional-brush-kit.svg" lazy="loaded"> <span><span>8 in 1 LED Touch Screen-Control</span></span></p></div> <div class="product-desc"><p class="product-review"><span class="site-star"><span class="active-bg" style="width: 86%;"></span> <span class="icon icon-stars"></span></span> <span class="review-number">(30)</span></p> <p class="product-price"><span data-price="18800" class="format_price">KES18800.00</span> <del data-price="25000" class="format_price">KES25000.00</del></p> <div class="product-btn"><a href="/product/oraimo-ultracleaner-s2-cordless-stick-vacuum-cleaner-with-27-kpa-cyclonic-suction-380w-brushless-motor-up-to-50mins-runtime-led-display-8-in-1-handheld-vacuum-for-floors-carpets-stairs-baseboards?ean=4895180787591" data-sku="OSV-103" data-name="UltraCleaner S2 27 Kpa Suction Vacuum" data-price="18800" class="js_select_item">Learn More</a> <a href="javascript:;" data-default-text="Add to Cart" data-adding-text="Adding..." data-id="989" data-price="18800" data-sku="OSV-103" data-name="UltraCleaner S2 27 Kpa Suction Vacuum" class="js_add_to_cart">Add to Cart</a></div></div></div>
            <div data-id="981" class="site-product"><a data-sku="OPC-SC20" data-name="SmartScale Weight Scale" data-price="1900" href="/product/oraimo-smartscale-body-fat-weight-scale-with-full-body-tracker?ean=4895180777561" class="product-img js_select_item"><img alt="SmartScale Weight Scale" data-src="https://cdn-img.oraimo.com/NG/album/opc-sc20/opc-sc20.png" src="https://cdn-img.oraimo.com/NG/album/opc-sc20/opc-sc20.png" lazy="loaded"></a> <h3><a data-sku="OPC-SC20" data-name="SmartScale Weight Scale" data-price="1900" href="/product/oraimo-smartscale-body-fat-weight-scale-with-full-body-tracker?ean=4895180777561" class="js_select_item"><span style="display: inline;">SmartScale Weight Scale</span></a></h3> <div class="product-points"><p class="product-point"><img alt="" data-src="https://cdn-img.oraimo.com/label/tempered-glass-to-ensure-safety.svg" src="https://cdn-img.oraimo.com/label/tempered-glass-to-ensure-safety.svg" lazy="loaded"> <span><span>Tempered Glass to Ensure Safety</span></span></p> <p class="product-point"><img alt="" data-src="https://cdn-img.oraimo.com/label/high-precision-sensors.svg" src="https://cdn-img.oraimo.com/label/high-precision-sensors.svg" lazy="loaded"> <span><span>High-precision Sensors</span></span></p></div> <div class="product-desc"><p class="product-review"><span class="site-star"><span class="active-bg" style="width: 92%;"></span> <span class="icon icon-stars"></span></span> <span class="review-number">(51)</span></p> <p class="product-price"><span data-price="1900" class="format_price">KES1900.00</span> <del data-price="3100" class="format_price">KES3100.00</del></p> <div class="product-btn"><a href="/product/oraimo-smartscale-body-fat-weight-scale-with-full-body-tracker?ean=4895180777561" data-sku="OPC-SC20" data-name="SmartScale Weight Scale" data-price="1900" class="js_select_item">Learn More</a> <a href="javascript:;" data-default-text="Add to Cart" data-adding-text="Adding..." data-id="981" data-price="1900" data-sku="OPC-SC20" data-name="SmartScale Weight Scale" class="js_add_to_cart">Add to Cart</a></div></div></div>
        </body>
    </html>
    `;

    const expectedProducts = [
        {
            link: '/product/oraimo-ultracleaner-s2-cordless-stick-vacuum-cleaner-with-27-kpa-cyclonic-suction-380w-brushless-motor-up-to-50mins-runtime-led-display-8-in-1-handheld-vacuum-for-floors-carpets-stairs-baseboards?ean=4895180787591',
            name: 'UltraCleaner S2 27 Kpa Suction Vacuum',
            image: 'https://cdn-img.oraimo.com/NG/album/osv-103/osv-103.png',
            currency: 'KES',
            price: 25000,
            discountedPrice: 18800,
            rating: '86',
            numberOfReviews: 30,
        },
        {
            link: '/product/oraimo-smartscale-body-fat-weight-scale-with-full-body-tracker?ean=4895180777561',
            name: 'SmartScale Weight Scale',
            image: 'https://cdn-img.oraimo.com/NG/album/opc-sc20/opc-sc20.png',
            currency: 'KES',
            price: 3100,
            discountedPrice: 1900,
            rating: '92',
            numberOfReviews: 51,
        },
    ];

    const result = getProductsFromHtml(html);

    assertEquals(result.products, expectedProducts);
});


Deno.test('getCategoriesFromHtml should parse HTML and return proper categories', () => {
    const html = `
<html>
	<body>
		<ul class="header-nav-sub">
			<li>
				<a href="/collections/wearable" class="suber">Wearable</a>
				<a href="javascript:;" class=""></a>
				<a href="/collections/wearable" class="header-nav-image"
					><img
						alt="Wearable"
						src="https://cdn-img.oraimo.com/images/wearable_1.jpg"
				/></a>
				<ul class="header-nav-suber">
					<li><a href="/collections/smart-watches">Smart Watches </a></li>
				</ul>
			</li>
			<li>
				<a href="/collections/power" class="suber">Power</a>
				<a href="javascript:;" class=""></a>
				<a href="/collections/power" class="header-nav-image"
					><img
						alt="Power"
						src="https://cdn-img.oraimo.com/images/power_1_1.jpg"
				/></a>
				<ul class="header-nav-suber">
					<li><a href="/collections/power-banks">Power Banks </a></li>
					<li><a href="/collections/wall-chargers">Wall Chargers </a></li>
					<li><a href="/collections/car-chargers">Car Chargers </a></li>
					<li><a href="/collections/cables">Cables </a></li>
					<li><a href="/collections/power-strips">Power Strips </a></li>
				</ul>
			</li>
		</ul>
	</body>
</html>

    `;

    const expectedCategories = [
        {
            name: 'Wearable',
            slug: 'Wearable',
            link: '/collections/wearable',
            image: 'https://cdn-img.oraimo.com/images/wearable_1.jpg',
            subCategories: [
                {
                    name: 'Smart Watches',
                    link: '/collections/smart-watches',
                },
            ],
        },
        {
            name: 'Power',
            slug: 'Power',
            link: '/collections/power',
            image: 'https://cdn-img.oraimo.com/images/power_1_1.jpg',
            subCategories: [
                {
                    name: 'Power Banks',
                    link: '/collections/power-banks',
                },
                {
                    name: 'Wall Chargers',
                    link: '/collections/wall-chargers',
                },
                {
                    name: 'Car Chargers',
                    link: '/collections/car-chargers',
                },
                {
                    name: 'Cables',
                    link: '/collections/cables',
                },
                {
                    name: 'Power Strips',
                    link: '/collections/power-strips',
                },
            ],
        },
    ];

    const result = getCategoriesFromHtml(html);

    assertEquals(result.categories, expectedCategories);
});