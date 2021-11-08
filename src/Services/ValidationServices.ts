export default {
    isArabic(text: string) {
        const pattern = /^[\u0621-\u064A\u0660-\u0669 ]+$/;
        return pattern.test(text);
    },

    isEnglish(text: string) {
        const pattern = /^[A-Za-z0-9 ]*$/;
        return pattern.test(text);
    }
}
