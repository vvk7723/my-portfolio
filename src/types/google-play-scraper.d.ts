declare module 'google-play-scraper' {
    export interface AppOptions {
        appId: string;
        lang?: string;
        country?: string;
    }

    export interface AppData {
        title: string;
        description: string;
        descriptionHTML: string;
        summary: string;
        installs: string;
        minInstalls: number;
        score: number;
        scoreText: string;
        ratings: number;
        reviews: number;
        histogram: Record<string, number>;
        price: number;
        free: boolean;
        currency: string;
        priceText: string;
        available: boolean;
        offersIAP: boolean;
        IAPRange: string;
        size: string;
        androidVersion: string;
        androidVersionText: string;
        developer: string;
        developerId: string;
        developerEmail: string;
        developerWebsite: string;
        developerAddress: string;
        privacyPolicy: string;
        developerInternalID: string;
        genre: string;
        genreId: string;
        icon: string;
        headerImage: string;
        screenshots: string[];
        video: string;
        videoImage: string;
        contentRating: string;
        contentRatingDescription: string;
        adSupported: boolean;
        released: string;
        updated: number;
        version: string;
        recentChanges: string;
        comments: string[];
        url: string;
        appId: string;
    }

    const gplay: {
        app: (options: AppOptions) => Promise<AppData>;
        list: (options: any) => Promise<any[]>;
        search: (options: any) => Promise<any[]>;
        developer: (options: any) => Promise<any[]>;
        suggest: (options: any) => Promise<string[]>;
        reviews: (options: any) => Promise<any>;
        similar: (options: any) => Promise<any[]>;
        permissions: (options: any) => Promise<any[]>;
        categories: () => Promise<any>;
    };

    export default gplay;
}
