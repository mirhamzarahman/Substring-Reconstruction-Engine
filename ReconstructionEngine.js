

/**
 * Reconstructs the original string from fragment data.
 *
 * @param {string} fragmentData - Combined fragment sequence
 * @returns {string} - Reconstructed original text
 */
function reconstructSequence(fragmentData) {
    let reconstructedText = "";

    // Extract characters representing the original sequence
    for (let index = 0; index < fragmentData.length; index += 2) {
        reconstructedText += fragmentData[index];
    }

    // Add the final character that completes the sequence
    reconstructedText += fragmentData[fragmentData.length - 1];

    return reconstructedText;
}


// Example usage
const fragment = "abbaac";

const result = reconstructSequence(fragment);

console.log("Original Sequence:", result);
```
