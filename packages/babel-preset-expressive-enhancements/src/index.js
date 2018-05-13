import transformForBinding from "babel-plugin-transform-for-binding";
import transformInIterable from "babel-plugin-transform-in-iterable";

module.exports = options => {
    return {
        plugins: [
            transformForBinding,
            transformInIterable
        ]
    }
}