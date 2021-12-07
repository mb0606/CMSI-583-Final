class Cell {

    constructor(sym) {
        this.symbole = sym; // 
        this.prev = null; // reference to the prev node
        this.next = null; // . reference to next node
    }
}

export default class Tape {
    constructor(feed) {
        this.load(feed);
    }

    load(feed) {
        this.head = new Cell();
        const originalHead = this.head;
        for (const symbol of feed) {
            this.write(symbol);
            this.move("R");
        }
        this.head = originalHead;
    }

    read() {
        return this.head.symbole;
    }

    write(sym) {
        this.head.symbole = sym;
    }
    move(direction) {
        if (direction == "L") {
            if (!this.head.prev) {
                this.head.prev = new Cell("B");
                this.head.prev.next = this.head;
            }
            this.head = this.head.prev;
        }
        if (direction == "R") {
            if (!this.head.next) {
                this.head.next = new Cell("B");
                this.head.next.prev = this.head;
            }
            this.head = this.head.next;
        }

    }
    eachCell(callback) {
        let currentCell = this.head;
        while (currentCell != null) {
            callback(currentCell);
            currentCell = currentCell.next;
        }
    }

}
