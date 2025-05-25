import { LinkedList } from "../../linked-list";
import { hasLoop } from "../has-loop";

describe("hasLoop", () => {
  let linkedList: LinkedList<number>;
  let doesHaveLoop: boolean;

  describe("when the list is empty", () => {
    beforeEach(() => (doesHaveLoop = hasLoop(new LinkedList())));

    it("should return false", () => expect(doesHaveLoop).toBeFalsy());
  });

  describe("when the list have one element", () => {
    beforeEach(() => (doesHaveLoop = hasLoop(new LinkedList(10))));

    it("should return false", () => expect(doesHaveLoop).toBeFalsy());
  });

  describe("when the list contains multiple elements", () => {
    describe("and has no loop", () => {
      beforeEach(() => {
        linkedList = new LinkedList(10);
        linkedList.push(20);
        linkedList.push(30);
        linkedList.push(40);
        linkedList.push(50);

        doesHaveLoop = hasLoop(linkedList);
      });

      it("should return false", () => expect(doesHaveLoop).toBeFalsy());
    });

    describe("and has loop", () => {
      beforeEach(() => {
        linkedList = new LinkedList(10);
        linkedList.push(20);
        linkedList.push(30);
        linkedList.push(40);
        linkedList.push(50);

        linkedList.getTail().setNext(linkedList.getHead());

        doesHaveLoop = hasLoop(linkedList);
      });

      it("should return true", () => expect(doesHaveLoop).toBeTruthy());
    });
  });
});
