import { ItemData, ItemText, FeatureList, FeatureListItem } from "../atoms/style";

interface IFeatureList {
    data: string,
    text: string,
}

const models = [
    {
        data: '10K+',
        text: 'Satisfied Costumers \n All Great Over The World',
    },
    {
        data: '4M',
        text: 'Healthy Dishes Sold \n Including Milk Shakes Smooth',
    },
    {
        data: '99.99%',
        text: 'Reliable Customer Support \n We Provide Great Experiences'
    }
]

export const FeaturesList = () => {
    return (
        <FeatureList>
            {
                models.map((item: IFeatureList) => (
                    <FeatureListItem key={item.text}>
                        <ItemData>
                            {item.data}
                        </ItemData>
                        <ItemText>
                            {item.text}
                        </ItemText>
                    </FeatureListItem>
                ))
            }
        </FeatureList>
    )
}