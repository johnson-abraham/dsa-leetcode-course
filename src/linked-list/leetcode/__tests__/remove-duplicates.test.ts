import { LinkedList } from "../../linked-list";
import { removeDuplicates } from "../remove-duplicates";

describe("removeDuplicates", () => {
  describe("when there is one element in the list", () =>
    it("should retain the same list", () => {
      const linkedList = new LinkedList<number>(10);

      removeDuplicates(linkedList);

      expect(linkedList.asArray()).toEqual([10]);
    }));

  describe("when there are two elements in the list", () => {
    describe("and there are no duplicates", () =>
      it("should retain the same list", () => {
        const linkedList = new LinkedList<number>(10);
        linkedList.push(20);

        removeDuplicates(linkedList);

        expect(linkedList.asArray()).toEqual([10, 20]);
      }));

    describe("and there is a duplicate", () =>
      it("should remove the duplicate from the list", () => {
        const linkedList = new LinkedList<number>(10);
        linkedList.push(10);

        removeDuplicates(linkedList);

        expect(linkedList.asArray()).toEqual([10]);
      }));
  });

  describe("when there are more than two elements in the list", () => {
    describe("and there are no duplicates", () =>
      it("should retain the same list", () => {
        const linkedList = new LinkedList<number>(10);
        linkedList.push(20);
        linkedList.push(30);
        linkedList.push(40);
        linkedList.push(50);

        removeDuplicates(linkedList);

        expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]);
      }));

    describe("and there is a single duplicate", () =>
      it("should remove the duplicate", () => {
        const linkedList = new LinkedList<number>(10);
        linkedList.push(20);
        linkedList.push(30);
        linkedList.push(10);
        linkedList.push(50);

        removeDuplicates(linkedList);

        expect(linkedList.asArray()).toEqual([10, 20, 30, 50]);
      }));

    describe("and there are multiple duplicates", () => {
      describe("and the same number is not duplicated more than once", () =>
        it("should remove the duplicates", () => {
          const linkedList = new LinkedList<number>(10);
          linkedList.push(20);
          linkedList.push(30);
          linkedList.push(10);
          linkedList.push(50);
          linkedList.push(60);
          linkedList.push(70);
          linkedList.push(80);
          linkedList.push(30);
          linkedList.push(90);
          linkedList.push(60);
          linkedList.push(70);

          removeDuplicates(linkedList);

          expect(linkedList.asArray()).toEqual([
            10, 20, 30, 50, 60, 70, 80, 90,
          ]);
        }));

      describe("and the same number is duplicated more than once", () =>
        it("should remove the duplicates", () => {
          const linkedList = new LinkedList<number>(10);
          linkedList.push(20);
          linkedList.push(30);
          linkedList.push(10);
          linkedList.push(50);
          linkedList.push(60);
          linkedList.push(70);
          linkedList.push(80);
          linkedList.push(30);
          linkedList.push(30);
          linkedList.push(90);
          linkedList.push(60);
          linkedList.push(60);
          linkedList.push(70);

          removeDuplicates(linkedList);

          expect(linkedList.asArray()).toEqual([
            10, 20, 30, 50, 60, 70, 80, 90,
          ]);
        }));
    });
  });
});
