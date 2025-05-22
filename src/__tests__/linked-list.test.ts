import { LinkedList } from "../linked-list";

describe("linkedList", () => {
  describe("when empty", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => (linkedList = new LinkedList()));

    it("should return an empty array", () =>
      expect(linkedList.asArray()).toEqual([]));

    it("should have a length of 0", () =>
      expect(linkedList.getLength()).toEqual(0));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(10));

      it("should have a length of 1", () =>
        expect(linkedList.getLength()).toEqual(1));
      it("should add the element to the end of the list", () =>
        expect(linkedList.asArray()).toEqual([10]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return null", () => expect(poppedValue).toBeNull());
    });

    describe("when an element is unshifted", () => {
      beforeEach(() => linkedList.unshift(10));

      it("should return a length of 1", () =>
        expect(linkedList.getLength()).toEqual(1));

      it("should return the elements in the array in order", () =>
        expect(linkedList.asArray()).toEqual([10]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return null", () => expect(shiftedValue).toBeNull());
    });
  });

  describe("when one element is present", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => (linkedList = new LinkedList(10)));

    it("should have a length of 1", () =>
      expect(linkedList.getLength()).toEqual(1));

    it("should return the element in the array", () =>
      expect(linkedList.asArray()).toEqual([10]));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(20));

      it("should have a length of 2", () =>
        expect(linkedList.getLength()).toEqual(2));

      it("should add the element to the end of the list", () =>
        expect(linkedList.asArray()).toEqual([10, 20]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return the popped value", () =>
        expect(poppedValue).toEqual(10));

      it("should have a length of 0", () =>
        expect(linkedList.getLength()).toEqual(0));

      it("should return an empty array", () =>
        expect(linkedList.asArray()).toEqual([]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return the shifted value", () =>
        expect(shiftedValue).toEqual(10));

      it("should have a length of 0", () =>
        expect(linkedList.getLength()).toEqual(0));

      it("should return an empty array", () =>
        expect(linkedList.asArray()).toEqual([]));
    });
  });

  describe("when more than 1 element is present", () => {
    let linkedList: LinkedList<number>;

    beforeEach(() => {
      linkedList = new LinkedList(10);
      linkedList.push(20);
      linkedList.push(30);
      linkedList.push(40);
      linkedList.push(50);
    });

    it("should have a length of 5", () =>
      expect(linkedList.getLength()).toEqual(5));

    it("should return an array with all the elements in order", () =>
      expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50]));

    describe("when an element is pushed", () => {
      beforeEach(() => linkedList.push(60));

      it("should return the length of 6", () =>
        expect(linkedList.getLength()).toEqual(6));

      it("should return the array with all the elements in order", () =>
        expect(linkedList.asArray()).toEqual([10, 20, 30, 40, 50, 60]));
    });

    describe("when an element is popped", () => {
      let poppedValue: number;

      beforeEach(() => (poppedValue = linkedList.pop()));

      it("should return the popped value", () =>
        expect(poppedValue).toEqual(50));

      it("should have a length of 4", () =>
        expect(linkedList.getLength()).toEqual(4));

      it("should return all the element in the array in order", () =>
        expect(linkedList.asArray()).toEqual([10, 20, 30, 40]));

      describe("when there are only two elements in the list", () => {
        beforeEach(() => {
          linkedList = new LinkedList(10);
          linkedList.push(20);

          poppedValue = linkedList.pop();
        });

        it("should have a length of 1", () =>
          expect(linkedList.getLength()).toEqual(1));

        it("should return all the element in the array in order", () =>
          expect(linkedList.asArray()).toEqual([10]));
      });
    });

    describe("when an element is unshifted", () => {
      beforeEach(() => linkedList.unshift(1));

      it("should return a length of 6", () =>
        expect(linkedList.getLength()).toEqual(6));

      it("should return the array with all the elements in order", () =>
        expect(linkedList.asArray()).toEqual([1, 10, 20, 30, 40, 50]));
    });

    describe("when an element is shifted", () => {
      let shiftedValue: number;

      beforeEach(() => (shiftedValue = linkedList.shift()));

      it("should return the shifted value", () =>
        expect(shiftedValue).toEqual(10));

      it("should have a length of 4", () =>
        expect(linkedList.getLength()).toEqual(4));

      it("should return the elements in the array in order", () =>
        expect(linkedList.asArray()).toEqual([20, 30, 40, 50]));
    });
  });
});
