import { getHashtags } from "../utils/utils"
import { test, expect} from "@jest/globals"

const tags = ['one', 'two', 'three']
const hashTags = '#one, #two, #three'

test('Проверка на правильный вывод массива в виде хэштегов', () => {
    expect(getHashtags(tags)).toBe(hashTags)
})