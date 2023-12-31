import { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";



const sampleDescriptionHtml = `
<div class="product attribute description">
<div class="value"><h4><strong data-sanitized-data-mce-fragment="1">Product Parameters:</strong></h4>
<p>Screen Size: 1.69" TFT 240*280<br>BT Version: V5.1<br>Battery Capacity: 300 mAh<br>Battery Type: Lithium Polymer Battery<br>Standby Time: 7 days<br>Watch Size: 37.6mm * 44.4 mm* 11.6mm<br>Weight: 43.6g<br>Material: ABS/PC/Silicone&nbsp;</p>
<p>Model:OSW-31N</p>
<h4><strong data-sanitized-data-mce-fragment="1">Product Features:</strong></h4>
<p><strong data-sanitized-data-mce-fragment="1"><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-01.jpg?v=1663645827"></strong></p>
<p><strong data-sanitized-data-mce-fragment="1">133 Sport Modes--Always One Mode Suits for You</strong><br>Supporting 133 sport modes, Watch 2 can automatically monitor and accurately capture each motion state throughout the day, helping you fully understand the movement effect. In addition, you can set daily exercise goals to achieve higher breakthroughs.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-02.jpg?v=1663645828"></p>
<p><strong>4 Major Global Positioning Systems--Every Step Counts</strong><br>Built-in precise GNSS chip, supporting Beidou, GPS, GLONASS, Galileo 4 global positioning satellite systems, positioning movement trajectory more accurately, helping you who love sports to record movement data and see the progress after each exercise.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-03.jpg?v=1663645831"></p>
<p><strong>24-hours Accurate Heart Monitor--Get Better Exercise Results</strong><br>Supported by innovative sensor designs and intelligent monitoring systems, Watch 2 can monitor your heart rate 24 hours a day and accurately measure heart rate when exercising and resting, helping understand the exercise status and obtain the better training effect.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-04.jpg?v=1663645827"></p>
<p><strong>Blood Oxygen Monitor--Knows Your Health in Time</strong><br>Watch 2 detects blood oxygen level, which is a key indicator of your overall health. It can help you understand how well your body is absorbing oxygen, and the amount of oxygen delivered to your body.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-05.jpg?v=1663645827"></p>
<p><strong>Sleep Monitor--Optimize Your Sleep</strong><br>Records your deep and light sleep time, sober time and REM(rapid eye movement) to help you understand the quality of your rest for adjusting your schedule to sleep better.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-06.jpg?v=1663645828"></p>
<p><strong>5ATM Water Resistant--Live Free, Splash Away</strong><br>No need to worry about water splash or sudden rain. With 5ATM for splash, water, and dust resistance, your watch is well-protected. Just go exercise freely.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-07.jpg?v=1663645829"></p>
<p><strong>1.69 Inch Tempered Glass Display--Remain Strong and Expand Your Horizon</strong><br>With 1.69 TFT LCD Display HD color screen, achieving a better combination of hardness and softness. With large HD screen, getting key information from watch become easier and more comfortable.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-08.jpg?v=1663645829"></p>
<p><strong>100+ Watch Faces--Decorating Your Everyday</strong><br>More than 100+ choices of watch faces are on the oraimo Health App and constantly being updated now. Stay tuned for your style and decorate your everyday.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-09.jpg?v=1663645829"></p>
<p><strong>Message Reminder--Quickly Get Up-to-Date from Your Friends</strong><br>Get apps' notification on your wrist, with Android phones supporting all apps and iPhones supporting 12+ most popular apps. By the way, convenient replys can be set, so you can easily reply your friends with one click.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-10.jpg?v=1663645828"></p>
<p><strong>oraimo Health--APP to Push You Further</strong><br>With oraimo Health, manage your workout data, sleep data, and health data with new-level ease and comfortable visuals. Discover more functions and artistic watch faces to customize your watch on oraimo Health.</p>
<p><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OSW-31N_FB_-11.jpg?v=1663645829"></p></div>
</div>`


function parseProductDescription(descriptionHtml: string) {
    const dom = new DOMParser().parseFromString(descriptionHtml, "text/html")!;
    const description = dom.querySelector(".product.attribute.description") as Element;
    assert(description);

    const value = description.querySelector(".value");

    // Extract the product parameters
    let productParameters = value?.querySelectorAll("p")[0]?.outerHTML;
    // convert to array
    productParameters = productParameters?.split("<br>").map((item: string) => item.replace("<p>", "").replace("</p>", "").trim());

    productParameters = productParameters?.map((item: string) => {
        const [key, value] = item.split(":");
        return { key, value };
    });

    console.log({ productParameters });

    assert(value);
    // Extract the product features as an array with each item as a string both images and text
    const pTags = value!.querySelectorAll("p") as Element[];

    const productFeatures = []

    pTags?.forEach((pTag) => {
        if (pTag.querySelector("img")) {
            const img = pTag.querySelector("img") as Element;
            productFeatures.push({
                type: "image",
                src: img.getAttribute("src")
            })
        } else if (pTag.querySelector("strong")) {
            const strong = pTag.querySelector("strong") as Element;
            productFeatures.push({
                type: "text",
                text: strong.textContent
            })
        }
    }
    );

    console.log({ productFeatures });



    return productParameters;
}

parseProductDescription(sampleDescriptionHtml);
