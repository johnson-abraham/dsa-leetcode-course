import { LinkedList, Node } from "../../linked-list";
import { findKthNodeFromListEnd } from "../kth-node-from-list-end";
import { Exception } from "../../../exceptions";

describe("kthFromListEnd", () => {
  let linkedList: LinkedList<number>;
  let returnedNode: Node<number>;

  describe("when the list is empty", () => {
    beforeEach(() => (linkedList = new LinkedList()));

    it("should throw empty list exception", () =>
      expect(() => findKthNodeFromListEnd(linkedList, 1)).toThrow(
        Exception.EMPTY_LIST,
      ));
  });

  describe("when k is less than 1", () => {
    beforeEach(() => {
      linkedList = new LinkedList(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
    });

    it("should throw invalid index exception", () =>
      expect(() => findKthNodeFromListEnd(linkedList, 0)).toThrow(
        Exception.INVALID_INDEX(0),
      ));
  });

  describe("when the list has one element", () => {
    beforeEach(() => (linkedList = new LinkedList(10)));

    describe("and k=1", () => {
      beforeEach(() => (returnedNode = findKthNodeFromListEnd(linkedList, 1)));

      it("should return the head node", () =>
        expect(returnedNode).toEqual(linkedList.getHead()));
    });
  });

  describe("when the list has more than one elements", () => {
    beforeEach(() => {
      linkedList = new LinkedList(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
      linkedList.push(50);
    });

    describe("and k is greater than the list's length", () =>
      it("should throw invalid index exception", () =>
        expect(() => findKthNodeFromListEnd(linkedList, 6)).toThrow(
          Exception.INVALID_INDEX(6),
        )));

    describe("and k is within the list's length", () => {
      beforeEach(() => (returnedNode = findKthNodeFromListEnd(linkedList, 3)));

      it("should return the node kth in position from the list's end", () =>
        expect(returnedNode.getValue()).toEqual(30));
    });
  });
});
