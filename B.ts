interface Adder {
    add(nr: number): void;
    getSum(): number;
    getRange(): number;
}

export class CharCounter {
    private characterCount: number = 0;
    private longestWordLength: number = 0;

    constructor(private adder: Adder) {}

    addWordCharacters(word: string): void {
        this.adder.add(word.length);
        this.characterCount += word.length;

        if (word.length > this.longestWordLength) {
            this.longestWordLength = word.length;
        }
    }

    getCharacterCount(): number {
        return this.characterCount;
    }

    getLongestWordLength(): number {
        return this.longestWordLength;
    }
}
