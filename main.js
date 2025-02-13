function printLeftTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}

function printCenteredTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

function main() {
    const n = 12;

    console.log("Left-aligned triangle:");
    printLeftTriangle(n);

    console.log("\nCentered triangle:");
    printCenteredTriangle(n);
}

main();
