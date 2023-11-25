type DoublyLinkedListNode<T> = {
  value: T;
  prev?: DoublyLinkedListNode<T>;
  next?: DoublyLinkedListNode<T>;
};

class DoublyLinkedList<T> {
  private length: number;
  private head?: DoublyLinkedListNode<T>;
  private tail?: DoublyLinkedListNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as DoublyLinkedListNode<T>;
    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("U can'n do it at this point!");
    } else if (idx === this.length) {
      this.append(item);
    } else if (idx === 0) {
      this.prepend(item);
    }

    this.length++;
    let curr = this.getAt(idx)!;

    curr = curr as DoublyLinkedListNode<T>;
    const node = { value: item } as DoublyLinkedListNode<T>;
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;

    if (node.prev) {
      node.prev.next = curr;
    }
  }

  append(item: T): void {
    this.length++;
    const node: DoublyLinkedListNode<T> = { value: item };

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;

    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.value === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return;
    }

    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);

    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  private removeNode(node: DoublyLinkedListNode<T>): T | undefined {
    this.length--;

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.prev = node.next = undefined;

    return node.value;
  }

  private getAt(idx: number): DoublyLinkedListNode<T> | undefined {
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    return curr;
  }
}
