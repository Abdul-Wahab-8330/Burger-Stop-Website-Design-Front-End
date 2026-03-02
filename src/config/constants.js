import location1 from "../assets/location-sale.png";
import location2 from "../assets/location-salford.png";
import location3 from "../assets/location-manchester.png";
import location4 from "../assets/location-liverpool.png";
import locationsoon from '../assets/location-soon.png';



export const facebookUrl = "https://www.facebook.com/burgerstopuk/";
export const instagramUrl = "https://www.instagram.com/burgerstopuk?igshid=YmMyMTA2M2Y%3D";
export const tiktokUrl = "https://www.tiktok.com/@burgerstopuk";

export const careerUrl = "https://burgerstop.co.uk/careers"
export const uberEatsUrl = "https://burger-stop-2.deliverectdirect.com"
export const clickCollectUrl = "https://burger-stop-2.deliverectdirect.com"

export const locations = [
    {
        id: 1,
        image: location1,
        name: "SALE",
        subtitle: "MANCHESTER",
        address: "80 School Rd, Sale, Manchester, M33 7XB",
        phone: "0161 973 0000",
        openingTimes: "Monday to Sunday 11:00am – 11:00pm",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1984.2637713863905!2d-2.3237655999999998!3d53.4255231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDI1JzMxLjkiTiAywrAxOScyNS42Ilc!5e1!3m2!1sen!2s!4v1772265638827!5m2!1sen!2s",
        type: "normal",
        isMobileSpecial: true,
        comingSoon: false,
        orderLinks: {
            uberEats: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-sale`,
            clickCollect: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-sale`,
        },
        slug: "sale",
    },
    {
        id: 2,
        image: location2,
        name: "SALFORD",
        subtitle: "GREATER MANCHESTER",
        address: "123 Dummy Rd, Salford, M5 1AB",
        phone: "0161 000 0000",
        openingTimes: "Monday to Sunday 11:00am – 11:00pm",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1980.964663171705!2d-2.2727820999999997!3d53.4961728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDI5JzQ2LjIiTiAywrAxNicyMi4wIlc!5e1!3m2!1sen!2s!4v1772265778034!5m2!1sen!2s",
        type: "special",
        comingSoon: false,
        orderLinks: {
            uberEats: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-salford`,
            clickCollect: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-salford`,
        },
        slug: "salford",
    },
    {
        id: 3,
        image: location3,
        name: "MANCHESTER\nCITY CENTER",
        subtitle: "",
        address: "456 Dummy St, Manchester City Centre, M1 2AB",
        phone: "0161 000 0001",
        openingTimes: "Monday to Sunday 11:00am – 11:00pm",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1981.9719411773567!2d-2.2173595999999995!3d53.474609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDI4JzI4LjYiTiAywrAxMycwMi41Ilc!5e1!3m2!1sen!2s!4v1772265722900!5m2!1sen!2s",
        type: "normal",
        comingSoon: false,
        orderLinks: {
            uberEats: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-manchester`,
            clickCollect: `https://burger-stop-2.deliverectdirect.com/pickup/burger-stop-manchester`,
        },
        slug: "manchester-city-centre",
    },
    {
        id: 4,
        image: locationsoon,
        name: "LIVERPOOL",
        subtitle: "COMING SOON",
        address: "",
        phone: "",
        openingTimes: "",
        mapEmbedUrl: "",
        type: "normal",
        comingSoon: true,
        orderLinks: {
            uberEats: "https://burger-stop-2.deliverectdirect.com",
            clickCollect: "https://burger-stop-2.deliverectdirect.com",
        },
        slug: "liverpool",
    },
    {
        id: 5,
        image: locationsoon,
        name: "NEWCASTLE",
        subtitle: "COMING SOON",
        address: "",
        phone: "",
        openingTimes: "",
        mapEmbedUrl: "",
        type: "normal",
        comingSoon: true,
        orderLinks: {
            uberEats: "https://burger-stop-2.deliverectdirect.com",
            clickCollect: "https://burger-stop-2.deliverectdirect.com",
        },
        slug: "newcastle",
    },
    {
        id: 6,
        image: locationsoon,
        name: "LONDON",
        subtitle: "COMING SOON",
        address: "",
        phone: "",
        openingTimes: "",
        mapEmbedUrl: "",
        type: "normal",
        comingSoon: true,
        orderLinks: {
            uberEats: "https://burger-stop-2.deliverectdirect.com",
            clickCollect: "https://burger-stop-2.deliverectdirect.com",
        },
        slug: "london",
    },
];





import news1 from "../assets/news-1.png";
import news2 from "../assets/news-2.png";
import news3 from "../assets/news-3.png";
import news4 from "../assets/news-4.png";
import news5 from "../assets/news-5.png";
import news6 from "../assets/news-6.png";
import burger from "../assets/angus-burger-large.png";

export const newsData = [
    {
        id: "news-1",
        slug: "lunch-done-right",
        title: "Lunch done right ipsum dolor sit amet",
        excerpt: "Loremm ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-09-25",
        publishLabel: "SEPT 25",
        heroImage: {
            url: news1,
            alt: "Lunch done right",
        },
        cardImage: {
            url: news1,
            alt: "Lunch done right",
        },
        body: [
            { type: "paragraph", text: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet..." },
            { type: "heading", text: "Lorem ipsum dolor sit amet" },
            { type: "paragraph", text: "Sed do eiusmod tempor incididunt ipsum dolor sit amet ipsum dolor sit amet..." },
            {
                type: "image",
                url: news2,
                alt: "Behind the scenes",
            },
            { type: "paragraph", text: "Ut enim ad minim veniam..." },
        ]
    },
    {
        id: "news-2",
        slug: "burger-stop-specials",
        title: "Lorem ipsum dolor sit amet",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-06-25",
        publishLabel: "JUNE 25",
        heroImage: {
            url: burger,
            alt: "Burger Stop specials",
        },
        cardImage: {
            url: news2,
            alt: "Burger Stop specials",
        },
        body: [
            { type: "paragraph", text: "Lorem ipsum dolor sit amet..." },
            { type: "heading", text: "Lorem ipsum dolor sit amet" },
            { type: "paragraph", text: "Sed do eiusmod tempor incididunt..." },
            {
                type: "image",
                url: news4,
                alt: "Behind the scenes",
            },
            { type: "paragraph", text: "Ut enim ad minim veniam..." },
        ]
    },
    {
        id: "news-3",
        slug: "summer-menu-launch",
        title: "Lorem ipsum dolor sit amet",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-07-25",
        publishLabel: "JULY 25",
        heroImage: {
            url: news3,
            alt: "Summer menu launch",
        },
        cardImage: {
            url: news3,
            alt: "Summer menu launch",
        },
        body: [],
    },
    {
        id: "news-4",
        slug: "august-update",
        title: "Lorem ipsum dolor sit amet",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-08-25",
        publishLabel: "AUGUST 25",
        heroImage: {
            url: news4,
            alt: "August update",
        },
        cardImage: {
            url: news4,
            alt: "August update",
        },
        body: [],
    },
    {
        id: "news-5",
        slug: "september-highlights",
        title: "Lorem ipsum dolor sit amet",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-09-25",
        publishLabel: "SEPT 25",
        heroImage: {
            url: news5,
            alt: "September highlights",
        },
        cardImage: {
            url: news5,
            alt: "September highlights",
        },
        body: [],
    },
    {
        id: "news-6",
        slug: "october-update",
        title: "Lorem ipsum dolor sit amet",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: {
            name: "Food news",
            slug: "food-news",
        },
        publishDate: "2024-10-25",
        publishLabel: "OCT 25",
        heroImage: {
            url: news6,
            alt: "October update",
        },
        cardImage: {
            url: news6,
            alt: "October update",
        },
        body: [],
    },
];

