const {
    Post
} = require("../models");

const postdata = [{
        title: "These wireless headphones double as hearing aids – Future Blink",
        post_text: "Rather than releasing any new cameras for CES 2021, Canon is doing something different: Letting you take pictures from space. The company has unveiled an interactive site that allows you to use its CE-SAT-1 satellite, equipped with a lightly modified 5D Mark III DSLR, to grab simulated photos of locations including New York City, the Bahamas and Dubai. Canon launched the wine barrel-sized microsatellite back in June of 2017. It holds an EOS 5D Mark III camera that’s fitted with a 40 cm Cassegrain-type (mirror) 3720mm telescope. Orbiting at a 600 km orbit (375 miles), it provides about a 36-inch ground resolution within a 3x2 mile frame, Canon claims. (By contrast, the world’s highest-resolution satellite, WorldView-4, can resolve down to 12 inches.) It also houses a PowerShot S110 for wider images.",
        user_id: 1,
    },
    {
        title: "Presenting the Best of CES 2021 winners!",
        post_text: "As Wednesday draws to a close, so does a grand social experiment: the first-ever online-only CES. In the end, the experience was invariably different. We particularly missed being able to wander The Sands and learn about smaller, up-and-coming startups. And if seeing is believing, the oddest entries at the show remain locked behind our computer screens, with no chance of getting hands-on time. And yet, we were kept busy this week. Most of the usual tech giants had news to share, and many of those were able to show us their wares in person, ahead of the three-day gadget extravaganza. When CES got underway, Team Engadget went to work. For each of the categories, a small council of editors, comprised of editorial leadership and beat reporters, selected up to four finalists in the topic areas where they’re already experts. Then, the wider editorial staff voted on the winners, with the Best of the Best chosen from that pool of gold medalists. And, of course, the People’s Choice winner was selected by you, our readers, from the pool of finalists.",
        user_id: 2,
    },
    {
        title: "Galaxy Buds Pro review: Samsung's best earbuds yet",
        post_text: "When the rumors began to swirl about Samsung’s Galaxy Buds Live, the promise of active noise cancellation (ANC) led me to believe the company was finally addressing a key omission from its lineup. However, those earbuds would ultimately offer an “open type” design that doesn’t seal your ear canal entirely. So while ANC was there, it wasn’t particularly effective. Enter the Galaxy Buds Pro ($200). Samsung’s most complete earbuds pack in ANC, 360 Audio and a host of handy features and mount a convincing case against Apple’s AirPods Pro. The Galaxy Buds Pro isn’t as clear a bargain as other Galaxy Buds, but Samsung does have a lot to offer here.",
        user_id: 3,
    },
    {
        title: "Apple is reportedly working on a major redesign for the iMac",
        post_text: "It turns the MacBook Pro may not be the only computer in Apple’s lineup to get some much-needed attention from the company’s design team. According to Bloomberg’s Mark Gurman, Apple is working on a major redesign of its venerable iMac all-in-one desktop computer. Gurman says the company will release two new models later that year that will feature a design similar to Apple’s Pro Display XDR. They’ll do away with the current iMac’s ample display bezel, oversized chin and curved back. Naturally, they’ll also include the company’s next-generation of ARM-based processors, continuing Apple’s move away from Intel.",
        user_id: 4,
    },
    {
        title: "Audi and BMW shut down car subscription programs",
        post_text: "More car subscription services are running into trouble. According to Autoblog, Automotive News has learned that Audi and BMW are respectively ending and pausing their services. Audi is winding down its Select program on January 31st with no mention of a revival, while the Nashville-only Access by BMW is closing as the automaker develops the “next iteration” of the service.",
        user_id: 5,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;