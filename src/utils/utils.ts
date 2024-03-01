export const getHashtags = (tags: string[]) => tags.map(tag => '#' + tag).join(', ')

export const getCurrentId = () => {
    const currentPath =  window.location.pathname.split('/')
    const id = Number(currentPath[currentPath.length - 1])
    return id
}
