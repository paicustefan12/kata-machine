export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;
        
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        
        this.data[0] = this.data[this.length]; 
        this.heapifyDown(0);

        return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
            
        const p = this.parent(idx);
        const parentValue = this.data[p];
        const value = this.data[idx];
        if (parentValue > value) {
            this.swap(p, idx);
            this.heapifyUp(p);
        }
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
 
        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.swap(idx, rIdx);
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.swap(idx, lIdx);
            this.heapifyDown(lIdx);
        }
    }

    private parent(index: number): number  {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(idx: number): number { 
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number { 
        return 2 * idx + 2;
    }


    private swap(idx1: number, idx2: number): void {
        const tmp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = tmp;
    }
}