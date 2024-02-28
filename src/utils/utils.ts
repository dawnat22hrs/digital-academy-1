export const getHashtags = (tags: string[]) => tags.map(tag => '#' + tag).join(', ')

export const getCurrentId = () => {
    const currentPath =  window.location.pathname.split('/')
    return currentPath[currentPath.length - 1]
}
