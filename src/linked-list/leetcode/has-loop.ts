import { LinkedList } from "../linked-list";
import { isDefined } from "../../utils";

/**
 * Checks whether the given linked list contains a loop (cycle) using Floyd's Cycle-Finding Algorithm.
 *
 * This algorithm, also known as the "tortoise and hare" algorithm, uses two pointers that
 * traverse the list at different speeds. If a loop exists, the fast pointer will
 * eventually catch up to the slow pointer. This function does not modify the list.
 *
 * @template T The type of the values stored in the linked list nodes.
 * @param linkedList The linked list to check for a loop.
 * @returns `true` if the linked list has a loop/cycle, `false` otherwise.
 */
export function hasLoop<T>(linkedList: LinkedList<T>): boolean {
  const head = linkedList.getHead();
  const tail = linkedList.getTail();

  if (!isDefined(head) || head === tail) return false;

  let fast = head.getNext()?.getNext();
  let slow = head.getNext();

  while (isDefined(fast) && isDefined(fast.getNext())) {
    if (fast === slow) return true;

    fast = fast.getNext()?.getNext();
    slow = slow.getNext();
  }

  return false;
}
