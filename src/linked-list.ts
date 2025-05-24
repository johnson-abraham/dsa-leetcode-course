import { Exception } from "./exceptions";
import { isDefined } from "./utils";

class Node<T> {
  private value: T;
  private next: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }

  getNext(): Node<T> {
    return this.next;
  }

  setNext(node: Node<T>): void {
    this.next = node;
  }
}

export class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  private length: number;

  constructor();
  constructor(value: T);
  constructor(value?: T) {
    if (isDefined(value)) {
      const newNode = new Node(value);
      this.head = this.tail = newNode;
      this.length = 1;
    } else {
      this.head = this.tail = null;
      this.length = 0;
    }
  }

  push(value: T): void {
    const newNode = new Node(value);

    if (!isDefined(this.head)) {
      this.head = this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.setNext(newNode);
      this.tail = newNode;
      ++this.length;
    }
  }

  pop(): T {
    if (!isDefined(this.head)) throw Exception.EMPTY_LIST;

    let previous = this.head;
    let current = this.head.getNext();

    if (!current) {
      const value = this.head.getValue();
      this.head = this.tail = null;
      --this.length;
      return value;
    }

    while (current?.getNext()) {
      previous = current;
      current = current.getNext();
    }

    previous.setNext(null);
    this.tail = previous;
    --this.length;
    return current.getValue();
  }

  /**
   * Removes the first element in the list
   */
  shift(): T {
    if (!isDefined(this.head)) throw Exception.EMPTY_LIST;

    const value = this.head.getValue();

    if (!isDefined(this.head.getNext())) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.getNext();
    }

    --this.length;

    return value;
  }

  /**
   * Adds an element to the beginning of the list
   * @param value
   */
  unshift(value: T): void {
    const newNode = new Node(value);

    if (!isDefined(this.head)) {
      this.head = this.tail = newNode;
    } else {
      newNode.setNext(this.head);
      this.head = newNode;
    }

    ++this.length;
  }

  get(index: number): T {
    return this.getNodeAtIndex(index)?.getValue();
  }

  set(index: number, value: T): void {
    const node = this.getNodeAtIndex(index);
    node.setValue(value);
  }

  insert(index: number, value: T): void {
    if (index < 0 || index > this.length) throw Exception.INVALID_INDEX(index);

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }

      const newNode = new Node(value);
      newNode.setNext(current.getNext());
      current.setNext(newNode);

      ++this.length;
    }
  }

  getLength(): number {
    return this.length;
  }

  asArray(): T[] {
    if (!this.head) return [];

    let current = this.head;
    const values: T[] = [];

    while (!!current) {
      values.push(current.getValue());
      current = current.getNext();
    }

    return values;
  }

  private getNodeAtIndex(index: number): Node<T> {
    if (index < 0 || index >= this.length) throw Exception.INVALID_INDEX(index);

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.getNext();
    }

    return current;
  }
}
