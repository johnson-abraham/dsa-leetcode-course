import { LinkedList, Node } from "../linked-list";
import { isDefined } from "../../utils";
import { Exception } from "../../exceptions";

/**
 * Finds the Kth node from the end of a singly linked list.
 *
 * This function uses the "two-pointer" technique. A 'fast' pointer is moved K steps ahead
 * of a 'slow' pointer. Then, both pointers move one step at a time until the 'fast' pointer
 * reaches the end of the list. At this point, the 'slow' pointer will be at the Kth node from the end.
 *
 * @template T The type of the values stored in the linked list nodes.
 * @param linkedList The linked list to search within.
 * @param k The position from the end of the list (1-indexed). For example, k=1 is the last node, k=2 is the second to last.
 * @returns The Kth node from the end of the list.
 * @throws {Exception.EMPTY_LIST} If the provided linked list is empty.
 * @throws {Exception.INVALID_INDEX} If `k` is less than 1 or `k` is greater than the number of nodes in the list.
 */
export function findKthNodeFromListEnd<T>(linkedList: LinkedList<T>, k: number): Node<T> {
  const head = linkedList.getHead();

  if (!isDefined(head)) throw Exception.EMPTY_LIST;
  if (k < 1) throw Exception.INVALID_INDEX(k);

  let fast = head;
  let slow = head;

  for (let i = 1; i <= k; i++) {
    if (!isDefined(fast)) throw Exception.INVALID_INDEX(k);
    fast = fast.getNext();
  }

  while (isDefined(fast)) {
    fast = fast.getNext();
    slow = slow.getNext();
  }

  return slow;
}
