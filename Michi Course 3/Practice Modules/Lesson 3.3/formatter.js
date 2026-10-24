// Add a default export below.
// The exported function should take a name (a string) and return the same
// name with its first letter capitalized.
// For example, calling it with "ada" should return "Ada".

export default function formatName(name) {
    // TODO: build and return the capitalized name, e.g. "ada" -> "Ada"
    return name.charAt(0).toUpperCase() + name.slice(1);
}
