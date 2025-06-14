import { LinkedList } from "../linked-list";
import { isDefined } from "../../utils";

/**
 * Removes duplicate nodes from an unsorted singly linked list in-place.
 *
 * This function iterates through the linked list using two pointers:
 * - A 'current' pointer (`i`) traverses the list from the beginning.
 * - For each node `i`, a 'runner' pointer (`j`) traverses the remainder of the list (`i` to the end).
 *
 * If the 'runner' finds a node whose value is a duplicate of `i`'s value,
 * it removes that duplicate node by updating the `next` pointer of the node *before* the duplicate.
 * This ensures that only the first occurrence of each value is preserved.
 *
 * @template T The type of the values stored in the linked list nodes.
 * @param linkedList The linked list from which to remove duplicates.
 */
export function removeDuplicates<T>(linkedList: LinkedList<T>): void {
  if (!isDefined(linkedList.getHead())) return;

  let i = linkedList.getHead();

  while (isDefined(i)) {
    let j = i;

    while (isDefined(j?.getNext())) {
      if (i.getValue() === j.getNext().getValue()) {
        j.setNext(j.getNext()?.getNext());
      } else {
        j = j.getNext();
      }
    }

    i = i.getNext();
  }
}
