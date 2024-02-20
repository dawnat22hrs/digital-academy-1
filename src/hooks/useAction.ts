import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {actions} from "../stores/recipes/recipes.slice.ts";
import {actions as actionsPosts} from "../stores/posts/posts.slice.ts"

const rootActions = {
    ...actions,
    ...actionsPosts,
}
export const useAction = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}