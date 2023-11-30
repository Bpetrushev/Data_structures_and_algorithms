type BinaryNode<T> = {
  value: number;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return;
  }

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
}

function inOrderSearch(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
