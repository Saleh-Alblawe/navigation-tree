export default {
    isArabic(text: string) {
        const pattern = /^[\u0621-\u064A\u0660-\u0669 ]+$/;
        return pattern.test(text);
    }
}
