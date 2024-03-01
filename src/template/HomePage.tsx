import {HeroSection} from "../section/HeroSection.tsx";
import {DownloadAppSection} from "../section/DownloadAppSection.tsx";
import {FeaturesSection} from "../section/FeaturesSection.tsx";
import {RecipesSection} from "../section/RecipesSection.tsx";
import {FAQSection} from "../section/FAQSection.tsx";
import {PurchasesSection} from "../section/PurchasesSection.tsx";
import {CustomerSection} from "../section/CustomerSection.tsx";

export default function HomePage () {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <DownloadAppSection />
            <RecipesSection />
            <PurchasesSection />
            <CustomerSection />
            <FAQSection />
        </>
    )
}