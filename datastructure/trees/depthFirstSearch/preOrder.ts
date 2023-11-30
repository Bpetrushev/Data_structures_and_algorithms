type BinaryNode<T> = {
  value: number;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return;
  }

  path.push(curr.value);

  walk(curr.left, path);
  walk(curr.right, path);
}

function preOrderSearch(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
