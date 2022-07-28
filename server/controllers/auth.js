const signup = () => {
    try {
    } catch (error) {
        console.log(error);
        resizeBy.status(500).json({ message: error });
    }
};
const login = () => {
    try {
    } catch (error) {
        console.log(error);
        resizeBy.status(500).json({ message: error });
    }
};

module.exports = { signup, login };
