import { Node, LinkedList } from "../../linked-list";
import { findMiddleNode } from "../find-middle-node";
import { Exception } from "../../../exceptions";

describe("findMiddleNode", () => {
  let linkedList: LinkedList<number>;
  let returnedNode: Node<number>;

  describe("when the list is empty", () => {
    beforeEach(() => (linkedList = new LinkedList<number>()));

    it("should throw error", () =>
      expect(() => findMiddleNode(linkedList)).toThrow(
        Exception.INVALID_INDEX(0),
      ));
  });

  describe("when the list has one element", () => {
    beforeEach(
      () => (returnedNode = findMiddleNode(new LinkedList<number>(10))),
    );

    it("should return the node with the only element", () =>
      expect(returnedNode.getValue()).toEqual(10));
  });

  describe("when the list has two elements", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>(10);
      linkedList.push(20);

      returnedNode = findMiddleNode(linkedList);
    });

    it("should return the second of the two middle nodes", () =>
      expect(returnedNode.getValue()).toEqual(20));
  });

  describe("when the list contains odd number of nodes", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
      linkedList.push(50);
      linkedList.push(60);
      linkedList.push(70);

      returnedNode = findMiddleNode(linkedList);
    });

    it("should return the middle node", () =>
      expect(returnedNode.getValue()).toEqual(40));
  });

  describe("when the list contains even number of nodes", () => {
    beforeEach(() => {
      linkedList = new LinkedList<number>(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
      linkedList.push(50);
      linkedList.push(60);
      linkedList.push(70);
      linkedList.push(80);

      returnedNode = findMiddleNode(linkedList);
    });

    it("should return the second of the middle nodes", () =>
      expect(returnedNode.getValue()).toEqual(50));
  });
});
