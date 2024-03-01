import { AppListComponent, AppListItemComponent } from "../atoms/style"

export const AppList = () => {
    return (
        <AppListComponent>
            <AppListItemComponent>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</AppListItemComponent>
            <AppListItemComponent>These foods promote overall wellness by support healthy digestion and boosting immunity</AppListItemComponent>
        </AppListComponent>
    )
}