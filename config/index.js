import { XcaretDataES } from './language_es'
import { XcaretDataEN } from './language_en'


export const config = {
    spanish: {
        dictionary: XcaretDataES(),
        language: 'ES'
    },
    english: {
        dictionary: XcaretDataEN(),
        language: 'EN'
    }
}