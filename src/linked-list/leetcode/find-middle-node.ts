import { Node, LinkedList } from "../linked-list";
import { isDefined } from "../../utils";

/**
 * Finds the middle node of a given linked list.
 *
 * This function is designed to locate the middle node without
 * having access to the list's length or calculating it explicitly.
 * It uses a common "fast and slow pointer" approach.
 *
 * @template T The type of the values stored in the linked list nodes.
 * @param linkedList The input linked list to search.
 * @returns The middle node of the linked list. If the list has an even number of nodes,
 * it returns the second of the two middle nodes (e.g., for 1->2->3->4, it returns 3).
 * @throws {Error} If the provided linked list is empty.
 */
export function findMiddleNode<T>(linkedList: LinkedList<T>): Node<T> {
  let fast: Node<T>;
  let slow: Node<T>;

  fast = slow = linkedList.getNodeAtIndex(0);

  while (isDefined(fast) && isDefined(fast.getNext())) {
    slow = slow.getNext();
    fast = fast.getNext()?.getNext();
  }

  return slow;
}
