module.exports.getSelection = async function (input) {
    console.log("==================================================")
    let selection

    try {
        selection = await input("Enter a selection (Q to quit): ")
        selection = selection.toUpperCase()

    } catch (e) {
        console.log(e)
        selection = ""
    } finally {
        return selection
    }
}
