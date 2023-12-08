function search(curr: BinaryNode<number> | null, needle: number): boolean {

    // first base case
    if (!curr) {
        return false;
    }

    // equivalence
    if (curr.value === needle) {
        return true;
    }

    // right side(<)
    if (curr.value < needle) {
        return search(curr.right, needle);
    }
    
    // left side(>=)
    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}